/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:41:58
 * @Last Modified by:   geeeger
 * @Last Modified time: 2021-08-03 09:41:58
 * @Description: 微信相关接口
 */
import axios from '@/utils/axios.js'
import QueryString from "qs"

/**
 * 获取微信jssdk配置
 * @param {*} url
 * @returns
 */
export function config(url) {
  return axios.post(`/sign/wechat/`, QueryString.stringify({
    url
  }))
}
