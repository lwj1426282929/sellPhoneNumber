import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: '首页', icon: '' },
    component: () => import('@/views/home')
  },
  {
    path: '/selection',
    name: 'selection',
    meta: { title: '选号', icon: '' },
    component: () => import('@/views/selection')
  },
  {
    path: '/customerService',
    name: 'customerService',
    meta: { title: '客服', icon: '' },
    component: () => import('@/views/customerService')
  },
  {
    path: '/information',
    name: 'information',
    meta: { title: '资讯', icon: '' },
    component: () => import('@/views/information')
  },
  {
    path: '/navigation',
    name: 'navigation',
    meta: { title: '导航', icon: '' },
    component: () => import('@/views/navigation')
  }
]

export default new Router({
  mode: 'history',
  routes
})
