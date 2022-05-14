<template>
  <el-dialog v-model="dialogVisible" title="修改密码" :before-close="closeDialog">
    <p>原密码</p>
    <el-input size="large" v-model="oldPass" type="password"></el-input>
    <p>新密码</p>
    <el-input size="large" v-model="newPass1" type="password"></el-input>
    <p>确认新密码</p>
    <el-input size="large" v-model="newPass2" type="password"></el-input>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="setPass">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ChangePassword } from "@/api/user";
import { ElMessage } from "element-plus";
export default {
  name: "PassSet",
  components: {},
  data() {
    return {
      dialogVisible: false,
      oldPass: "",
      newPass1: "",
      newPass2: "",
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
    async setPass() {
      // 校验
      if (this.newPass1 !== this.newPass2) {
        ElMessage({
          showClose: true,
          message: "确认新密码与新密码不相同",
          type: "error",
        });
        return;
      }
      // 校验
      if (!/^[\w]{6,25}$/.test(this.newPass1)) {
        ElMessage({
          showClose: true,
          message: "密码长度请在6-25字节",
          type: "error",
        });
        return;
      }

      const res = await ChangePassword({
        oldPass: this.oldPass,
        newPass: this.newPass1,
      });
      if (res.code === 200) {
        ElMessage({
          showClose: true,
          message: res.msg,
          type: "success",
        });
        this.dialogVisible = false;
      }
    },
    closeDialog() {
      this.oldPass = "";
      this.newPass1 = "";
      this.newPass2 = "";
      this.dialogVisible = false;
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
