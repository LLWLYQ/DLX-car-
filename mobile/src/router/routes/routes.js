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
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/news/news.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/metting',
    name: 'metting',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/metting/metting.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/guest',
    name: 'guest',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/guest/guest.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/show',
    name: 'show',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/show/show.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/review',
    name: 'review',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/review/review.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/chart/chart.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/contact/contact.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/company_login',
    name: 'company_login',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/company_login/company_login.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/company_zanzhu',
    name: 'company_zanzhu',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/company_zanzhu/company_zanzhu.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/guest_login',
    name: 'guest_login',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/guest_login/guest_login.vue') // webpackChunkName支持分模块打包
  },
  {
    path: '/details/:newsID',
    name: 'details',
    component: () => import(/* webpackChunkName: "apps" */ '../../views/Details/details.vue') // webpackChunkName支持分模块打包
  }
]
