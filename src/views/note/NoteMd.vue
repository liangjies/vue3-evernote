<template>
  <md-editor v-model="text" />
</template>

<script>
export default {
  name: "NoteMd",
};
</script>
<script setup>
import { ref } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const text = ref("# Hello Editor");
</script>
<style lang="less" scoped>
#editor #md-editor-v3.md-editor {
  height: 85vh;
}
// .md-editor-footer {
//   height: 40px;
// }
</style>