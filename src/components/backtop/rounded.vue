<template>
  <div
    class="w-75px h-75px"
    @click="gotoTop"
  >
    <img class="w-full h-full" src="@/assets/back-to-top.png">
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
