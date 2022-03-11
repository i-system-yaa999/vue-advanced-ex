import { createStore } from 'vuex'

export default createStore({
  state: {
    sum: 0,
    lastTeam: '',
  },
  getters: {
    // inc:()=>{
    //   return state.sum+1;
    // }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})


// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     sum: 0,
//     lastTeam: '',
//   },
//   mutations: {
//   }
// })