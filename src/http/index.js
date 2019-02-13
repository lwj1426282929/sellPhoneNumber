import Vue from 'Vue'
import { Toast } from 'vant'
import axios from 'axios'

Vue.use(Toast)

// 创建请求实例
const http = axios.create({
  responseType: 'json'
})

// 添加请求拦截器
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 添加返回拦截器
http.interceptors.response.use(res => {
  return Promise.reject(res)
}, error => {
  if (error && error.response) {
    Toast.fail({
      message: `请求失败  ${error.response.status}`
    })
    return Promise.reject(error)
  }
})

export default http
