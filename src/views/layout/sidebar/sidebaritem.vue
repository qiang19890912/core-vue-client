<template>
  <div>
    <template v-for="item in routes">
      <router-link to='/' :key="item">
        <el-menu-item>
          <i class="el-icon-setting"></i>
          <span slot="title">{{item}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "sidebaritem",
  props: {
    routes: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
