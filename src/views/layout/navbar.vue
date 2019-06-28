<template>
    <div class="nav">
       <i :class="iconType" @click="changeCollapse"></i>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
   
   }
  },
  computed:{
    iconType(){
        return this.$store.state.app.isCollapse?'el-icon-s-unfold':'el-icon-s-fold'
    }
  },
  methods:{
      changeCollapse(){
          this.$store.dispatch('changeCollapse')
      }
  }
}
</script>

<style scoped>
.nav{
    background-color: aliceblue;
    height: 40px;
}
.nav i{
    margin-top: 5px;
    font-size:30px; 
}

</style>