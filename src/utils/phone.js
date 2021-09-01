
export const toHide = function(array) {
  const phone = array.substring(0, 3) + '****' + array.substring(7);
  return phone;
}
