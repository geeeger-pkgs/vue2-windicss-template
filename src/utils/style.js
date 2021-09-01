export const vw = (is2x = false) => px => {
  if (typeof px === 'number' && !Number.isNaN(px)) {
    return `${px / (is2x ? 750 : 375) * 100}vw`
  }
  return '0'
}

export const pxNormalize = (is2x = false) => (px) => {
  if (typeof px === 'number' && !Number.isNaN(px)) {
    const viewportWidth = document.body.getBoundingClientRect().width
    return px / (is2x ? 750 : 375) * viewportWidth
  }
  return 0
}
