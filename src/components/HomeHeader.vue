<template>
  <sider-bar></sider-bar>
</template>

<script>
import SiderBar from '@/components/SiderBar.vue'
export default {
  name: 'HomeHeader',
  components: {
    SiderBar
  },
  created() {

  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.home {
  margin-left: 240px;
  // .info-table
  // margin 30px
}
</style>
