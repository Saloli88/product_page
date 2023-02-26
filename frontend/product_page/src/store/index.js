import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: '',
    category: ''
  },
  getters: {
    getSearchQuery(state){
      return state.searchQuery
    },
    getCategoryValue(state){
      return state.category
    }
  },
  mutations: {
    setSearchQuery(state,query){
      state.searchQuery = query
    },
    setCategory(state,categoryValue){
      state.category = categoryValue
    }
  },
  actions: {
    updateSearchQuery({commit},query){
      commit('setSearchQuery',query)
    },
    updateCategory({commit},value){
      commit('setCategory',value)
    }
  },
  modules: {
  }
})
