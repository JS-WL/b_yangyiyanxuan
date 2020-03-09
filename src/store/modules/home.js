import { HOME_LIST } from '../mutation-types'
import { reqHomeResource } from '../../api/index'
const state = {
  homeList: {}
}
const mutations = {
  [HOME_LIST] (state, list) {
    state.homeList = list
  }
}
const actions = {
  async getHomeList ({ commit }) {
    const result = await reqHomeResource()
    console.log(result)
    commit(HOME_LIST, result)
    return Promise.resolve(result)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}