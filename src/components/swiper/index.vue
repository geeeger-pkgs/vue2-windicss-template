<template>
  <div>
    <Swipe loop height="90" autoplay="3000">
      <SwipeItem v-for="(item) in list" :key="`banner-${item.id}`" @click="onClicked(item, index)">
        <img class="w-full h-full object-cover rounded-15px" v-lazy="item.cover" />
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import LazyloadMixin from "@/mixins/lazyload";
import { Swipe, SwipeItem } from "vant";

export default {
  mixins: [
    LazyloadMixin
  ],

  components: {
    Swipe,
    SwipeItem
  },

  props: {
    list:{
      type: Array,
      default: () => []
    }
  },

  methods: {
    onClicked(item, index) {
      this.$emit('item-click', item, index)
    }
  }
}
</script>
