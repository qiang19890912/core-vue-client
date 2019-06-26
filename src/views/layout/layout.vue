<template>
  <div class="app-wrapper">
      <sidebar></sidebar>
  </div>
</template>

<script>
import {sidebar} from './sidebar/sidebar'
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

</style>
