import Vue from 'vue'
import Vuex from 'vuex'

import quotes from './module/quote.module'
import pages from './module/page.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    user:{}
  },
  getters:{
    getUser: state => {
        return state.user
    }
  },
  mutations:{
    setUser: (state,data) => {
      state.user = data
    }
  },

  actions:{
    fetchUser: ({commit},payload) => {
      commit('setUser',payload)
    }
  },

  modules:{
    quotes,pages
  }
})
