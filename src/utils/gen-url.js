/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:17:24
 * @Last Modified by: geeeger
 * @Last Modified time: 2021-09-01 16:47:39
 * @Description: 生产一些通用链接
 */
import { APPID } from "@/config";
import QueryString from "qs"

/**
 * @description 登录页面路径
 * @export
 * @return {string}
 */
export function genPureLoginPath() {
  return `${process.env.VUE_APP_PUBLIC}login.html`
}

/**
 * @description 登录页面url
 * @export
 * @return {string}
 */
export function genFullPureLoginPath() {
  return window.location.protocol + '//' + window.location.host + genPureLoginPath()
}

/**
 * @description 跳转登录path构造
 * @export
 * @param {object} params
 * @param {string} params.r redirect 地址
 * @return {string}
 */
export function genLoginPath(params) {
  return genPureLoginPath() + '?' + QueryString.stringify(params);
}

/**
 * @description 跳转登录path构造
 * @export
 * @param {object} params
 * @param {string} params.r redirect 地址
 * @param {string} state csrf参数
 * @return {string}
 */
export function redirectToWXAuth(params, state) {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${genFullLoginPath(params)}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
}

/**
 * @description 跳转登录构造
 * @export
 * @param {object} params
 * @param {string} params.r redirect 地址
 * @return {string}
 */
export function genFullLoginPath(params) {
  return window.location.protocol + '//' + window.location.host + genLoginPath(params)
}

/**
 * 获取绝对地址
 * @param {*} path
 * @returns
 */
export function genAbsoluteLink(path) {
  return `${process.env.VUE_APP_PUBLIC}${path}`
}

/**
 * 获取完整链接地址
 * @param {*} path
 * @returns
 */
export function genFullPageLink(path) {
  return window.location.protocol + '//' + window.location.host + genAbsoluteLink(path)
}
