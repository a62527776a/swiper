// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from './components/common'
import api from './services'
import store from './store'

import './plugins/flexible.js'

import './styles/index.less'

Vue.config.productionTip = false

Object.keys(common).forEach(key => {
  Vue.component(common[key].name, common[key])
})

Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
