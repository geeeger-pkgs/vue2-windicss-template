<template>
  <div :class="[
    'float-btn',
    'box-border',
    'h-40px',
    'rounded-full',
    'leading-40px',
    'text-center',
    'font-semibold',
    'text-16px',
    `float-btn--${type}`
  ]"
    v-on="$listeners"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: (value) => ['primary', 'plant', 'disabled'].includes(value),
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
.float-btn {
  &--primary {
    background: #268AF7;
    color: #fff;
  }

  &--plant {
    border: 1px solid #268AF7;
    color: #268AF7;
  }

  &--disabled {
    background: #8F9FB2;
    color: #fff;
  }
}
</style>
