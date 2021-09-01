<template>
  <div class="w-120px h-162px rounded-9px overflow-hidden" v-on="$listeners">
    <img v-lazy="src" alt="" class="w-full h-full object-cover">
  </div>
</template>

<script>
import LazyloadMixin from "@/mixins/lazyload";

export default {
  mixins: [
    LazyloadMixin
  ],
  props: {
    src: String
  }
}
</script>
