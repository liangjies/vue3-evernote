<template>
   <sider-bar></sider-bar>
    <div class="note-page">
    </div>
</template>

<script>
import SiderBar from "@/components/SiderBar.vue";
export default {
  name: "Note",
  components: { SiderBar },
}
</script>

<style lang="less" scoped>
.note-page {
  margin-left: 73px;
}
</style>