<template>
  <div class="sider-bar" id="sidebar">
    <div class="sidebar-con">
      <div class="login">
        <img src="https://s1.ax1x.com/2022/03/07/b6Ppwj.png" alt="" class="user-image">
        <div class="icons">
          <div class="addNote show">
            <el-icon>
              <plus @click="onaddNote" />
            </el-icon>
          </div>
          <div class="searchNote show">
            <el-icon>
              <search />
            </el-icon>
          </div>

          <router-link to="/note" title="笔记">
            <el-icon class="note el-icon-s-order">
              <document @click="note" />
            </el-icon>
          </router-link>
          <router-link to="/note" title="文件夹">
            <el-icon class="book el-icon-s-platform">
              <notebook />
            </el-icon>
          </router-link>
  <div style="margin: 15px">
    <el-button @click="showClick">show</el-button>
  </div>
          <div class="userMenu">
            <img src="https://s1.ax1x.com/2022/03/07/b6amRI.png" alt="" class="userMenus-image">
          </div>
          <!-- <router-link to="/trash" title="回收站"><i class="trash el-icon-delete-solid" @click="trash"></i></router-link> -->
        </div>
      </div>
      <div class="logout" @click="onLogout">
        <i class="el-icon-switch-button"></i>
      </div>
    </div>
    <div class="user-pop">
      <div class="user-pop-img">
        <img src="https://s1.ax1x.com/2022/03/07/b6amRI.png" alt="" class="user-image">
        <div class="user-name">{{ userName }}</div>
        <div class="user-type">印象笔记免费帐户</div>
      </div>
      <div class="user-pop-func">
        <div class="user-pop-ourside user-setting">
          <div class="user-pop-box">
            <el-icon class="user-pop-icon">
              <setting />
            </el-icon>
            <span class="user-pop-text">设置</span>
          </div>
        </div>
        <div class="user-pop-ourside user-question">
          <div class="user-pop-box">
            <el-icon class="user-pop-icon">
              <question-filled />
            </el-icon>
            <span class="user-pop-text">使用指南</span>
          </div>
        </div>
        <div class="user-pop-ourside user-logout">
          <div class="user-pop-box">
            <el-icon class="user-pop-icon">
              <circle-close />
            </el-icon>
            <span class="user-pop-text">退出登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Plus, Document, Notebook, Search, CircleClose, Setting, QuestionFilled } from "@element-plus/icons-vue";
// import AvatarBar from './AvatarBar.vue'
// import SearchBar from './SearchBar.vue'
export default {
  name: "SiderBar",
  components: {
    Plus,
    Document,
    Notebook,
    Search,
    CircleClose,
    Setting,
    QuestionFilled
  },
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
      userName: "梁杰s",
      isCollapse: false,
    };
  },
  computed: {
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
  methods: {
    showClick() {
      dropdown1.value.handleOpen()
    },
    test(){
      console.log("run")
    }
  },
};
</script>

<style scoped lang="less">
#sidebar {
  width: 73px;
  background-color: #f8f8f8;
  z-index: 99;
  height: 100%;
  position: absolute;
  .sidebar-con {
    background-color: #f8f8f8;
    border-right: 1px solid #ececec;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .login {
      display: flex;
      flex-direction: column;
      align-items: center;
      .user-image {
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-top: 12px;
        margin-bottom: 30px;
        //position: relative;
        text-align: center;
        outline: none;
      }
      .icons {
        margin-top: 10px;

        // display: flex;
        // flex-direction: column;
        .searchNote,
        .book,
        .note,
        .trash,
        .addNote {
          cursor: pointer;
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          // padding: 6px 0;
          margin: 15px;
          color: #2dbe60;
          border: 1px solid #f8f8f8;
          transition: all 250ms;
          &:hover {
            border: 1px solid #2dbe60;
            background-color: #2dbe60;
            color: #fff;
          }
        }
        .addNote .searchNote {
          background-color: #fff;
          border: 1px solid #ccc;
          margin-bottom: 40px;
        }
        .searchNote {
          margin-bottom: 56px;
        }
        .userMenu {
          cursor: pointer;
          border-top: 1px solid #e1e1e1;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 17px;
          .userMenus-image {
            width: 36px;
            height: 36px;
            border-radius: 18px;
          }
        }
      }
      .icons .show {
        // color:#fff;
        border: 1px solid #2dbe60;
        background-color: #fff;
      }
    }
    .logout {
      cursor: pointer;
      margin: 15px auto;
      font-size: 20px;
      width: 35px;
      height: 35px;
      color: #2dbe60;
      // background: yellow;
      display: flex;
      i {
        margin: auto;
      }
    }
  }
  .user-pop {
    position: fixed;
    top: 438px;
    left: 63px;
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 4px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    transition: opacity 500ms ease-in-out;
    width: 354px;
    overflow: hidden;
    z-index: 9001;
    .user-pop-img {
      text-align: center;
      .user-image {
        border: 1px solid #d1d1d1;
        border-radius: 50%;
        height: 62px;
        margin-top: 20px;
        vertical-align: top;
        width: 62px;
      }
      .user-name{
        color: #4a4a4a;
        margin-top: 11px
      }
      .user-type{
        display: inline-block;
        vertical-align: top;
        color: #ababab;
        max-width: 100%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        font-size: 11px;
        font-weight: 500;
      }
    }
    .user-pop-func{
      margin: 0 12px 12px;
      padding-top: 15px;
      border-top: 1px solid #e1e1e1;
      top: -1px;
      position: relative;
      .user-pop-ourside{
        cursor: pointer;
        height: 32px;
      }
      .user-pop-box{
        padding-top: 3px;
        .user-pop-icon {
          color: #4a4a4a;
          margin-left: 7px;
          vertical-align: middle;
        }
        .user-pop-text {
          padding: 9px 15px 10px 5px;
          font-size: 13px;
          font-weight: 500;
          color: #4a4a4a;
          max-width: 298px;
        }
      }
      .user-pop-ourside:hover{
        background-color: #2dbe60;
        .user-pop-text,.user-pop-icon {
           color: #fff;
        }
      }
    }
  }
}
</style>