<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
const imageUrl = ref(
  "https://as.wiz.cn/as/user/avatar/83570f00-a33f-11eb-afcd-b929454d220b?version=0"
);
const handleAvatarSuccess = (res, file) => {
  imageUrl.value = URL.createObjectURL(file.raw);
};
const beforeAvatarUpload = (file) => {
  if (file.type === "image/jpeg" || file.type === "image/png") {
    if (file.size / 1024 / 1024 > 2) {
      ElMessage.error("Avatar picture size can not exceed 2MB!");
      return false;
    }
  } else {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  }
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 50px;
  height: 50px;
  border-radius: 45px;
   overflow: hidden;
}
</style>

<style>

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>