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


// @Summary 用户根据id获取笔记详情
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /notes/:id [get]
export const GetNoteById = (data) => {
    return service({
        url: '/notes/'+data.id,
        method: 'get',
    })
}

// @Summary 用户修改笔记
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /notes/update [post]
export const UpdateNote = (data) => {
    return service({
        url: '/notes/update',
        method: 'post',
        data
    })
}

// @Summary 用户新建笔记
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /notes/add [post]
export const CreateNote = (data) => {
    return service({
        url: '/notes/add',
        method: 'post',
        data
    })
}