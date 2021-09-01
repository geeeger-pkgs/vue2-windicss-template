/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:28:00
 * @Last Modified by: geeeger
 * @Last Modified time: 2021-08-11 12:39:18
 * @Description: 微信配置相关
 */
import { config } from '@/services/wx'
import deferredCreator from '@geeeger/deferred'

const ref = {}

/**
 * @description 调用微信初始化，只初始化一次，其他次使用调用缓存的promise状态
 * @export
 * @return {Promise<any>}
 */
export default function initWxConfig() {
  if (ref.d) {
    return ref.d.promise
  }

  const d = deferredCreator()
  ref.d = d

  config(location.href.split('#')[0])
    .then(({ appId, timestamp, noncestr, signature }) => {

      /**
       * see [文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#4)
       */
      wx.config({
        debug: false,
        appId,
        timestamp,
        nonceStr: noncestr,
        signature,
        jsApiList: [
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'hideMenuItems',
          'chooseWXPay'
        ]
      })

      // 获取配置，然后
      wx.error(() => {
        d.reject()
      })

      wx.ready(() => {
        d.resolve()
      })
    })

    return d.promise
}
