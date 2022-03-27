<template>
  <note v-on:childByValue="childByValue" :refresh="refresh"></note>
  <div class="note-detail" v-show="this.id != -1">
    <div class="note-header">
      <div class="note-operation">
        <div class="note-operation-left">
          <el-icon class="note-operation-icon" ref="upload">
            <info-filled />
          </el-icon>
          <el-icon class="note-operation-icon" @click="doDelete()">
            <delete />
          </el-icon>
        </div>
        <div class="note-operation-right">
          <el-button
            v-if="id == -2"
            type="danger"
            class="note-operation-icon"
            @click="doCancel()"
            size="small"
          >
            取消
          </el-button>
          <el-button
            type="primary"
            class="note-operation-icon"
            @click="doUpdateNote()"
            size="small"
          >
            保存
          </el-button>
          <div class="note-notebook">
            <el-icon class="note-notebook-icon">
              <notebook />
            </el-icon>
            <div class="note-tags">
              <el-icon class="note-tags-icon">
                <price-tag />
              </el-icon>
              <span class="note-tag"> 微信 </span>
            </div>
            <el-dropdown trigger="click" style="margin-top: 1px">
              <span class="el-dropdown-link">
                {{ notebook }}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="notebook in notebooks"
                    :key="notebook.id"
                    @click="updateNotebook(notebook.id)"
                    >{{ notebook.title }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <div class="note-label-split"></div>
          </div>
        </div>
      </div>
      <div class="note-label"></div>
    </div>
    <div class="note-title">
      <input
        class="note-title-input"
        v-model="titleInput"
        placeholder="请输入标题"
      />
    </div>
    <!-- 编辑器容器 -->
    <div id="editor">
      <note-editor
        :value="value"
        v-on:inputData="inputData"
        v-on:onClickEidtor="onClickEidtor"
      ></note-editor>
    </div>
  </div>
</template>

<script>
import Note from "@/views/note/Note.vue";
import NoteEditor from "@/views/note/NoteEditor.vue";
import { GetNoteById, UpdateNote, CreateNote, DeleteNote } from "@/api/note";
import { ElMessage, ElMessageBox } from "element-plus";
import { mapState } from "vuex";
import {
  Delete,
  InfoFilled,
  Notebook,
  ArrowDown,
  PriceTag,
} from "@element-plus/icons-vue";
export default {
  components: {
    Note,
    Delete,
    InfoFilled,
    Notebook,
    ArrowDown,
    PriceTag,
    NoteEditor,
  },
  data() {
    return {
      id: -1,
      titleInput: "",
      value: "",
      content: "",
      notebook: "",
      notebookID: -1,
      refresh: false,
    };
  },
  computed: {
    ...mapState({
      notebooks: (state) => state.notebook.notebooks,
    }),
  },
  mounted() {},
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      //console.log(childValue);
      this.titleInput = childValue.title;
      this.id = childValue.id;
      this.GetNote(childValue.id);
    },
    onClickEidtor: function (onClickEidtor) {
      // console.log(this.$refs.upload)
      this.$refs.upload.$el.click();
      console.log(onClickEidtor);
    },
    async GetNote(noteId) {
      if (noteId == -2) {
        this.value = "";
        this.notebook = this.notebooks[0].title;
        this.notebookID = this.notebooks[0].id;
        return;
      }
      const res = await GetNoteById({ id: noteId });
      if (res.code === 200) {
        this.value = res.data.list[0].content;
        this.notebookID = res.data.list[0].notebookId;
        this.setNotebookTitle(res.data.list[0].notebookId);
      }
    },
    inputData: function (inputData) {
      // childValue就是子组件传过来的值
      this.content = inputData;
    },
    async doUpdateNote() {
      if (this.id != -2) {
        const res = await UpdateNote({
          id: this.id,
          title: this.titleInput,
          content: this.content,
          notebookId: this.notebookID,
        });
        if (res.code === 200) {
          ElMessage({
            showClose: true,
            message: res.msg,
            type: "success",
          });
        }
      } else if (this.id == -2) {
        console.log(this.notebookID);
        const res = await CreateNote({
          title: this.titleInput,
          content: this.content,
          notebookId: this.notebookID,
        });
        if (res.code === 200) {
          this.refresh = !this.refresh;
          this.id = res.data.id;
          ElMessage({
            showClose: true,
            message: res.msg,
            type: "success",
          });
        }
      }
    },
    async updateNotebook(id) {
      this.notebookID = id;
      this.setNotebookTitle(id);
    },
    setNotebookTitle(id) {
      this.notebooks.forEach((notebook) => {
        if (notebook.id == id) {
          this.notebook = notebook.title;
        }
      });
    },
    doCancel() {
      this.id = -1;
      this.refresh = !this.refresh;
    },
    doDelete() {
      ElMessageBox.confirm("是否删除?", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning",
      }).then(async () => {
        const res = await DeleteNote({ id: this.id });
        if (res.code === 200) {
          this.refresh = !this.refresh;
          ElMessage({
            showClose: true,
            message: res.msg,
            type: "success",
          });
        }
      });
    },
    test() {
      console.log("click here");
    },
  },
};
</script>

<style lang="less" scoped>
.note-detail {
  margin-left: 423px;
  background: white;
  border-left: 1px solid #ececec;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  min-width: 403px;
  .note-operation {
    position: relative;
    padding: 12px 0;
    .note-operation-left {
      display: inline-block;
      padding-top: 2px;
      padding-left: 18px;
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
      position: relative;
      .note-operation-icon {
        cursor: pointer;
        opacity: 0.4;
        font-size: 23px;
        color: black;
        margin: 0 16px 0 0;
        &:hover {
          opacity: 1;
          color: #2dbe60;
        }
      }
    }
    .note-operation-right {
      float: right;
      margin-left: 20px;
      .note-notebook {
        margin-top: 2px;
        float: right;
        .note-notebook-icon {
          margin-top: 2px;
          vertical-align: top;
          opacity: 0.5;
          font-size: 14px;
        }
        .el-dropdown-link {
          margin-left: 5px;
          font-size: 13px;
          font-weight: 400;
          color: #878787;
          .el-icon--right {
            opacity: 0.5;
            margin-left: 0;
            top: 2px;
          }
        }
        .note-label-split {
          border-left: 1px solid #ececec;
          height: 19px;
          display: inline-block;
          vertical-align: top;
          margin: 0 8px 0;
        }
      }
      .note-tags {
        margin: 0 16px 0 0;
        float: right;
        .note-tags-icon {
          opacity: 0.5;
        }
        .note-tag {
          float: right;
          margin-left: 5px;
          color: #fff;
          border-color: #2dbe60;
          background-color: #2dbe60;
          vertical-align: top;
          padding: 1px 8px 1px 6px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
          text-align: center;
        }
      }
      .note-operation-icon {
        margin-right: 8px;
        float: right;
      }
    }
    .note-label {
      position: relative;
      max-width: 960px;
      min-width: 240px;
      padding: 0 48px;
      margin: 0 auto 38px;
      height: 35px;
      border-bottom: 1px solid #ececec;
    }
  }
  .note-title {
    .note-title-input {
      width: 100%;
      padding: 10px 20px;
      font-size: 25px;
      font-weight: 700;
      outline: none;
      border: none;
    }
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>