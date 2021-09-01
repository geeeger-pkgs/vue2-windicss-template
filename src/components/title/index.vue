<template>
  <div class="flex w-full h-20px justify-between items-center leading-none">
    <div class="text-16px font-medium flex text-title">
      {{title}}
      <span class="mr-4px">
        <slot name="icon" />
      </span>
    </div>
    <div class="flex flex-shrink-0 text-intro text-12px items-center" v-if="more" @click="onMoreClick">
      更多
      <img src="@/assets/arrow.svg" class="w-16px h-16px ml-6px">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    more: Boolean
  },
  methods: {
    onMoreClick() {
      this.$emit('more-click')
    }
  }
}
</script>

<style>

</style>
