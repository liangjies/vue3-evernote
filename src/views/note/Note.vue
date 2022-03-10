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
          <el-dropdown>
            <span class="el-dropdown-link">
              选项
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu class="dropdown-menu">
                <span class="legend">排序方式</span>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
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
        .dropdown-menu {
          padding: 12px 0;
          margin-top: 4px;
          color: #606060;
          .legend {
            font-size: 11px;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #ababab;
            margin: 7px 0 12px 20px;
          }
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