import service from '@/utils/request'

// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/login [post]
export const GetAllNotes = (data) => {
    return service({
        url: '/notes/all',
        method: 'get',
        data
    })
}