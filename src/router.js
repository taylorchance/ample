import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Exchange from './views/Exchange.vue'
import BuyersHomepage from './views/BuyersHomepage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    },
    {
      path: '/buy',
      name: 'buy',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Buy.vue')
    },
    {
      path: '/buyershomepage',
      name: 'buyershomepage',
      component: BuyersHomepage
    }
  ]
})
