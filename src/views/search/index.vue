<template>
  <sider-bar></sider-bar>
  <p>hert</p>
</template>

<script>
import SiderBar from '@/components/SiderBar.vue'
export default {
    name: 'Search',
    components: {
      SiderBar,
    },
    created(){
        console.log("created")
    }
}
</script>

<style>

</style>