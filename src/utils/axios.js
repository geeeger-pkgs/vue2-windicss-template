/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:16:03
 * @Last Modified by: geeeger
 * @Last Modified time: 2021-09-01 16:50:32
 * @Description: 定义通用服务
 */
import { ApiWhiteList, TokenKey } from '@/config';
import axios from 'axios';
// import cookie from "js-cookie";
import store from "store2";
// import login from './login';

/**
 * 可以在此定义拦截器
 */
axios.interceptors.request.use((config) => {
  const token = store.get(TokenKey)

  // 如无凭证，直接跳转授权登录
  if (!token && !ApiWhiteList.includes(config.url.split('?')[0])) {
    // login('请先授权登录')
    return Promise.reject(new Error('Login required!'))
  }

  if (!config.headers) {
    config.headers = {}
  }
  // 如有凭证，携带
  config.headers['Authorization'] = `JWT ${token}`

  return config
})

axios.interceptors.response.use((response) => {
  // 如果返回了业务码的话
  // 需增加业务错误处理拦截
  return response.data;
}, (error) => {
  if (error.response) {
    // 判断403或401
    if (
      error.response.status === 401 ||
      error.response.status === 403
    ) {
      // cookie.remove(TokenKey)
      store.remove(TokenKey)
      // login('登录失效，请重新登录')
    }
  }

  return Promise.reject(error)
})

// 定义baseURL
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

export default axios;
