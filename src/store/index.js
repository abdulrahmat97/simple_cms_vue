import Vue from 'vue'
import Vuex from 'vuex'

import quotes from './module/quote.module'
import pages from './module/page.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    quotes,pages
  }
})
