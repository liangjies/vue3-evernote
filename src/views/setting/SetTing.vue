<template>
  <div>
    <el-dialog v-model="dialogVisible" custom-class="custom-dialog" width="700px">
      <el-tabs
        tab-position="left"
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
              <div class="split">
                <p class="content">113944@qq.com</p>
                <p class="button" @click="changeEmail">更换邮箱</p>
              </div>
            </div>
            <div class="content-box">
              <p class="title">用户名</p>
              <div class="split">
                <p class="content">{{ userName }}</p>
              </div>
            </div>
            <div class="content-box">
              <p class="title">昵称</p>
              <div class="split">
                <p class="content">{{ nickName }}</p>
                <p class="button" @click="changeNickName">修改昵称</p>
              </div>
            </div>
            <div class="content-box">
              <p class="title">注册时间</p>
              <div class="split">
                <p class="content">2021/4/22</p>
              </div>
            </div>
            <div class="content-box">
              <el-button @click="changePass">修改密码</el-button>
            </div>
            <div class="content-avatar">
              <div class="avatar">
                <avatar-set></avatar-set>
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
    <email-set ref="emailSet"></email-set>
    <pass-set ref="passSet"></pass-set>
    <nick-name-set ref="nickNameSet" :nickName="nickName"></nick-name-set>
  </div>
</template>
<script>
import { UserFilled, Setting } from "@element-plus/icons-vue";
import EmailSet from "@/views/setting/component/EmailSet.vue";
import AvatarSet from "@/views/setting/component/AvatarSet.vue";
import PassSet from "@/views/setting/component/PassSet.vue";
import NickNameSet from "@/views/setting/component/NickNameSet.vue";
import { mapState } from "vuex";
export default {
  name: "SetTing",
  components: {
    UserFilled,
    Setting,
    EmailSet,
    AvatarSet,
    PassSet,
    NickNameSet,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    ...mapState({
      nickName: (state) => state.user.userInfo.nickName,
      userName: (state) => state.user.userInfo.userName,
    }),
  },
  methods: {
    changeEmail() {
      this.$refs.emailSet.show();
    },
    changePass() {
      this.$refs.passSet.show();
    },
    changeNickName() {
      this.$refs.nickNameSet.show();
    },
    show() {
      this.dialogVisible = true;
    },
  },
};
</script>
<style lang="less" scoped>
.content {
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
.demo-tabs {
  height: 500px;
}
// .el-tabs--right .el-tabs__content,
// .el-tabs--left .el-tabs__content {
//   height: 100%;
// }
</style>
