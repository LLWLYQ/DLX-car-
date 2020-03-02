// 创建服务端vue模板
import Vue from 'vue'
import VueRouter from 'vue-router' // 路由
import Vuex from 'vuex' // 状态管理器
import Meta from 'vue-meta' // vue修改TDK的
import createStore from './store/index' // 状态管理器初始化
import createRouter from './router/index' // 路由初始化
import VueLazyload from 'vue-lazyload'
import App from './views/app.vue' // 这个你们看不懂我也没办法了
import './common/stylus/base.styl'


// 注册插件和组件
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://media.albers.top/73a6bb8703534606d370307d71f3d973.jpg?v=145237',
  loading: '',
  attempt: 1
})


// 每次都要返回一个新的实例 避免冲突
export default () => {
  // 实例化所需要参数
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  // 返回3个参数
  return {app, router, store}
}
