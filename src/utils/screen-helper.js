/**
 * @description 获取元素高度
 * @export
 * @param {HTMLElement} dom
 * @return {number}
 */
 export function getDomHeight(dom) {
  return dom.getBoundingClientRect().height;
}

/**
 * @description 获取可视区高度
 * @export
 * @return {number}
 */
export function getClientHeight() {
  return document.documentElement.clientHeight;
}

/**
 * @description 获取offset比例
 * @export
 * @param {number} [topDomOffsetTop=0]
 * @param {number} [extraHeight=0]
 * @return {number}
 */
export function getScrollamaOffset(
  topDomOffsetTop = 0,
  extraHeight = 0
) {
  return (topDomOffsetTop + extraHeight) / getClientHeight();
}

const u = navigator.userAgent;

/**
 * 获取设备环境
 */
export const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export const isAndroid = !!u.match(/android/i);
const iosAspect = window.screen.width / window.screen.height;
export const isIOSNotchScreen = isIOS && iosAspect.toFixed(3) === '0.462';

/**
 * @description 获取元素距顶部距离
 * @export
 * @param {HTMLElement} dom
 * @return {number}
 */
export function offsetTop(dom) {
  return dom.offsetTop;
}

/**
 * @description 获取app屏幕环境信息
 * @export
 * @param {number} [designSize=375]
 * @return {*}
 */
export function getScreenInfo(
  designSize = 375
) {
  const radio = window.screen.width / designSize;
  const iosSafeInsertTop = 64;
  const isIOSFullScreenMode =
    document.documentElement.clientHeight >
    window.screen.height - iosSafeInsertTop;
  const iosNotchSceenSafeInsertTop = 88;
  const iosNotchSceenFullScreenMode =
    document.documentElement.clientHeight >
    window.screen.height - iosNotchSceenSafeInsertTop;
  // 使用魔法数字，测试
  const androidSafeInsertTop = Math.floor(radio * 64);
  const isAndroidFullScreenMode =
    document.documentElement.clientHeight >
    window.screen.height - androidSafeInsertTop;
  return {
    iosSafeInsertTop,
    isIOSFullScreenMode,
    iosNotchSceenSafeInsertTop,
    iosNotchSceenFullScreenMode,
    androidSafeInsertTop,
    isAndroidFullScreenMode,
    radio,
  };
}

/**
 * @description 获取滚动高度
 * @export
 * @return {number}
 */
export function scrollTop() {
  return document.body.scrollTop || document.documentElement.scrollTop;
}
