<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import path from "path";
// function resolve(dir) {
//   return path.resolve(__dirname, dir);
// }
export default {
  data: function() {
    return {};
  },
  methods: {},
  created() {
    // console.log(__dirname);
    // console.log(path.join("/foo/bar", "..", "baz"));
    // console.log(resolve("./src/icons/svg"));
  }
};
</script>


<style>
.color-main {
  color: #409eff;
}
*{
  margin: 0px;
}
</style>
