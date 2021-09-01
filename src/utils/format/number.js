/**
 * @description 以万展示多余数据
 * @export
 * @param {number} num
 * @return {string}
 */
export function formatViewNum(num) {
  if (num < 10000) {
    return num || 0
  }
  return (num / 10000).toFixed(1) + '万'
}
