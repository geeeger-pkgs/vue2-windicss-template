import { genAbsoluteLink } from "@/utils/gen-url"
import QueryString from "qs"

export default {
  computed: {
    searchParams() {
      const { href } = window.location

      const url = new URL(href)

      return QueryString.parse(url.search.replace(/^\?/, ''))
    }
  },
  methods: {
    to(path) {
      return genAbsoluteLink(path)
    },
    navigatorTo(path) {
      location.href = genAbsoluteLink(path)
    },
  }
}
