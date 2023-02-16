import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import './plugins/element'
import "font-awesome/css/font-awesome.min.css";
// import axios from 'axios'
import router from "./route";
import service from "./service";
import echarts from "echarts";
import store from "./store";
import './mock/mockServer'

Vue.use(ElementUI);
// Vue.prototype.axios = axios //  挂载到原型，可以在全局使用
Vue.prototype.service = service;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

// 路由导航守卫
router.beforeEach((to, from, next) => {
  next(); 
  //const name = to.path;
  if(!localStorage.getItem('username')&&to.path !== '/login'){
    next('/login')
  }else if(localStorage.getItem('username')&&to.path === '/login'){
   // console.log(111);
    next('/home')
}

});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//全局引用
