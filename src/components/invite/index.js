import avatar from "@/components/avatar";
import invite from "./invite";

export default {
  props: {
    src: String,
    invited: Boolean,
    name: {
      type: String,
      default: ''
    }
  },
  render(h) {
    if (this.invited) {
      return h(avatar, {
        on: this.$listeners,
        props: {
          src: this.src,
          name: this.name
        }
      })
    }

    return h(invite, {
      on: this.$listeners
    })
  }
}
