import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/user/home.vue'
import Content from '@/views/user/content.vue'
import Content_b from '@/views/user/content_b.vue'
import Content_c from '@/views/user/content_c.vue'
import Content_d from '@/views/user/content_d.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/content',
      name: 'content',
      component: Content,
    },
    {
      path: '/content_b',
      name: 'content_b',
      component: Content_b,
    },
    {
      path: '/content_c',
      name: 'content_c',
      component: Content_c,
    },
    {
      path: '/content_d',
      name: 'content_d',
      component: Content_d,
    },
	
    {
      path:'/admin/login',
      name:'adminlogin',
      component: () => import('@/views/admin/Login.vue'),
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      meta:{
        forAuth:true
      },
      
      component: () => import('@/views/admin/Admin.vue'),
      children:[
        {
          path:'quotes',
          name:'quotes',
          component: () => import('@/views/admin/Quotes.vue'),
        },
        {
          path:'page-action',
          name:'page-action',
          component: () => import('@/views/admin/PageA.vue')
        },
        {
          path:'page-brand',
          name:'page-brand',
          component: () => import('@/views/admin/PageB.vue')
        },
        {
          path:'page-consultation',
          name:'page-consultation',
          component: () => import('@/views/admin/PageC.vue')
        },
        {
          path:'page-daily',
          name:'page-daily',
          component: () => import('@/views/admin/PageD.vue')
        },
        {
          path:'settings',
          name:'settings',
          component: () => import('@/views/admin/Settings.vue')
        }
      ]
    }
  ]
})

router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/admin/'
        })
      }else next()
    }else if(to.matched.some(record => record.meta.forAuth)){
      if(! Vue.auth.isAuthenticated()){
        next({
          path: '/admin/login'
        })
      }else next()
    }
    else next()
  }
)

export default router

