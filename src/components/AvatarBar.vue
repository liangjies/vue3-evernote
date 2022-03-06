<template>
  <div class="avatar-wrapper-box">
    <span class="avatar">
      <!-- 头像 -->
      <img src="https://s4.ax1x.com/2022/02/23/bp7Cyn.jpg" alt="" class="user-image">
    </span>
    <div class="tag">
      <!-- 用户名 -->
      <span>liangjies</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AvatarBar',
  computed: {
    ...mapState({
      username: state => state.user.username
    }),
    capitalName() {
      return this.$store.getters['username'].substring(0, 1).toUpperCase()
    }
  },
  data() {
    return {
      currentUserName: '',
      isShow: false
    }
  },
}
</script>

<style lang="less">
.avatar-wrapper-box {
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 6px 15px;
}
.avatar {
  height: 28px;
  width: 28px;
}
.user-image {
  position: relative;
  top: 50%;
  margin-top: -13px;
  margin-right: 5px;
  width: 26px;
  height: 26px;
  float: left;
  border-radius: 50%;
}
.tag {
  font-size: 13px;
  margin-left: 10px;
}
</style>
