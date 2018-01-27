import store from 'store'
import Vue from 'vue'
import Router from 'vue-router'
import Organizations from 'components/Organizations'
import Account from 'components/Account'
import Index from 'views/Index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/bank-account',
    name: 'Bank Account',
    component: Account
  },
  {
    path: '/organizations',
    name: 'All Organizations',
    component: Organizations
  }
]

const router = new Router({
  routes,
  // mode: 'history',
  base: '/app/'
})

router.beforeEach(function (to, from, next) {
  store.commit('loading', { show: true })
  next()
})

router.afterEach(function (to) {
  store.commit('loading', { show: false })
})

export default router
