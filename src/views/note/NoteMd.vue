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
import { getCurrentInstance, onMounted, onUnmounted } from "vue";
import { UploadFile } from "@/api/upload";
// import TurndownService from "turndown"
import TurndownService from "turndown";
import { gfm, tables, strikethrough } from "turndown-plugin-gfm";
const emit = defineEmits(["inputData", "updateData"]);
const { proxy } = getCurrentInstance();
const props = defineProps({
  value: String,
});
var turndownService = new TurndownService({
  codeBlockStyle: "fenced",
});
turndownService.use(gfm);
turndownService.use([tables, strikethrough]);
turndownService.addRule("pre2Code", {
  filter: ["pre"],
  replacement(content) {
    const len = content.length;
    // 除了pre标签，里面是否还有code标签包裹，有的话去掉首尾的`（针对微信文章）
    const isCode = content[0] === "`" && content[len - 1] === "`";
    const result = isCode ? content.substr(1, len - 2) : content;
    //   let newresult = result.replace(/,/g,",\n")
    return "```js\n" + result + "\n```\n";
  },
});
const onPaste = (event) => {
  let data = event.clipboardData.getData("text/html");
  let htmlValue = turndownService.turndown(data);
  let value = props.value
  if (htmlValue) {
    setTimeout(() => {
      if (props.value.indexOf(value) == -1) {
        return;
      }
      emit("updateData", value + "\n" + htmlValue);
    }, 100);
  }
};

onMounted(() => {
  window.addEventListener("paste", onPaste);
});

onUnmounted(() => {
  window.removeEventListener("paste", onPaste);
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
      });
    })
  );
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