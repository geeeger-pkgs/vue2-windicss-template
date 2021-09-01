/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:26:30
 * @Last Modified by:   geeeger
 * @Last Modified time: 2021-08-03 09:26:30
 * @Description: canvas绘图辅助工具
 */
class Painter {
  constructor (ctx, width, height, designWidth, designHeight) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.designWidth = designWidth
    this.designHeight = designHeight
    this.ratio = width / designWidth
  }

  getRealPosistion (pos, align) {
    const { ratio, designHeight, height } = this
    const { x, y, w, h, x2, y2, r } = pos
    let _x, _y, _w, _h, _y2, _x2, _r
    _x = x * ratio
    _w = w * ratio
    _h = h * ratio
    _x2 = x2 * ratio
    _y2 = y2 * ratio
    _r = r * ratio
    if (align && align.height === 'ratioPadding') {  // 高度按比例对齐，上下留白
      const leftDesignH = designHeight - h
      const leftHeight = height - _h
      _y = y / leftDesignH * leftHeight
    } else {
      _y = y * ratio
    }
    return {
      _x, _y, _w, _h, _x2, _y2, _r
    }
  }

  measureTextDesign (str) {
    str = String(str)
    const w = this.ctx.measureText(str).width
    return w / this.ratio
  }

  background (color) {
    this.ctx.rect(0, 0, this.width, this.height)
    this.fill(color)
  }

  fill (color) {
    if (color) {
      this.ctx.fillStyle = color
      this.ctx.fill()
    }
  }

  stroke (color, lineWidth) {
    if (color) {
      this.ctx.lineWidth = lineWidth * this.ratio || 1
      this.ctx.strokeStyle = color
      this.ctx.stroke()
    }
  }

  rect (pos, style) {
    const { fillColor, strokeColor, lineWidth, align } = style
    const { _x, _y, _w, _h } = this.getRealPosistion(pos, align)
    this.ctx.rect(_x, _y, _w, _h)
    this.fill(fillColor)
    this.stroke(strokeColor, lineWidth)
  }

  circle (pos, style) {
    const { fillColor, strokeColor, lineWidth } = style
    const { _x, _y, _r } = this.getRealPosistion(pos)
    this.ctx.beginPath()
    this.ctx.arc(_x, _y, _r, 0, 2 * Math.PI)
    this.ctx.closePath()
    this.fill(fillColor)
    this.stroke(strokeColor, lineWidth)
  }

  roundRect (pos, style) {
    const { ctx, ratio } = this
    const { shadow, fillColor, strokeColor, lineWidth } = style
    const { _x, _y, _w, _h, _r } = this.getRealPosistion(pos, style.align)
    ctx.beginPath()
    ctx.moveTo(_x + _r, _y)
    ctx.lineTo(_x + _w - _r, _y)
    ctx.arc(_x + _w - _r, _y + _r, _r, 1.5 * Math.PI, 2 * Math.PI)
    ctx.lineTo(_x + _w, _y + _h - _r)
    ctx.arc(_x + _w - _r, _y + _h - _r, _r, 0, 0.5 * Math.PI)
    ctx.lineTo(_x + _r, _y + _h)
    ctx.arc(_x + _r, _y + _h - _r, _r, 0.5 * Math.PI, Math.PI)
    ctx.lineTo(_x, _y + _r)
    ctx.arc(_x + _r, _y + _r, _r, Math.PI, 1.5 * Math.PI)
    ctx.closePath()

    if (shadow) {
      const { offsetX, offsetY, color, blur } = shadow
      const _offsetX = ratio * offsetX
      const _offsetY = ratio * offsetY
      const _blur = ratio * blur
      ctx.shadowOffsetX = _offsetX
      ctx.shadowOffsetY = _offsetY
      ctx.shadowBlur = _blur
      ctx.shadowColor = color
    }
    this.fill(fillColor)
    this.stroke(strokeColor, lineWidth)
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
    ctx.shadowColor = '#ffffff'
  }

  roundTicket (pos, style) {
    const { ctx, ratio } = this
    const { shadow, fillColor, strokeColor, lineWidth } = style
    const { _x, _y, _w, _h, _r } = this.getRealPosistion(pos, style.align)
    const { midY } = pos
    const _midY = midY * ratio

    ctx.beginPath()
    ctx.moveTo(_x + _r, _y)
    ctx.lineTo(_x + _w - _r, _y)
    ctx.arc(_x + _w - _r, _y + _r, _r, 1.5 * Math.PI, 2 * Math.PI)
    ctx.lineTo(_x + _w, _y + _midY - _r)
    // 圆
    ctx.arc(_x + _w, _y + _midY, _r, 1.5 * Math.PI, 0.5 * Math.PI, true)
    ctx.lineTo(_x + _w, _y + _h - _r)
    ctx.arc(_x + _w - _r, _y + _h - _r, _r, 0, 0.5 * Math.PI)
    ctx.lineTo(_x + _r, _y + _h)
    ctx.arc(_x + _r, _y + _h - _r, _r, 0.5 * Math.PI, Math.PI)
    ctx.lineTo(_x, _y + _midY + _r)
    // 圆
    ctx.arc(_x, _y + _midY, _r, 0.5 * Math.PI, -0.5 * Math.PI, true)
    ctx.lineTo(_x, _y + _r)
    ctx.arc(_x + _r, _y + _r, _r, Math.PI, 1.5 * Math.PI)
    ctx.closePath()

    if (shadow) {
      const { offsetX, offsetY, color, blur } = shadow
      const _offsetX = ratio * offsetX
      const _offsetY = ratio * offsetY
      const _blur = ratio * blur
      ctx.shadowOffsetX = _offsetX
      ctx.shadowOffsetY = _offsetY
      ctx.shadowBlur = _blur
      ctx.shadowColor = color
      // ctx.setShadow(_offsetX, _offsetY, _blur, color)
    }
    this.fill(fillColor)
    this.stroke(strokeColor, lineWidth)
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0
    ctx.shadowColor = '#ffffff'
    // ctx.setShadow(0, 0, 0, '#ffffff')
  }

  _coverImg(box_w, box_h, source_w, source_h) {
    var sx = 0,
        sy = 0,
        sWidth = source_w,
        sHeight = source_h;
    if(source_w > source_h || (source_w == source_h && box_w < box_h)){
        sWidth = box_w*sHeight/box_h;
        sx = (source_w-sWidth)/2;
    }else if(source_w < source_h || (source_w == source_h && box_w > box_h)){
        sHeight = box_h*sWidth/box_w;
        sy = (source_h-sHeight)/2;
    }
    return{
        sx,
        sy,
        sWidth,
        sHeight
    }
  }

  coverImg(src, pos) {
    const { _x, _y, _w, _h } = this.getRealPosistion(pos)
    const { sx, sy, sWidth, sHeight } = this._coverImg(_w, _h, src.width, src.height)
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(_x, _y, _w, _h)
    this.ctx.drawImage(src, sx, sy, sWidth, sHeight, _x, _y, _w, _h)
  }

  image (src, pos) {
    const { _x, _y, _w, _h } = this.getRealPosistion(pos)
    this.ctx.drawImage(src, _x, _y, _w, _h)
  }

  text (str = '', pos, style) {
    const { _x, _y } = this.getRealPosistion(pos, style.align)
    const { fontSize, color, textBaseline, textAlign, fontFamily, cssStyle } = style

    const { fontStyle, weight, size, family } = cssStyle || {}
    const font = `${fontStyle || 'normal'} ${weight || 400} ${(size || fontSize) * this.ratio}px ${family || fontFamily || 'sans-serif'}`
    this.ctx.font = font
    this.ctx.setFontSize((size || fontSize) * this.ratio)
    this.ctx.fillStyle = color
    this.ctx.setTextAlign(textAlign)
    this.ctx.setTextBaseline(textBaseline)
    this.ctx.fillText((str + '').trim(), _x, _y)
  }

  line (pos, style) {
    const { _x, _y, _x2, _y2 } = this.getRealPosistion(pos)
    const { color, lineWidth } = style
    this.ctx.beginPath()
    this.ctx.moveTo(_x, _y)
    this.ctx.lineTo(_x2, _y2)
    this.stroke(color, lineWidth)
  }

  dashLine (pos, style) {
    const { _x, _y, _x2, _y2 } = this.getRealPosistion(pos)
    const { color, lineWidth, unit } = style
    const _unit = unit * this.ratio

    const num = Math.floor((_x2 - _x) / _unit)
    this.ctx.beginPath()
    for (let i = 0; i <= num; i++) {
      this.ctx.moveTo(_x + i * _unit, _y)
      this.ctx.lineTo(_x + i * _unit + 0.6 * _unit, _y2)
    }
    this.stroke(color, lineWidth)
  }

  paragraph (str, pos, style) {
    const { textAlign, textBaseline, fontSize, color, lineNum, lineHeight, cssStyle, fontFamily } = style
    const { fontStyle, weight, size, family } = cssStyle || {}
    this.ctx.font = `${fontStyle || 'normal'} ${weight || 400} ${(size || fontSize) * this.ratio}px ${family || fontFamily || 'sans-serif'}`
    const { _x, _y, _w } = this.getRealPosistion(pos)
    const _lineHeight = lineHeight * this.ratio
    // this.ctx.setFontSize((fontSize || size) * this.ratio)
    this.ctx.textAlign = textAlign
    this.ctx.textBaseline = textBaseline
    this.ctx.fillStyle = color

    const strLen = str.length
    let lineStart = 0
    let lineLen = 0

    for (let i = 0; i < lineNum; i++) {
      lineStart = lineStart + lineLen
      lineLen = 0
      let width = 0
      while (width <= _w && lineStart + lineLen <= strLen) {
        lineLen++
        let tempStr = str.slice(lineStart, lineStart + lineLen)
        width = this.ctx.measureText(tempStr).width
      }
      lineLen--
      let fillStr = str.slice(lineStart, lineStart + lineLen)
      if (i === lineNum - 1 && lineStart + lineLen < strLen) { // 到头了
        fillStr = str.slice(lineStart, lineStart + lineLen - 1) + '...'
      }

      this.ctx.fillText(fillStr, _x, _y + i * _lineHeight)
    }
  }
}

export default Painter
