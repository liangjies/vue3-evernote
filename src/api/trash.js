import service from '@/utils/request'

// @Summary 获取所有回收站笔记
// @Produce  application/json
// @Param data body 
// @Router /trash/all [get]
export const GetTrashs = (data) => {
    return service({
        url: '/trash/all',
        method: 'get',
        data
    })
}

