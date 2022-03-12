<template>
  <div id="login">
    <div class="all">
      <div class="icons iconfont icon-xiang"></div>
      <div class="con">
        <h3 @click="showLogin">登录</h3>
        <transition>
          <div v-bind:class="{ show: isShowLogin }" class="login">
            <el-input class="input" v-model="login.username" placeholder="用户名" />
            <el-input class="input" v-model="login.password" placeholder="密码" show-password />
            <p v-bind:class="{ error: login.isError }">{{ login.notice }}</p>
            <el-button class="button" @click="onLogin">登录账号</el-button>
          </div>
        </transition>
        <h3 @click="showRegister">创建账户</h3>
        <transition>
          <div v-bind:class="{ show: isShowRegister }" class="register">
            <el-input class="input" v-model="register.username" placeholder="用户名" />
            <el-input class="input" v-model="register.password" placeholder="密码" show-password />
            <p v-bind:class="{ error: register.isError }">
              {{ register.notice }}
            </p>
            <el-button class="button" @click="onRegister">注册账号</el-button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { register } from "@/api/user";
import { ElMessage } from 'element-plus'
export default {
  name: "Login",
  data() {
    return {
      isShowLogin: true,
      isShowRegister: false,
      login: {
        username: "",
        password: "",
        notice: "",
        isError: false,
      },
      register: {
        username: "",
        password: "",
        notice: "",
        isError: false,
      },
    };
  },
  methods: {
    ...mapActions('user', ['LoginIn']),
    showRegister() {
      this.isShowLogin = false;
      this.isShowRegister = true;
    },
    showLogin() {
      this.isShowLogin = true;
      this.isShowRegister = false;
    },
    async onLogin() {
      if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)) {
        this.login.isError = true;
        this.login.notice = "用户名3-15个字符，仅限字母数字下划线中文";
        return;
      }
      // if (!/^.{6,16}$/.test(this.login.password)) {
      //   this.login.isError = true;
      //   this.login.notice = "密码长度为6~16个字符";
      //   return;
      // }
      return await this.LoginIn(this.login)
    },
    async onRegister() {
      if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)) {
        this.register.isError = true;
        this.register.notice = "用户名3~15个字符，仅限于字母数字下划线中文";
        return;
      }
      // if (!/^.{6,16}$/.test(this.register.password)) {
      //   this.register.isError = true;
      //   this.register.notice = "密码长度为6~16个字符";
      //   return;
      // }
      const res = await register({
        username: this.register.username,
        password: this.register.password,
      });
      if (res.code === 200) {
        ElMessage({
          showClose: true,
          message: res.msg,
          type: "success",
        });
        this.$store.commit("setUsername", this.login.username);
        this.$store.commit("setToken", res.data.token);
        this.$store.commit("changeIsLogin", true);
        this.$router.push({
          path: "/Note",
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #f3f3f3;
  z-index: 100;
  display: flex;
  // flex-direction: column;
  .all {
    margin: 120px auto;
    .icons {
      display: flex;
      justify-content: center;
      font-size: 60px;
      margin: 20px auto 20px auto;
    }
    .con {
      background-color: #fff;
      padding-bottom: 20px;
      margin: auto;
      max-width: 400px;
      // height: 400px;
      border: 1px solid #dedede;
      border-radius: 2px;
      p {
        font-size: 12px;
        margin-left: 25px;
      }

      h3 {
        margin-top: 20px;
        font-size: large;
        text-align: center;
        cursor: pointer;
      }
      .login,
      .register {
        height: 0;
        overflow: hidden;
        transition: height 0.4s;
        margin-top: 20px;
        .error {
          color: red;
        }
        .input,
        .button {
          width: 350px;
          margin: 10px 25px;
        }
        .button {
          margin-top: 20px;
          background-color: #2dbe60;
          color: #fff;
          border-radius: 5px;
          border: none;
          font-size: medium;
          &:hover {
            background-color: #23a04f;
            border-color: #23a04f;
          }
        }
        &.show {
          height: 210px;
        }
      }
    }
  }
}
</style>
