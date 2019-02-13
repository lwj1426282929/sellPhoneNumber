// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant' // 引入vant
import VueLazyLoad from 'vue-lazyload' // 引入懒加载

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VueLazyLoad, {})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
