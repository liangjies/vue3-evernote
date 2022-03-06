<template>
  <div class="note-sidebar">
    <div class="note-header">
      <div class="note-header-top">
        <Dropdown style="margin-left: 20px">
          <a href="javascript:void(0)">
            {{ currentNotebook.title }}
            <Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="notebook in notebooks" :key="notebook.ID">
              <span @click="doGetNote(notebook.ID)">{{ notebook.title }}</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button @click="addNoteTitleModal = true" class="add-note-btn" type="ghost" size="small">添加笔记</Button>
        <Modal
          v-model="addNoteTitleModal"
          title="输入新建笔记标题"
          @on-ok="doAddNote"
          @on-cancel="cancel">
          <Input v-model="newNoteTitle" icon="ios-list-outline" placeholder="输入笔记标题"></Input>
        </Modal>
      </div>
      <div class="note-header-info">
        <div class="note-count">
          <span class="">{{allNotes.length}} 条笔记</span>
        </div>
        <div class="note-header-icon">
          <Dropdown trigger="click" placement="bottom-end">
              <a href="javascript:void(0)">
                <Icon class="header-icon-style" type="navicon-round"></Icon>
              </a>
             <Dropdown-menu slot="list" class="dropdown-text">
                  <Dropdown-item><Icon class="icon-fa" type="checkmark"></Icon>摘要视图</Dropdown-item>
                  <Dropdown-item><Icon class="icon-fa icon-fa-ucheck" type="checkmark" ></Icon>列表视图</Dropdown-item>
                  <div class="divider"></div>
                  <Dropdown-item @click.native ="sortBy('CreatedAt',true)"><Icon class="icon-fa" type="checkmark" :class="{ 'icon-fa-ucheck': drIndex !== 1 }" ></Icon>创建时间<span class="iconfont icon-ic-alphabetical-sorting-az"></span></Dropdown-item>
                  <Dropdown-item @click.native ="sortBy('CreatedAt',false)"><Icon class="icon-fa" type="checkmark" :class="{ 'icon-fa-ucheck': drIndex !== 2 }"></Icon>创建时间<span class="iconfont icon-ic-alphabetical-sorting-za"></span></Dropdown-item>
                  <div class="divider"></div>
                  <Dropdown-item @click.native ="sortBy('UpdatedAt',true)"><Icon class="icon-fa" type="checkmark" :class="{ 'icon-fa-ucheck': drIndex !== 3 }"></Icon>更新时间<span class="iconfont icon-ic-alphabetical-sorting-az"></span></Dropdown-item>
                  <Dropdown-item @click.native ="sortBy('UpdatedAt',false)"><Icon class="icon-fa" type="checkmark" :class="{ 'icon-fa-ucheck': drIndex !== 4 }"></Icon>更新时间<span class="iconfont icon-ic-alphabetical-sorting-za"></span></Dropdown-item>
                  <div class="divider"></div>
                  <Dropdown-item @click.native ="sortBy('Title',true)"><Icon class="icon-fa" type="checkmark" :class="{ 'icon-fa-ucheck': drIndex !== 5 }"></Icon>标题<span class="iconfont icon-ic-alphabetical-sorting-az"></span></Dropdown-item>
                  <Dropdown-item @click.native ="sortBy('Title',false)"><Icon class="icon-fa" type="checkmark" :class="{ 'icon-fa-ucheck': drIndex !== 6 }"></Icon>标题<span class="iconfont icon-ic-alphabetical-sorting-za"></span></Dropdown-item>
              </Dropdown-menu>
          </Dropdown>
        </div>
      </div>
    </div>
    <div class="note-tab">
      <div class="title-tab">标题</div>
      <div class="update-time-tab">更新时间</div>
    </div>
    <ul class="note-list">
      <li @click="doRouterNoteCurrentNotebook(currentNotebook.ID, note.ID, index)" :class="{ 'note-item-active': index === liIndex }" class="note-item" v-for="(note, index) in allNotes" :key="note.ID">
        <div class="note-title">{{ note.title }}</div>
        <div class="note-update-time">{{ _formateDate(note.UpdatedAt) }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getNotebooks, getNote, addNote, getNoteById } from '../common/js/request.js'
  import { friendlyDate } from '../common/js/util.js'
  import { mapState } from 'vuex'
  import '../common/css/iconfont/iconfont.css'
  export default {
    name: 'NoteSiderbar',
    created() {
      if(this.$store.getters['isLogin'] === false){
        this.$Message.error('没有权限-请先登录')
        this.$router.push({
          path: '/login'
        })
      }else{
        this._getNotebooks()
      }
    },
    data() {
      return {
        notebooks: [],
        notes: [],
        currentNotebook: {},
        currentNote: {},
        liIndex: -1,
        addNoteTitleModal: false,
        newNoteTitle: '',
        drIndex: 1
      }
    },
    computed: {
      ...mapState({
        allNotes: state => state.note.allNotes
      }),
    },
    methods: {
      toTrash() {
        this.$router.push({
          path: '/trash'
        })
      },
      sortBy(key,desc){
        if(key=="CreatedAt"){
          if(desc){
            this.notes.sort((a, b) => a.CreatedAt < b.CreatedAt? 1 : -1)
            this.drIndex = 1
          }else{
            this.notes.sort((a, b) => a.CreatedAt > b.CreatedAt? 1 : -1)
            this.drIndex = 2
          }
        }
        if(key=="UpdatedAt"){
          if(desc){
            this.notes.sort((a, b) => a.UpdatedAt < b.UpdatedAt? 1 : -1)
            this.drIndex = 3
          }else{
            this.notes.sort((a, b) => a.UpdatedAt > b.UpdatedAt? 1 : -1)
            this.drIndex = 4
          }
        }
        if(key=="Title"){
          if(desc){
            this.notes.sort((a, b) => a.title < b.title? 1 : -1)
            this.drIndex = 5
          }else{
            this.notes.sort((a, b) => a.title > b.title? 1 : -1)
            this.drIndex = 6
          }
        }
        this.$store.commit('setAllNotes', this.notes)
      },
      doAddNote() {
        addNote(this.$route.query.notebookId, this.newNoteTitle, '').then(res => {
          res = res.data
          this.$Message.success(res.msg)
          this._getNote(this.$route.query.notebookId)
          this.newNoteTitle = ''
        }).catch(err => {
          this.$Message.error('添加笔记失败')
        })
      },
      cancel() {
        this.$Message.info('取消新建笔记')
      },
      doRouterNoteCurrentNotebook(notebookId, noteId, index) {
        this.notes.title
        
        this.liIndex = index
        this.$store.commit('setNotebookId', notebookId)
        this.$store.commit('setNoteId', noteId)
        this.$router.push({
          path: `/note?noteId=${noteId}&notebookId=${notebookId}`
        })
        getNoteById(noteId).then(res => {
            res = res.data.data
            this.notes = res.list
            this.$store.commit('setCurrentNote', this.notes[0])
          }).catch(err => {
          this.$Message.error('获取笔记失败')
        })
      },
      doGetNote(notebookId) {
        this._getNote(notebookId)
        this.currentNotebook = this.notebooks.find(notebook => notebook.ID == notebookId)
        this.$store.commit('setCurrentNote', {})
        this.$router.push({
          path: `/note?notebookId=${notebookId}`
        })
      },
      _getNote(notebookId) {
        getNote(notebookId).then(res => {
          res = res.data.data
          this.notes = res.list
          //console.log(this.notes)
          this.notes.sort((a, b) => a.UpdatedAt < b.UpdatedAt)
          this.$store.commit('setAllNotes', this.notes)
          if (this.notes.length === 0) {
            this.$Message.info('该笔记本下暂无笔记')
          }
        }).catch(err => {
          this.$Message.error('获取笔记失败')
        })
      },
      _getNotebooks() {
        getNotebooks().then(res => {
          res = res.data.data
          this.notebooks = res.list
          //console.log(this.notebooks)
          this.notebooks.sort((a, b) => a.createdAt < b.createdAt)
          if (!this.$route.query.notebookId) {
            this.currentNotebook = this.notebooks[0]
            this._getNote(this.currentNotebook.ID)
          } else {
            this.currentNotebook = this.notebooks.find(notebook => notebook.ID == this.$route.query.notebookId)
            this._getNote(this.currentNotebook.ID)
          }
        }).catch(err => {
          this.$Message.error('获取笔记本失败')
        })
      },
      _formateDate(dateStr) {
        return friendlyDate(dateStr)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../common/stylus/variables.styl';
  @import '../common/stylus/styles.styl';
  .note-sidebar
    width 300px
    max-height 100%
    overflow auto
    background-color $notebook-bg
    margin-left 240px
    border-right 1px solid $line-color
    .note-header
      text-align center
      padding 18px 16px 0 24px
      position relative
      .add-note-btn
        position absolute
        right 5px
        top 12px
    .note-header-top
      margin-bottom 12px
    .note-header-info
      display flex
      height 26px
      line-height 24px
      margin 0 -3px 11px 0
      justify-content space-between
      .note-count
        font-size 14px
        min-width 50px
      .note-header-icon
        float right
        .dropdown-text
          text-align left
        .icon-fa-ucheck
          visibility hidden
        .icon-fa
          width 15px
        .divider
          margin 3px 0
          height 1px
          background-color #e5e5e5
      .header-icon-style
        margin-left 5px
        font-size large
    .note-tab
      border-top 1px solid $line-color
      display flex
      font-size 14px
      border-bottom 1px solid $line-color
      .update-time-tab, .title-tab
        padding 10px
        flex 1
      .update-time-tab
        border-right 1px solid $line-color
    .note-list
      -webkit-box-flex 1
      overflow auto
      font-size 13px
      .note-item
        display flex
        padding 10px
        border-bottom 1px solid $line-color
        cursor pointer
        transition all .3s
        &.note-item-active
          background-color $theme-color
          color #fff
        &:hover
          background-color $theme-color
          color #fff
        .note-update-time
          flex 1
          margin-left 20px
        .note-title
          flex 1
          width 45px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          // padding-left 20px
</style>
