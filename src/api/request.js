import axios from 'axios'
import errCode from '../config/errCode'
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {

  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    //设置公共参数
    let token = ''
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    // 如果是post请求要求开发的请求头是application/json applicatin/x-ww-form-urlencoded
    if (config.method === 'post') {
      Object.keys(config.data).reduce((pre, c) => {
        config.data = pre += `&${c}=${config.data[c]}`
        return pre
      }, '').slice(1)
      config.headers['content-type'] = 'application/x-ww-form-urlencoded'
    }
    return config
  }
)

axiosInstance.interceptors.response.use((response) => {
  if (response.data.status === 0 || response.data.code === 0) {
    // console.log(response.data.data)
    return response.data.data
  } else {
    return Promise.reject(response.data.msg)
  }
},
  (err) => {
    // 根据不同错误原因，提示不同的错误信息
    let errMsg = ''
    if (err.response) {
      // 接受到响应，但是是失败的响应
      errMsg = errCode[err.response.status]
    } else {
      // 没有接受到响应
      if (err.message.indexOf('Network Error') !== -1) {
        errMsg = '网络连接错误，请重新连接网络'
      } else if (err.message.indexOf('timeout') !== -1) {
        errMsg = "网络连接超时，请连上wiff试试"
      }
    }
    return Promise.reject(errMsg || '发生未知错误，请联系管理员')
  }
)

export default axiosInstance