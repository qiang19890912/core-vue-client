import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path:'/',
    redirect: '/login',
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login/index')
  }
]

export default new Router({routes:routes})