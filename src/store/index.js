import { createStore } from 'vuex'

const store = createStore({
  state: {
    collapse: JSON.parse(localStorage.getItem('collapse'))
  },
  mutations: {
    setCollapse(state, val) {
      state.collapse = val;
      localStorage.setItem('collapse', state.collapse)
    }
  },
  actions: {},
  getters: {}
})

export default store
