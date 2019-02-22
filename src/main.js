import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@/routes/router'
import store from './store'
//import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Auth from './common/Auth.js'

Vue.config.productionTip = false

Vue.use(Auth)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
