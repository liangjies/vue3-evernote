import axios from 'axios' // 引入axios
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { store } from '@/store'

const service = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 99999
})
// http request 拦截器
service.interceptors.request.use(
    config => {
        const token = store.getters['user/token']
        config.data = JSON.stringify(config.data)
        config.headers = {
            'Content-Type': 'application/json',
            'x-token': token,
        }
        return config
    },
    error => {
        ElMessage({
            showClose: true,
            message: error,
            type: 'error'
        })
        return error
    }
)

// http response 拦截器
service.interceptors.response.use(
    response => {
        if (response.headers['new-token']) {
            store.commit('user/setToken', response.headers['new-token'])
        }
        if (response.data.code === 200 || response.headers.success === 'true') {
            return response.data
        } else {
            ElMessage({
                showClose: true,
                message: response.data.msg || decodeURI(response.headers.msg),
                type: response.headers.msgtype || 'error'
            })
            if (response.data.data && response.data.data.reload) {
                store.commit('user/LoginOut')
            }
            return response.data.msg ? response.data : response
        }
    },
    error => {
        ElMessageBox.alert(`
    <p>检测到接口错误${error}</p>
    <p>错误码500：此类错误内容常见于后台panic，如果影响您正常使用可强制登出清理缓存</p>
    <p>错误码404：此类错误多为接口未注册（或未重启）或者请求路径（方法）与api路径（方法）不符</p>
    `, '接口报错', {
            dangerouslyUseHTMLString: true,
            distinguishCancelAndClose: true,
            confirmButtonText: '确定',
        })
        return error
    }
)

export default service
