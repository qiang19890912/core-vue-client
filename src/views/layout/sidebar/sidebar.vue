<template>
  <div>
    <el-menu mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      >
        <sidebar-item :routes="routes">

        </sidebar-item>
         <!-- <router-link to="/">
                    <el-menu-item index="1">
                        <i class="el-icon-setting"></i>
                        <span>主页</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/course">
                    <el-menu-item index="2">
                        <i class="el-icon-setting"></i>
                        <span>课程</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/course">
                    <el-menu-item index="3">
                        <i class="el-icon-s-home"></i>
                        <span>{{name}}</span>
                    </el-menu-item>
                </router-link> -->
    </el-menu>
  </div>
   
</template>

<script>
import sidebarItem from './sidebaritem'
export default {
  name:'sidebar',
  components:{
      sidebarItem
  },
  data(){
   return {
       routes:[1,2,3],
      //  isCollapse:this.$store.state.app.isCollapse,
   }
  },
  computed:{
      isCollapse(){
        return this.$store.state.app.isCollapse;
      }
  },
}

// export {abc};
</script>

<style scoped>
 .el-menu{
   min-height: 100%;
 }
</style>
