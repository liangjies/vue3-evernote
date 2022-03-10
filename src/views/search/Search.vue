<template>
  <sider-bar></sider-bar>
  <div class="search-page">
    <div class="search-top">
      <div class="search-input-box">
        <div class="search-input-placeholder">搜索笔记</div>
        <input
          type="text"
          class="search-input-text"
          id="gwt-debug-searchViewSearchBox"
        />
        <el-icon class="search-input-icon"><circle-close-filled /></el-icon>
      </div>
    </div>
    <div class="search-input-footer">
      <div class="search-footer-box">
        <div class="search-input-footer-text">正在搜索&nbsp;</div>
        <div class="search-input-footer-tip">你的笔记本</div>
      </div>
      <div class="search-input-footer-split"></div>
    </div>
  </div>
</template>

<script>
import SiderBar from "@/components/SiderBar.vue";
import { CircleCloseFilled } from "@element-plus/icons-vue";
export default {
  name: "Search",
  components: { SiderBar, CircleCloseFilled },
  created() {
    console.log("created");
  },
};
</script>

<style lang="less" scoped>
.search-page {
  margin-left: 73px;
  .search-top {
    transition: padding 0.3s ease-in-out;
    padding: 121px 64px 25px;
    .search-input-box {
      position: relative;
      height: 52px;
      line-height: 52px;
      .search-input-placeholder {
        color: #ececec;
        font-size: 44px;
        font-weight: 500;
        letter-spacing: -0.3px;
      }
      .search-input-text {
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        border-width: 0;
        color: #606060;
        height: 52px;
        position: absolute;
        top: 0;
        left: 0;
        width: 90%;
        font-size: 44px;
        font-weight: 500;
        letter-spacing: -0.3px;
        &:focus {
          outline: none;
        }
      }
      .search-input-icon {
        font-size: 30px;
        opacity: 0.2;
        overflow: hidden;
        position: absolute;
        top: 12px;
        right: 18px;
        cursor: pointer;
      }
    }
  }
  .search-input-footer {
    .search-footer-box {
      margin: 0 0 13px 64px;
      transition: margin 0.3s ease-in-out;
      .search-input-footer-text {
        color: #878787;
        display: inline-block;
        vertical-align: bottom;
        font-size: 13px;
        font-weight: 500;
      }
      .search-input-footer-tip {
        color: #2dbe60;
        display: inline-block;
        max-width: 500px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        vertical-align: bottom;
        font-size: 13px;
        font-weight: 500;
      }
    }
    .search-input-footer-split {
      margin: 0 64px 46px;
      border-bottom: 1px solid #ececec;
      transition: margin 0.3s ease-in-out;
    }
  }
}
</style>>
