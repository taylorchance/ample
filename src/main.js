import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Blaze from 'blaze-vue'
import 'blaze-vue/dist/blaze-vue.css'
Vue.use(Blaze)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
