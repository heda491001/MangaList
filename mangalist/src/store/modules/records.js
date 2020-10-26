import list from '../../api/list'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllRecords ({ commit }) {
    list.getRecord_demo(records => {
      commit('setRecords', records)
    })
  }
}

// mutations
const mutations = {
  setRecords (state, records) {
    state.all = records
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}