import Vue from 'vue';
import { Lazyload } from "vant";
import placeholder from "@/assets/placeholder.png";

export default {
  beforeCreate() {
    if (!this.$Lazyload) {
      Vue.use(Lazyload, {
        preLoad: 1.3,
        error: placeholder,
        loading: placeholder,
        attempt: 1
      })
    }
  }
}
