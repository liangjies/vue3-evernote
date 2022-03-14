<template>
  <div class="notebook-pop">
    <div class="notebook-pop-header">
      <div class="header-title">笔记本</div>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="创建笔记本"
        placement="bottom"
        ><el-icon class="add-icon"><folder-add /></el-icon
      ></el-tooltip>
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
    <div
      class="notebook-lists"
      v-for="(notebook, index) in notebooks"
      :key="notebook.id"
    >
      <div class="notebook-list">
        <div class="notebook-title">{{ notebook.title }}5555555555555555555555555555555555555555555555555</div>
        <div class="notebook-number">{{ notebook.noteCounts }} 条笔记</div>
        <div class="notebook-operate"></div>
        <div class="notebook-split"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { FolderAdd, Search } from "@element-plus/icons-vue";
export default {
  name: "NotebookPop",
  components: { FolderAdd, Search },
  data() {
    return {
      notebooks: "",
    };
  },
  created() {
    this.notebooks = this.$store.getters['notebook/notebooks'];
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
  .notebook-lists {
    top: 122px;
    .notebook-list {
      .notebook-title {
        white-space: nowrap;
        color: #4a4a4a;
        margin: 12px 80px 6px 24px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        width: 300px;
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
      .notebook-split {
        border-bottom: 1px solid #ececec;
        position: absolute;
        left: 12px;
        right: 12px;
      }
    }
  }
}
</style>