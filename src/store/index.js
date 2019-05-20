import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      header: {},
      user: {
        name: 'Shilo Kherington'
      }
    },
    mutations: {
      setHeader (state, payload) {
        state.header = payload
      },
      setUser (state, payload) {
        state.user = payload
      }
    },
    actions: {
      updateHeader ({ commit }, payload) {
        let header = payload
        commit('setHeader', header)
      },
      updateUser ({ commit }, payload) {
        let user = payload
        commit('setUser', user)
      }
    },
    getters: {
      header: (state) => state.header,
      user: (state) => state.user
    }
  })

  return Store
}
