<template>
  <div>
    <el-card class="login-form-layout">
      <el-form :model="form" label-width="80px" label-position="left">
        <el-form-item label="用户名:">
          <el-input v-model="form.username" type="text" placeholder="请输入用户名">
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
              <!-- <svg class="svg-icon" aria-hidden="true">
                <use xlink:href="icon-user"></use>
              </svg> -->
            </span>
          </el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="form.password" type="password" placeholder="请输入密码">
            <span slot="prefix">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      form: {
        username: undefined,
        password: undefined
      }
    };
  }
};
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}
</style>
