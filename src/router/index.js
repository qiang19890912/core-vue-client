import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'
import notfound from '@/views/notfound'

Vue.use(Router)

export const routes = [
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login/index'),
    hidden:true
    
  },
  {
    path:'/',
    component:layout,
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home/home'),
        meta: { name:'首页' , icon:'el-icon-headset' },
      }
    ]
  },
  {
    path:'/auth',
    name:'auth',
    redirect:'/auth/user',
    component:layout,
    meta: { name:'授权' , icon:'el-icon-s-custom' },
    children:[
     {
       path:'user',
       name:'user',
       component:()=>import('@/views/auth/user'),
       meta:{name:'用户管理',icon:'el-icon-brush'}
     },
     {
      path:'role',
      name:'role',
      component:()=>import('@/views/auth/role'),
      meta:{name:'角色管理',icon:'el-icon-brush'}
    }
    ],
    
  },
  {
    path:'*',
    name:'notfound',
    component:notfound
  }
]

export default new Router({routes:routes})