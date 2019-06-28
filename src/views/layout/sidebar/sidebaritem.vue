<template>
  <div>
    <template v-for="item in routes">
      <template  v-if="!item.hidden&&item.children" >
          <router-link
        v-if="hasOneChild(item)"
        :to="item.children[0].path"
        :key="item.children[0].meta.name"
      >
        <el-menu-item>
          <i :class="item.children[0].meta.icon"></i>
          <span slot="title">{{item.children[0].meta.name}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-else :key="item.meta.name">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.name}}</span>
        </template>
        <template v-for="child in item.children">
          <sidebaritem
            :routes="child"
            v-if="child.children&&child.children.length>1"
            :key="child.children[0].meta.name"
          ></sidebaritem>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.meta.name">
            <el-menu-item>
              <i :class="child.meta.icon"></i>
              <span slot="title">{{child.meta.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
      </template>
      
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
  },
  methods: {
    
    hasOneChild(item) {
      console.log(this.routes);
      var showChildren = item.children.filter(child => {
        return !child.hidden;
      });

      return showChildren.length === 1;
    }
  }
};
</script>

<style scoped>
</style>
