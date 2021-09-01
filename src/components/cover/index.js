import tiny from "./tiny";
import small from "./small";
import large from "./large";
import middle from "./middle";
import tinyx from "./tinyx";

const map = {
  tiny,
  small,
  large,
  middle,
  normal: middle,
  tinyx
}

export default {
  props: {
    type: {
      type: String,
      validator: (v) => ['tiny', 'small', 'normal', 'middle', 'large', 'tinyx'].includes(v),
      default: 'normal'
    },
    src: String
  },
  render(h) {
    const component = map[this.type]

    if (component) {
      return h(component, {
        on: this.$listeners,
        props: this.$props
      })
    }

    return null
  }
}
