<template>
  <div class="app-wrapper">
      <sidebar></sidebar>
  </div>
</template>

<script>
import sidebar from './sidebar/sidebar'
export default {
  name: "layout",
  components:{
    sidebar
  },
  data() {
    return {
      routes:[1,2,3]
    };
  }
};
</script>

<style scoped>
  .app-wrapper{
    width: 100%;
    height: 100%;

  }
  .app-wrapper:after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;

  }

</style>
