// import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'

import installStyles from './install-styles'
installStyles()

import installCommonLibs from './install-common-libs'
installCommonLibs(Vue)

import installCommonUtils from './install-common-utils'
installCommonUtils(Vue)

import vueExtend from './vue-extend'
vueExtend(Vue)

Vue.config.productionTip = false

// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

/* eslint-disable no-new */

Vue.use(VueResource)
new Vue({
  el: '#app',
  store,
  router,
  data: {
    showModal: false
  },
  render: createElement => createElement(App)
})
