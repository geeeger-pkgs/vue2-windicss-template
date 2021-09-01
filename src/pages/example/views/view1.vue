<template>
  <div>
    view 1
    <input
      v-model="number"
      type="number"
      class="input"
    >
    <button @click="addNumber(Number(number))">
      Add new number
    </button>

    <div>{{getNumbers}}</div>

    <img
      v-if="Boolean(cat)"
      :src="cat"
      class="w-50 h-50"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      number: 0
    }
  },

  computed: {
    ...mapState(['cat']),
    ...mapGetters(['getNumbers'])
  },

  created() {
    this.fetchCat()
  },

  methods: {
    ...mapActions(['addNumber', 'fetchCat'])
  }
}
</script>

<style scoped>

</style>
