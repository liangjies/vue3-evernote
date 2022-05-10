<template>
  <el-tabs tab-position="left" style="height: 200px" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon style="vertical-align: -10%">
            <user-filled />
          </el-icon>
          账号设置
        </span>
      </template>
      User
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon style="vertical-align: -10%">
            <setting />
          </el-icon>
          偏好设置
        </span>
      </template>
      Config
    </el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { UserFilled, Setting } from "@element-plus/icons-vue";

</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
