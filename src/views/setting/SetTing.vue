<template>
  <el-dialog v-model="dialogVisible" custom-class="custom-dialog">
    <el-tabs
      tab-position="left"
      style="height: 400px"
      class="demo-tabs"
      type="border-card"
    >
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="vertical-align: -10%">
              <user-filled />
            </el-icon>
            账号设置
          </span>
        </template>
        <div class="content">
          <div class="content-box">
            <p class="title">邮箱</p>
            <div class="email-split">
              <p class="email-content">113944@qq.com</p>
              <p class="email-button" @click="changeEmail">更换邮箱</p>
            </div>
          </div>

          <div class="content-box">
            <p class="title">用户名</p>
            <div class="split">
              <p class="content">liangjies</p>
            </div>
          </div>
          <div class="content-box">
            <p class="title">注册时间</p>
            <div class="split">
              <p class="content">2021/4/22</p>
            </div>
          </div>

          <div class="content-avatar">
            <div class="avatar">
              <img
                alt="1139629972"
                src="https://as.wiz.cn/as/user/avatar/83570f00-a33f-11eb-afcd-b929454d220b?version=0"
              />
            </div>
            <div class="split">
              <p class="content">2021/4/22</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="vertical-align: -10%">
              <setting />
            </el-icon>
            偏好设置
          </span>
        </template>
        Config
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<script>
import { UserFilled, Setting } from "@element-plus/icons-vue";
export default {
  name: "SetTing",
  components: { UserFilled, Setting },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    changeEmail() {
      this.$router.push("/setting/email");
    },
    show(){
      this.dialogVisible = true;
    }
  },
  watch: {
    dialogVisible(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="less">
.content {
  .content-box {
    margin-top: 32px;
    .title {
      color: #b2bccd;
      font-size: 12px;
    }
    .email-split {
      margin-top: 16px;
      display: flex;
      min-height: 24px;
      align-items: center;
      &:hover {
        .email-button {
          opacity: 1;
        }
      }
      .email-content {
        color: #07142a;
        font-size: 14px;
        line-height: 1;
      }
      .email-button {
        border: none;
        cursor: pointer;
        opacity: 0;
        outline: none;
        padding: 0;
        transition: opacity 0.2s ease-in;
        margin-left: 16px;
        background-color: transparent;
        color: #448aff;
        font-size: 14px;
      }
    }
  }
  .content-box {
    .split {
      margin-top: 16px;
      display: flex;
      min-height: 24px;
      align-items: center;
      &:hover {
        .button {
          opacity: 1;
        }
      }
      .content {
        color: #07142a;
        font-size: 14px;
        line-height: 1;
      }
      .button {
        border: none;
        cursor: pointer;
        opacity: 0;
        outline: none;
        padding: 0;
        transition: opacity 0.2s ease-in;
        margin-left: 16px;
        background-color: transparent;
        color: #448aff;
        font-size: 14px;
      }
    }
  }
  .content-avatar {
    top: 50px;
    right: 10px;
    width: 50px;
    height: 50px;
    overflow: hidden;
    position: absolute;
    border-radius: 45px;
    .avatar {
      width: 50px;
      height: 50px;
      img {
        color: transparent;
        width: 100%;
        height: 100%;
        object-fit: cover;
        text-align: center;
        text-indent: 10000px;
      }
    }
  }
}
.custom-dialog {
  .el-dialog__header {
    padding: 0 0 0 0;
  }
  .el-dialog__body {
    padding: 0 0 0 0;
  }
  .el-dialog__footer {
    padding: 0 0 0 0;
  }
}
.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
