<template>
  <div class="sider-bar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
// import AvatarBar from './AvatarBar.vue'
// import SearchBar from './SearchBar.vue'
import {
  mapState
} from 'vuex'
export default {
  name: 'SiderBar',
  created() {
    // if (this.$store.getters['isLogin'] === false) {
    //   this.$message({
    //     type: 'error',
    //     message: '没有权限-请先登录',
    //     showClose: true
    //   })
    //   this.$router.push({
    //     path: '/login'
    //   })
    // } else {
    //   this._getNotebookList()
    // }
  },
  data() {
    return {
      isCollapse: false,
      noteBookShow: false,
      logoutModal: false,
      isLogin: this.$store.getters['isLogin'],
      notebooksList: [],
      currentNotebook: {},
      notebooks: [],
      notes: [],
      liIndex: -1,
    }
  },
  computed: {
    ...mapState({
      allNoteBooks: state => state.note.allNoteBooks
    }),
  },
  methods: {
    cancel() {
      this.$Message.info('取消注销');
    },
    onShow() {
      this.noteBookShow = !this.noteBookShow;
    },
    onIndex() {
      this.liIndex = -1
    },
    doRouterNotebook(notebookId, index) {
      this.liIndex = index
      this._getNote(notebookId)
      this.currentNotebook = this.notebooks.find(notebook => notebook.ID == notebookId)
      this.$store.commit('setCurrentNote', {})
      this.$router.push({
        path: `/note?notebookId=${notebookId}`
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    /*
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
      _getNotebookList() {
        getNotebooks().then(res => {
          res = res.data.data
          this.notebooksList = res.list
          this.notebooksList.sort((a, b) => a.CreatedAt < b.CreatedAt)
          this.$store.commit('setAllNoteBooks', this.notebooksList)
        }).catch(err => {
          this.$Message.error('网络错误')
        })
      }
    */
  },
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  max-height: 400px;
}
</style>
