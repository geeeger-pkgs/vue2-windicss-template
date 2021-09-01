<template>
  <div>
    <cell-group>
      <cell title="示例" is-link url="example.html" />
      <divider content-position="left">分割线</divider>
    </cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Divider } from "vant";
export default {
  components: {
    Cell,
    CellGroup,
    Divider,
  },
};
</script>

<style scoped>
</style>
