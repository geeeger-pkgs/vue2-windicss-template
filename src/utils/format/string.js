/**
 * @description 从html中获取纯内容
 * @export
 * @param {string} str html string
 * @return {string}
 */
export function pureText(str) {
  if (!str) {
    return '暂无简介'
  }
  const div = document.createElement('div')
  div.innerHTML = str
  return div.innerText
}
