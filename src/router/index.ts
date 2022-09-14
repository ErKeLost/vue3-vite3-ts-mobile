import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/message',
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/order',
    component: () => import('@/views/order/index.vue')
  },
  {
    path: '/favour',
    component: () => import('@/views/favour/index.vue')
  },
  {
    path: '/city',
    component: () => import('@/views/city/index.vue'),
    meta: {
      hiddenTabBar: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
