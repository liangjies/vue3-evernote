<template>
  <trash-side v-on:childByValue="childByValue"></trash-side>
  <div class="note-detail">
    <div class="note-header">
      <div class="note-operation">
        <div class="note-operation-left">
          <el-icon class="note-operation-icon"><info-filled /></el-icon>
          <el-icon class="note-operation-icon" @click="doDelete()"
            ><delete
          /></el-icon>
        </div>
      </div>
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
      <note-editor :value="value"></note-editor>
    </div>
  </div>
</template>

<script>
import TrashSide from "@/views/trash/TrashSide.vue";
import NoteEditor from "@/views/note/NoteEditor.vue";
import {GetTrashById} from "@/api/trash";
import {
  Delete,
  InfoFilled,
  FullScreen,
  Notebook,
  ArrowDown,
  PriceTag,
} from "@element-plus/icons-vue";
export default {
  name: "NoteTrash",
  components: {
    TrashSide,
    NoteEditor,
    Delete,
    InfoFilled,
    FullScreen,
    Notebook,
    ArrowDown,
    PriceTag,
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
  methods: {
    childByValue: function (childValue) {
      this.titleInput = childValue.title;
      this.id = childValue.id;
      this.GetNote(childValue.id);
    },
    async GetNote(noteId) {
      if (noteId == -2) {
        this.value = "";
        this.notebook = this.notebooks[0].title;
        this.notebookID = this.notebooks[0].id;
        return;
      }
      const res = await GetTrashById({ id: noteId });
      if (res.code === 200) {
        this.value = res.data.list[0].content;
        this.notebookID = res.data.list[0].notebookId;
      }
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