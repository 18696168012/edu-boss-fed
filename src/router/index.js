import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import login from '@/views/login/index'
import layout from '@/views/layout/index'
import home from '@/views/home/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'home',
        component: home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
