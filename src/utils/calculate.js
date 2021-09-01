/* eslint-disable no-empty */
// 乘法
export function FloatMul(arg1, arg2) {
  let r1, r2, m, n, q;
  if (parseInt(arg1) == arg1) {
    r1 = 0;
  } else {
    r1 = arg1.toString().split(".")[1].length;
  }
  if (parseInt(arg2) == arg2) {
    r2 = 0;
  } else {
    r2 = arg2.toString().split(".")[1].length;
  }
  m = Math.pow(10, r1);
  n = Math.pow(10, r2);
  q = m * n;
  let sum = (((arg1 * m) * (arg2 * n)) / q);
  return sum;
}
// 除法
export function FloatDiv(arg1, arg2) {
  let t1 = 0, t2 = 0, r1, r2;
  try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
  try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
// 减法
export function FloatSub(arg1, arg2) {
  let r1, r2, m, n;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
// 加法
export function FloatAdd(arg1, arg2) {
  let r1, r2, m;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}
