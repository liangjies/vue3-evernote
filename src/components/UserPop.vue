<template>
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
</template>
<script>
import { CircleClose, Setting, QuestionFilled } from "@element-plus/icons-vue";

export default {
  name: "UserPop",
  components: {
    CircleClose,
    Setting,
    QuestionFilled
  },
  data() {
    return {
      userName: "梁杰s",
      open: false
    }
  },
  created() {
  },
  methods: {
    toggleOpen: function () {
      console.log("toggleOpen")
      this.open = !this.open;
    },
    close: function (e) {
      console.log("close")
      if (this.$el.contains(e.target)) return;
      this.open = false;
    },
  },
  directives: {
    clickoutside: {
      bind: function (el, binding, vnode) {
        const documentHandler = function (e) {
          if (!vnode.context || el.contains(e.target)) return;
          binding.value(e);
        };

        setTimeout(() => {
          document.addEventListener('click', documentHandler);
        }, 0);
      }
    }
  }
}
</script>
<style scoped lang="less">
.user-pop {
  position: fixed;
  bottom: 10px;
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
    .user-name {
      color: #4a4a4a;
      margin-top: 11px;
    }
    .user-type {
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
  .user-pop-func {
    margin: 0 12px 12px;
    padding-top: 15px;
    border-top: 1px solid #e1e1e1;
    top: -1px;
    position: relative;
    .user-pop-ourside {
      cursor: pointer;
      height: 32px;
    }
    .user-pop-box {
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
    .user-pop-ourside:hover {
      background-color: #2dbe60;
      .user-pop-text,
      .user-pop-icon {
        color: #fff;
      }
    }
  }
}
</style>