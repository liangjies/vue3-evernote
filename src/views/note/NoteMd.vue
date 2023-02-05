<template>
  <md-editor v-model="value" @onChange="onChange" />
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
import { onMounted } from 'vue';
const emit = defineEmits(["inputData"]);
const props = defineProps({
  value: String,
});
// onMounted(() => { emit("inputData", props.value); });
// 改变内容
const onChange = (v) => {
  emit("inputData", v);
};
// text = value
// const text = ref("# Hello Editor");
</script>
<style lang="less" scoped>
#editor #md-editor-v3.md-editor {
  height: 85vh;
}
// .md-editor-footer {
//   height: 40px;
// }
</style>