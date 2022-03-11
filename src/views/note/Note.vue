<template>
  <sider-bar></sider-bar>
  <div class="note-page">
    <div class="note-header">
      <div class="note-header-title">笔记</div>
    </div>
    <div class="notes-view">
      <div class="notes-view-subheader">
        <div class="subheader-text">4条笔记</div>
        <div class="subheader-options">
          <el-dropdown trigger="click" placement="bottom-start">
            <span class="el-dropdown-link">
              选项
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item disabled style="font-size: 11px;">排序方式</el-dropdown-item>
                <el-dropdown-item>创建日期（最早优先）</el-dropdown-item>
                <el-dropdown-item>创建日期（最新优先）</el-dropdown-item>
                <el-dropdown-item>更新日期（最早优先）</el-dropdown-item>
                <el-dropdown-item>更新日期（最新优先）</el-dropdown-item>
                <el-dropdown-item>标题（升序排列）</el-dropdown-item>
                <el-dropdown-item>标题（降序排列）</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="notes-view-ScrollWindow">
        <div>
          <div class="notes-view-note">
            <div class="note-hover"></div>
            <div class="note-border"></div>
            <div class="note-snippetContent">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiderBar from "@/components/SiderBar.vue";
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  name: "NoteList",
  components: { SiderBar, ArrowDown },
  created() {
    console.log("created");
  },
};
</script>

<style lang="less" scoped>
.note-page {
  margin-left: 73px;
  width: 350px;
  .note-header {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 24px 20px 0 24px;
    text-align: left;
    position: relative;
    margin-bottom: -7px;
    .note-header-title {
      color: #878787;
      display: inline-block;
      vertical-align: top;
      font-size: 21px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-weight: 300;
      line-height: 26px;
    }
  }
  .notes-view {
    color: #878787;
    height: 100%;
    width: 350px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    .notes-view-subheader {
      position: relative;
      border-bottom: 1px solid #ececec;
      padding: 0 24px;
      width: 100%;
      height: 24px;
      margin-top: 32px;
      .subheader-text {
        font-size: 13px;
        font-weight: 400;
        color: #ababab;
      }
      .subheader-options {
        position: absolute;
        right: 24px;
        top: 0;
        .el-dropdown-link {
          font-size: 13px;
          font-weight: 400;
          color: #878787;
          .el-icon--right {
            margin-left: 0;
            top: 2px;
          }
        }
      }
    }
    .notes-view-ScrollWindow {
      height: 795px;
      .notes-view-note {
        height: 120px;
        cursor: pointer;
        margin: 0 auto;
        text-align: left;
        overflow: hidden;
        position: relative;
        .note-hover :hover {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0;
          background-color: rgba(43, 181, 92, 0.9);
          transition: opacity 0.1s ease-in-out;
        }
        .note-border {
          border: 3px solid #d9d9d9;
        }
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