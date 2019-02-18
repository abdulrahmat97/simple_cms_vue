import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

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

