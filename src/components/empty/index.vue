<template>
  <div class="flex flex-col justify-center items-center">
    <img class="w-62px h-105px mt-90px" :src="require('@/assets/empty.svg')" />
    <div class="text-intro text-size-14px mt-30px text-center">{{msg}}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style>

</style>
