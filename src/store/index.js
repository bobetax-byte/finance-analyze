import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    EchartState:false
  },
  mutations: {
    SET_EchartState(state, value) {
      state.EchartState = value
    }
  },
  actions: {
    setEchartState (context) {
      context.commit('SET_EchartState')
    }
  }
})

