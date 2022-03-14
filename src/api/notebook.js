import service from '@/utils/request'

// @Summary 获取笔记本
// @Produce  application/json
// @Param data
// @Router /notebooks [get]
export const GetNotebooks = (data) => {
    return service({
        url: '/notebooks',
        method: 'get',
        data
    })
}