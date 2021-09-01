import avatar from "./avatar";

const map = {
  tiny: 1,
  small: 1,
  large: 1,
  middle: 1,
  normal: 1,
  big: 1,
  tinyx: 1,
  normalx: 1
}

export default {
  props: {
    type: {
      type: String,
      validator: (v) => Object.keys(map).includes(v),
      default: 'normal'
    },
    src: String,
    name: {
      type: String,
      default: ''
    }
  },
  render(h) {
    const component = map[this.type]

    if (component) {
      return h(avatar, {
        on: this.$listeners,
        props: this.$props
      })
    }

    return null
  }
}
