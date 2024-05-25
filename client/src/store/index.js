import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    previewItems: [],
  }),
  mutations: {
    setLostPetPreviewItems(state, items) {
      state.previewItems = items
    },
    setFoundPetPreviewItems(state, items) {
      state.previewItems = items
    },
    setPreviewItems(state, items) {
      state.previewItems = items
    }
  },
  actions: {
    updateLostPetPreviewItems({ commit }, items) {
      commit('setLostPetPreviewItems', items)
    },
    updateFoundPetPreviewItems({ commit }, items) {
      commit('setFoundPetPreviewItems', items)
    },
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
