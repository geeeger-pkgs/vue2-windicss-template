<template>
  <div :class="[
    'big-float-btn',
    'box-border',
    'w-318px',
    'h-55px',
    'rounded-full',
    'leading-55px',
    'text-center',
    'font-medium',
    'text-16px',
    `big-float-btn--${type}`
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
.big-float-btn {
  &--primary {
    background: #268AF7;
    box-shadow: 0px 7px 21px rgba(34, 131, 237, 0.5);
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
