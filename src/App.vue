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
html,
body,
#app {
  height: 100%;
}

.particles {
  z-index: -100;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
</style>
