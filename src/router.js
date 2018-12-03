import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
      { path: '/', redirect: '/main' },
      {
          path:'/main',
          meta:{
              title:'首页',
          },
          component: resolve => require(['./components/Main.vue'],resolve),
      },
      {
          path:'/edit',
          meta:{
              title:'编辑图表',
          },
          component: resolve => require(['./components/EditView.vue'],resolve),
      },
      {
          path:'/preview',
          meta:{
              title:'预览图表',
          },
          component: resolve => require(['./components/Preview.vue'],resolve),
      },
  ]
})
