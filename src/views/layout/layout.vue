<template>
  <div class="app-wrapper">
      <div class="sidebar-wrapper" :class="{hideSideBar:isCollapse}">
          <sidebar class="sidebar-container"></sidebar>
      </div>
      <div class="main-container">
          <navbar></navbar>
          <router-view/>
      </div>
  </div>
</template>

<script>
import sidebar from './sidebar/sidebar'
import navbar from './navbar'
export default {
  name: "layout",
  components:{
    sidebar,
    navbar
  },
  data() {
    return {
      routes:[1,2,3],
      // isCollapse:this.$store.state.app.isCollapse,
    };
  },
  computed:{
      isCollapse(){
        console.log('caoniam')
        return this.$store.state.app.isCollapse;
      }
  },
  methods:{
    toggleSideBar(){
      this.$store.dispatch('changeCollapse')
    }
  }
};
</script>

<style lang='scss' scoped>
 .app-wrapper{
   width: 100%;
   height: 100%;
 }
 .sidebar-wrapper{
   position: absolute;
   top: 0px;
   bottom: 0px;
   width: 220px;
   overflow: hidden;
   transition: all .28s ease-out;
 }
 .sidebar-container{
   position: absolute;
   top: 0;
   bottom: 0;
   width: 220px;
   
   transition: all .28s ease-out;
 }
 .main-container{
   min-height: 100%;
   margin-left: 220px;
   overflow: hidden;
   transition: all .28s ease-out;
 }
 .hideSideBar{
   width: 64px;
 }
 .hideSideBar + .main-container{
   margin-left: 64px;
 }


</style>
