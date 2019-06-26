<template>
  <div>
    <el-card class="login-form-layout">
      <el-form
        :model="loginForm"
        label-width="80px"
        ref="abcForm"
        :rules="loginRules"
        label-position="left"
      >
        <h2 class="login-form-title">通用权限管理系统</h2>
        <el-form-item label="用户名:" prop="username">
          <el-input v-model="loginForm.username" type="text" placeholder="请输入用户名">
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="loginForm.password" :type="pwdType" placeholder="请输入密码">
            <span slot="prefix" @click="handleEye">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 100%;margin-left:-40px;"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
import { login } from '@/api/login' 
export default {
  name: "",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error("密码不能小于3位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      pwdType: "password",
      loading: false,
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      }
    };
  },
  methods: {
    handleEye() {
      if (this.pwdType === "password") {
        this.pwdType = "text";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.abcForm.validate(valid => {
        if (valid) {
          this.loading = true;
        //   this.$http
        //     .get("/api/login")
        //     .then(res => {
        //       this.loading = false;
        //       console.log(res.data);
        //     }).catch(() => {
        //       this.loading = false
        //     })
        login(this.loginForm.username,this.loginForm.password).then(res=>{
            this.loading = false;
            console.log(res.data)
        }).catch(()=>{
            this.loading = false
        })
            
        } else {
          console.log("参数验证不合法！");
          return false;
        }
      });
    }
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
.login-form-title{
    text-align: center
}
</style>
