<template>
  <note></note>
  <div class="note-detail">
    <div class="note-header">
      <div class="note-operation">
        <div class="note-operation-left">
          <el-icon class="note-operation-icon"><info-filled /></el-icon>
          <el-icon class="note-operation-icon"><delete /></el-icon>
        </div>
        <div class="note-operation-right">
          <el-icon class="note-operation-icon"><full-screen /></el-icon>
        </div>
      </div>
      <div class="note-label">
        <div class="note-notebook">
          <el-icon class="note-notebook-icon"><notebook /></el-icon>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              微信
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="note-label-split"></div>
        </div>
        <div class="note-tags">
          <el-icon class="note-tags-icon"><price-tag /></el-icon>
          <span class="note-tag"> 微信 </span>
        </div>
      </div>
    </div>
    <!-- 编辑器容器 -->
    <div id="editor">
        <note-editor></note-editor>
    </div>
  </div>
</template>

<script>
import Note from "@/views/note/Note.vue"
import Editor from "@tinymce/tinymce-vue"
import NoteEditor from "@/views/note/NoteEditor.vue"
import {
  Delete,
  InfoFilled,
  FullScreen,
  Notebook,
  ArrowDown,
  PriceTag,
} from "@element-plus/icons-vue";
export default {
  components: {
    Note,
    Delete,
    InfoFilled,
    FullScreen,
    Notebook,
    ArrowDown,
    PriceTag,
    NoteEditor
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
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
  .note-label {
    position: relative;
    max-width: 960px;
    min-width: 240px;
    padding: 0 48px;
    margin: 0 auto 38px;
    height: 35px;
    border-bottom: 1px solid #ececec;
    .note-notebook {
      float: left;
      .note-notebook-icon {
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
        margin: 5px 8px 0;
      }
    }
    .note-tags {
      .note-tags-icon {
        opacity: 0.5;
      }
      .note-tag {
        margin-left: 5px;
        color: #fff;
        border-color: #2dbe60;
        background-color: #2dbe60;
        vertical-align: top;
        padding: 1px 8px 1px 6px;
        // margin: 1px 8px 1px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        text-align: center;
      }
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