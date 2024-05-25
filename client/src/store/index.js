import { createStore } from 'vuex'

export default createStore({
  state: {
    previewItems: []
  },
  mutations: {
    setPreviewItems(state, items) {
      state.previewItems = items
    }
  },
  actions: {
    updatePreviewItems({ commit }, items) {
      commit('setPreviewItems', items)
    }
  },
  getters: {
    getPreviewItems(state) {
      return state.previewItems
    }
  }
})
