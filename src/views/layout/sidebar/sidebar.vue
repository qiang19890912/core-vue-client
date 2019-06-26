<template>
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
</template>

<script>
import sidebarItem from './sidebaritem'
export default  {
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
</script>

<style scoped>

</style>
