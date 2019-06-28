<template>
  <div>
    <el-menu mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :collapse="isCollapse"
      >
        <sidebar-item :routes="routes">

        </sidebar-item>
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
     
   }
  },
  computed:{
      isCollapse(){
        return this.$store.state.app.isCollapse;
      },
      routes(){
        return this.$router.options.routes
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
