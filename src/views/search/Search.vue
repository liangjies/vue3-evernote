<template>
  <sider-bar></sider-bar>
  <div class="search-box">
    <p>hert</p>
  </div>

</template>

<script>
import SiderBar from '@/components/SiderBar.vue'
export default {
  name: 'Search',
  components: { SiderBar },
  created() {
    console.log("created")
  }
}
</script>

<style lang="less" scoped>
.search-box {
  margin-left: 73px;
}
</style>>
