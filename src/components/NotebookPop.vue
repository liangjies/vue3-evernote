<template>
  <div class="notebook-pop">
    <div class="notebook-pop-header">
      <div class="header-title">笔记本</div>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="创建笔记本"
        placement="bottom"
        ><el-icon class="add-icon" @click="dialogFormVisible = true"
          ><folder-add /></el-icon
      ></el-tooltip>
      <el-dialog v-model="dialogFormVisible" title="新建笔记本">
        <input
          v-model="notebookInput"
          class="notebook-title-input"
          placeholder="给笔记本起个名称"
          autofocus="autofocus"
        />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="addNewNotebook()">确定</el-button>
          </span>
        </template>
      </el-dialog>

      <div class="search-bar">
        <div class="search-tip">
          <el-icon class="search-icon">
            <search />
          </el-icon>
          <span class="search-tip-text">查找笔记本</span>
        </div>
        <input type="text" class="search-input" />
      </div>
    </div>
    <div class="notebook-lists-box">
      <div
        class="notebook-lists"
        v-for="(notebook, index) in notebooks"
        :key="notebook.id"
      >
        <div class="notebook-list" @click="doClickNotebook(notebook.id)">
          <div class="notebook-title">
            {{ notebook.title }}
          </div>
          <div class="notebook-number">{{ notebook.noteCounts }} 条笔记</div>
          <div class="notebook-operate">
            <el-icon
              class="notebook-operate-icon"
              @click="deleteDialog(notebook.id)"
              ><delete-filled
            /></el-icon>
          </div>
          <div class="notebook-split"></div>
        </div>
      </div>
      <el-dialog v-model="dialogDeleteVisible" title="删除笔记本">
        <span>确定删除 {{ deleteInfo.title }} ?</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogDeleteVisible = false">取消</el-button>
            <el-button type="primary" @click="deleteNotebook()">确定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {
  FolderAdd,
  Search,
  DeleteFilled,
  Notebook,
} from "@element-plus/icons-vue";
import { mapState } from "vuex";
import { CreateNotebook, DeleteNotebook } from "@/api/notebook";
import { mapActions } from "vuex";
import { ElMessage } from "element-plus";
import router from "@/router/index";
export default {
  name: "NotebookPop",
  emits: ["PopOpenValue"],
  components: { FolderAdd, Search, DeleteFilled, Notebook },
  data() {
    return {
      notebookInput: "",
      dialogFormVisible: false,
      dialogDeleteVisible: false,
      deleteInfo: { id: -1, title: "" },
      open:true
    };
  },
  created() {
    // this.notebooks = this.$store.getters["notebook/notebooks"];
  },
  computed: {
    ...mapState({
      notebooks: (state) => state.notebook.notebooks,
    }),
  },
  methods: {
    ...mapActions("notebook", ["GetNotebooksData"]),
    async addNewNotebook() {
      const res = await CreateNotebook({ title: this.notebookInput });
      if (res.code === 200) {
        this.GetNotebooksData();
        ElMessage({
          showClose: true,
          message: res.msg,
          type: "success",
        });
        this.dialogFormVisible = false;
      }
    },
    deleteDialog(notebookId) {
      this.deleteInfo.id = notebookId;
      this.getNotebookById(notebookId);
      this.dialogDeleteVisible = true;
    },
    async deleteNotebook() {
      const res = await DeleteNotebook({ id: this.deleteInfo.id });
      if (res.code === 200) {
        this.GetNotebooksData();
        ElMessage({
          showClose: true,
          message: res.msg,
          type: "success",
        });
        this.deleteInfo = { id: -1, title: "" };
        this.dialogDeleteVisible = false;
      }
    },
    getNotebookById(id) {
      this.notebooks.forEach((notebook) => {
        if (notebook.id == id) {
          this.deleteInfo.title = notebook.title;
        }
      });
    },
    doClickNotebook(id) {
      router.push({ path: "/NoteDetail/" + id });
      this.open = !this.open
      this.$emit("PopOpenValue", this.open);
    },
  },
};
</script>

<style lang="less" scoped>
.notebook-pop {
  margin-left: 73px;
  width: 459px;
  background: #fff;
  bottom: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-right: 3px solid rgba(236, 236, 236, 0.7);
  transition: transform 0.4s ease-in-out;
  .notebook-pop-header {
    border-bottom: 1px solid #ececec;
    .header-title {
      padding: 21px 24px 32px;
      color: #878787;
      font-size: 21px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .add-icon {
      opacity: 0.5;
      font-size: 20px;
      overflow: hidden;
      cursor: pointer;
      position: absolute;
      top: 21px;
      right: 24px;
    }
    .notebook-title-input {
      width: 100%;
      padding: 10px 20px;
      font-size: 25px;
      font-weight: 700;
      outline: none;
      border: none;
    }
    .search-bar {
      padding: 0 0 24px;
      margin: 0 24px;
      position: relative;
      .search-tip {
        position: relative;
        left: 0;
        text-align: center;
        top: 8px;
        width: 100%;
        // height: 52px;
        cursor: text;
        .search-icon {
          right: 5px;
          font-size: 12px;
          vertical-align: baseline;
          text-align: center;
        }
        .search-tip-text {
          color: #ababab;
          font-size: 13px;
          font-weight: 400;
          vertical-align: baseline;
          text-align: center;
        }
      }
      .search-input {
        position: absolute;
        background-color: transparent;
        border: 1px solid #e1e1e1;
        border-radius: 2px;
        padding: 10px 40px 9px 8px;
        top: 0;
        right: 0;
        outline: none;
        box-sizing: border-box;
        width: 100%;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
  .notebook-lists-box {
    top: 122px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    .notebook-lists {
      cursor: pointer;
      .notebook-list {
        box-sizing: border-box;
        position: sticky;
        height: 66px;
        .notebook-title {
          white-space: nowrap;
          color: #4a4a4a;
          margin: 12px 80px 6px 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          width: 300px;
          height: 20px;
          font-size: 16px;
          font-weight: 400;
        }
        .notebook-number {
          color: #878787;
          margin: 0 0 12px 24px;
          height: 12px;
          font-size: 11px;
          font-weight: 500;
        }
        .notebook-operate {
          display: inline-block;
          position: absolute;
          right: 18px;
          top: 17px;
          z-index: 4;
          // opacity: 0;
          .notebook-operate-icon {
            font-weight: 1000;
            color: #fff;
            display: inline-block;
            cursor: pointer;
            margin-left: 8px;
            vertical-align: top;
          }
        }
        .notebook-split {
          border-bottom: 1px solid #ececec;
          position: absolute;
          left: 12px;
          right: 12px;
        }
        &:hover {
          background-color: rgba(43, 181, 92, 0.9);
          .notebook-title,
          .notebook-number {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>