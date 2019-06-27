<template>
    <div class="collapse-container">
       <input type="button" value="toggle" @click="changeCollapse">
    </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

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


</style>
