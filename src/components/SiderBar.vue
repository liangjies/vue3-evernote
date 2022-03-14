<template>
  <div class="sider-bar" id="sidebar">
    <div class="sidebar-con">
      <div class="login">
        <img
          src="https://s1.ax1x.com/2022/03/07/b6Ppwj.png"
          alt=""
          class="user-image"
        />
        <div class="icons">
          <div class="addNote show">
            <el-icon>
              <plus />
            </el-icon>
          </div>
          <router-link to="/Search" title="搜索">
            <div class="searchNote show">
              <el-icon>
                <search />
              </el-icon>
            </div>
          </router-link>
          <router-link to="/NoteList" title="笔记">
            <el-icon class="note el-icon-s-order">
              <document />
            </el-icon>
          </router-link>
          <div title="笔记本" @click.stop="notebookOpen = true">
            <el-icon class="book el-icon-s-platform" :class="{'note-book-open':notebookOpen}">
              <notebook />
            </el-icon>
          </div>
          <div class="userMenu" @click.stop="open = true">
            <img
              src="https://s1.ax1x.com/2022/03/07/b6amRI.png"
              alt=""
              class="userMenus-image"
            />
          </div>
          <!-- <router-link to="/trash" title="回收站"><i class="trash el-icon-delete-solid" @click="trash"></i></router-link> -->
        </div>
      </div>
      <div class="logout" @click="onLogout">
        <i class="el-icon-switch-button"></i>
      </div>
    </div>
    <div v-if="open">
      <user-pop v-clickoutside="handleClickOutside"></user-pop>
    </div>
    <div v-if="notebookOpen">
      <notebook-pop v-clickoutside="notebookClickOutside"></notebook-pop>
    </div>
  </div>
</template>

<script>
import { Plus, Document, Notebook, Search } from "@element-plus/icons-vue";
import UserPop from "./UserPop.vue";
import NotebookPop from "./NotebookPop.vue";
import clickoutside from "../utils/click-outside";
import { mapActions } from 'vuex'

export default {
  directives: { clickoutside },
  name: "SiderBar",
  components: {
    UserPop,
    NotebookPop,
    Plus,
    Document,
    Notebook,
    Search,
  },
  created() {
    this.GetNotebooksData()
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
      open: false,
      notebookOpen: false,
    };
  },

  methods: {
    ...mapActions('notebook', ['GetNotebooksData']),
    test() {
      console.log("run");
    },
    handleClickOutside() {
      this.open = false;
      console.log("click outside");
    },
    notebookClickOutside() {
      this.notebookOpen = false;
    },
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
        .note-book-open {
          border: 1px solid #2dbe60;
          background-color: #2dbe60;
          color: #fff;
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
}
</style>