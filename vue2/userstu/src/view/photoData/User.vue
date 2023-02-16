<template>
  <div>
    <div class="flex">
    <router-link to="/photo/DataView">tab1</router-link>
    <router-link to="/photo/Data">tab2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import DataView from './DataView'
export default {

  data() {
    return {
      menus: [],
      defaultProps: {
        label: "name",
        children: "children",
      },
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
    // console.log(this.$router.options.routes);
    //  权限管理和动态路由的思路：
    //      根据不同的用户登录上来，返回读音的路由权限菜单
    // 一般可以通过树形控件达到权限的精准控制，根据不同的角色，
    // 勾选不同的菜单权限，将菜单数据提交给后端进行保存
    // 后端保存之后，在用户进行登录的时候就会查询该用户或该角色所拥有的菜单数据，
    // 最终进行动态的渲染展示。
    // 动态添加路由使用 router.addRoutes(vue-router3.x版本方法，已废除)方法，后续使用router.addRoute进行动态跳转
  },
  methods: {
    getChecked() {
      let arr = this.$refs.tree.getCheckedNodes();
      console.log(arr);
    },
  },
};
</script>
<style scoped>
.flex{
    /* width: 50%; */
    display: flex;
    justify-content: space-around;
    align-items: center;

}
</style>