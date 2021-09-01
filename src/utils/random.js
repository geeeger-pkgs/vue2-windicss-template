/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:26:55
 * @Last Modified by: geeeger
 * @Last Modified time: 2021-08-03 09:27:24
 * @Description: 辅助生成微信auth验证使用的cors参数state,弃用
 */
export function fakeRandomString() {
  return Math.random().toString(16).replace('0.', '')
}
