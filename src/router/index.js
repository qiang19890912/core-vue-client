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
  },
  {
    path:'/main',
    name:'main',
    component:()=>import('@/views/layout/layout'),
    children:[
      {
        path:"",
        name:'demo',
        component:()=>import('@/components/Demo')
      }
    ]
    
  }
]

export default new Router({routes:routes})