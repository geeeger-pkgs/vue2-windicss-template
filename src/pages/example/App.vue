<template>
  <div id="app">
    <div>
      <router-link to="/">去view1</router-link>
      <router-link to="/view2">去view2</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
