<template>
  <div
    class="h-38px rounded-full box-border border-1px border-[#D8DFE2] flex w-full justify-center items-center adjust-none text-10px font-light text-[#677786]"
    @click="gotoTop"
  >
    没有内容了，点击这里回到顶部
  </div>
</template>

<script>
export default {
  methods: {
    gotoTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>

</style>
