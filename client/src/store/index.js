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
    },
    sortPreviewItems(state, isAscending) {
      const items = state.previewItems.sort((a, b) => {
        const dateA = new Date(a.notices[0].createdAt)
        const dateB = new Date(b.notices[0].createdAt)
        if (isAscending) {
          return dateB - dateA
        } else {
          return dateA - dateB
        }
      })
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
    },
    sortPreviewItems({ commit }, isAscending) {
      commit('sortPreviewItems', isAscending)
    }
  },
  getters: {
    getPreviewItems(state) {
      return state.previewItems
    }
  }
})
