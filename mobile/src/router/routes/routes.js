export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/home/home.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/company_login',
    name: 'company_login',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/company_login/company_login.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/guest_login',
    name: 'guest_login',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/guest_login/guest_login.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/guest',
    name: 'guest',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/guest/guest.vue') // webpackChunkName支持分模块打包
  }
]
