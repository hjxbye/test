import Vue from "vue";
import Router from "vue-router";
// import Home from '../components/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      redirect: "/login",
      hidden: true,
      component: () => import("@/view/Login"),
    },
    {
      path: "/detail",
      name: "detail",
      hidden: true,
      component: () => import("@/view/dataAnalysis/ScoreDetail"),
    },
    {
      path: "/documentDetail",
      name: "documentDetail",
      hidden: true,
      component: () => import("@/view/dataAnalysis/documentDetail"),
    },
    {
      path: "/login",
      name: "Login",
      hidden: true,
      component: () => import("@/view/Login"),
    },
    {
      path: "*",
      name: "NotFound",
      hidden: true,
      component: () => import("@/view/NotFound"),
    },
    {
      path: "/home",
      name: "学生管理",
      iconClass: "fa fa-users",
      redirect: "/home/student",
      component: () => import("@/view/Home"), //路由懒加载
      children: [
        {
          path: "/home/student",
          name: "学生列表",
          iconClass: "fa fa-list",
          component: () => import("@/view/students/StudentList"), //路由懒加载
        },
        {
          path: "/home/info",
          name: "信息列表",
          iconClass: "fa fa-list-alt",
          component: () => import("@/view/students/InfoList"), //路由懒加载
        },
        {
          path: "/home/infos",
          name: "信息管理",
          iconClass: "fa fa-list-alt",
          component: () => import("@/view/students/InfoLists"), //路由懒加载
        },
        {
          path: "/home/work",
          name: "作业列表",
          iconClass: "fa fa-list-ul",
          component: () => import("@/view/students/WorkList"), //路由懒加载
        },
        {
          path: "/home/works",
          name: "作业管理",
          iconClass: "fa fa-th-list",
          component: () => import("@/view/students/WorkMent"), //路由懒加载
        },
      ],
    },
    {
      path: "/home",
      name: "文档管理",
      iconClass: "fa fa-bar-chart",
      component: () => import("@/view/Home"), //路由懒加载
      children: [
        {
          path: "/home/dataView",
          name: "数据概览",
          iconClass: "fa fa-line-chart",
          component: () => import("@/view/dataAnalysis/DataView"), //路由懒加载
        },
        {
          path: "/home/map",
          name: "地图概览",
          iconClass: "fa fa-line-chart",
          component: () => import("@/view/dataAnalysis/MapView"), //路由懒加载
        },
        {
          path: "/home/travel",
          name: "文档列表",
          iconClass: "fa fa-line-chart",
          component: () => import("@/view/dataAnalysis/TravelMap"), //路由懒加载
        },
        {
          path: "/home/score",
          name: "分数地图",
          iconClass: "fa fa-line-chart",
          component: () => import("@/view/dataAnalysis/ScoreMap"), //路由懒加载
        },
      ],
    },
    {
      path: "/suers",
      name: "用户中心",
      iconClass: "fa fa-user",
      component: () => import("@/view/Home"), //路由懒加载
      children: [
        {
          path: "/suers/user",
          name: "权限管理",
          iconClass: "fa fa-user",
          component: () => import("@/view/users/User"), //路由懒加载
        },
      ],
    },
    {
      path: "/photo",
      name: "图文管理",
      iconClass: "fa fa-users",
      component: () => import("@/view/Home"), //路由懒加载
      children: [
        {
          path: "/photo/photo",
          name: "图文管理",
          iconClass: "fa fa-user",
          component: () => import("@/view/photoData/User"), //路由懒加载
          children:[
            {
              path: "/photo/DataView",
              name: "图文权限管理",
              iconClass: "fa fa-user",
              component: () => import("@/view/photoData/sonComponent/DataView"), //路由懒加载
            },
            {
              path: "/photo/Data",
              name: "图文权限管理2",
              iconClass: "fa fa-user",
              component: () => import("@/view/photoData/sonComponent/Data"), //路由懒加载
            },
          ]
        },
      ]
    }
  ],
  mode: "history",
});

// {
//     path:'/home',
//     // component: () => import('@/components/Home')  //路由懒加载
//     component : resolve => require(['@/components/Home'], resolve)

// }
