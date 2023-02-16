// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // keepAlive缓存组件
    keepAliveInclude:[],
  },
  getters:{
    keepAliveInclude: state => state.keepAliveInclude,
  },
  mutations: {
    SET_KEEPALIVEINCLUDE:(state, keepAliveInclude) => {
      state.keepAliveInclude = keepAliveInclude;
    }
  },
  actions: {
    setKeepAliveInclude({ commit }, keepAliveInclude){
      commit("SET_KEEPALIVEINCLUDE", keepAliveInclude)
    },
  },
})
