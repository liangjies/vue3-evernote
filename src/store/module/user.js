import { login, logout } from '@/api/user'
import router from '@/router/index'

export const user = {
  namespaced: true,
  state: {
    userInfo: {
      uuid: '',
      nickName: '',
      headerImg: '',
    },
    token: ''
  },
  mutations: {
    setUserInfo(state, userInfo) {
      // 这里的 `state` 对象是模块的局部状态
      state.userInfo = userInfo
    },
    setToken(state, token) {
      // 这里的 `state` 对象是模块的局部状态
      state.token = token
    },
    LoginOut(state) {
      state.userInfo = {}
      state.token = ''
      router.push({ name: 'Login', replace: true })
      // window.location.reload()
    },
  },
  actions: {
    async LoginIn({ commit, dispatch, rootGetters, getters }, loginInfo) {
      const res = await login(loginInfo)
      if (res.code === 200) {
        commit('setUserInfo', res.data.user)
        commit('setToken', res.data.token)
        console.log(res.data.token)
        router.push({ path: "/" })
        return true
      }
    },
    async LoginOut({ commit }) {
      const res = await logout()
      if (res.code === 200) {
        commit('LoginOut')
      }
    },
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    token(state) {
      return state.token
    },
  },
}
