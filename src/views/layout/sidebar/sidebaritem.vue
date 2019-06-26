<template>
<div>
    <template v-for="item in routes">
        <el-menu-item :key="item">
            <span>{{item}}</span>
        </el-menu-item>
    </template>
</div>

</template>

<script>
export default {
  name:'sidebaritem',
  props:{
      routes :{
      type: Array
    },
  },
  data(){
   return {

   }
  }
}
</script>

<style scoped>

</style>
