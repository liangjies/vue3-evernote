import service from '@/utils/request'

// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/login [post]
export const login = (data) => {
  return service({
    url: '/base/login',
    method: 'post',
    data: data
  })
}

// @Summary 用户退出登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/login [post]
export const logout = (data) => {
  return service({
    url: '/user/logout',
    method: 'post',
    data: data
  })
}

// @Summary 用户注册
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/resige [post]
export const register = (data) => {
  return service({
    url: '/user/register',
    method: 'post',
    data: data
  })
}

// @Summary 获取验证码
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/captcha [post]
export const captcha = (data) => {
  return service({
    url: '/base/captcha',
    method: 'post',
    data: data
  })
}