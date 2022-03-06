
export const user = {
  state: {
    isLogin: false,
    username: '未登录',
    token: ''
  },
  mutations: {
    changeIsLogin(state, payload) {
      state.isLogin = payload
    },
    setUsername(state, payload) {
      state.username = payload
    },
    setToken(state, token) {
      // 这里的 `state` 对象是模块的局部状态
      state.token = token
    },
  },
  getters: {
    isLogin(state) {
      return state.isLogin
    },
    username(state) {
      return state.username
    },
    token(state) {
      return state.token
    },
  },
}
