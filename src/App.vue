<template>
  <div id="app">
    <sider-bar></sider-bar>
  </div>
</template>

<script>
import SiderBar from './components/SiderBar.vue'

export default {
  name: 'App',
  components: {
    SiderBar
  }
}
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
html,
body,
#app {
  height: 100%;
}
</style>
