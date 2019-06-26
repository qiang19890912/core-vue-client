<template>
  <div class="menu-wrapper">
    <el-menu mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
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
       routes:[1,2,3],
       isCollapse:false,
   }
  }
}

// export {abc};
</script>

<style scoped>
  .menu-wrapper{
    position: fixed;
    width: 200px;
    top: 0px;
    bottom: 0px;
    height: 100%;
  }
</style>
