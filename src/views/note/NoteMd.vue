<template>
  <md-editor
    v-model="value"
    @onChange="onChange"
    @onSave="onSave"
    @onUploadImg="onUploadImg"
    :toolbarsExclude="toolbarsExclude"
  />
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
import { getCurrentInstance } from "vue";
import { UploadFile } from "@/api/upload";
const emit = defineEmits(["inputData"]);
const { proxy } = getCurrentInstance();
const props = defineProps({
  value: String,
});
// 改变内容
const onChange = (v) => {
  emit("inputData", v);
};
// 保存笔记
const onSave = (v, h) => {
  proxy.$parent.doUpdateNote();
};
// 上传图片
const onUploadImg = async (files, callback) => {
    const res = await Promise.all(
    files.map(async (file) => {
        return new Promise(async (rev, rej) => {
        let params = new FormData();
        params.append("file", file);
        const res = await UploadFile(params)
        .then((res) => rev(res))
        .catch((error) => rej(error));
        })

    }));
    callback(res.map((item) => item.data.file.url));
};
const toolbarsExclude = ["github"];
</script>
<style lang="less" scoped>
#editor #md-editor-v3.md-editor {
  height: 85vh;
}
// .md-editor-footer {
//   height: 40px;
// }
</style>