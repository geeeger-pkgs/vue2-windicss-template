<template>
  <Overlay :show="value" :custom-style="{ backgroundColor: 'rgba(17,17,17,0.4)'}" :z-index="zIndex">
    <div class="flex w-full h-full justify-center items-center flex-col">
      <div class="w-284px h-363px bg-white flex-shrink-0 overflow-hidden rounded-20px box-border pt-24px px-48px relative text-center">
        <div class="h-35px leading-35px line-clamp-1 text-title text-20px font-medium" v-if="showTitle">{{title || ''}}</div>
        <div>
          <slot></slot>
        </div>
        <div
          class="w-full h-57px absolute bottom-0 left-0 bg-[#268AF7] flex justify-center items-center text-white text-16px font-semibold"
          @click="onOk"
        >
          <Loading color="#FFF" size="16px" class="mr-6px" v-if="loading" />
          {{ okText }}
        </div>
      </div>
      <div
        v-if="showClose"
        class="w-53px h-53px rounded-full flex-shrink-0 mt-108px bg-black bg-opacity-26 overflow-hidden flex justify-center items-center"
        @click="onCancel"
      >
        <img src="@/assets/close.svg" class="w-16px h-16px">
      </div>
    </div>
  </Overlay>
</template>

<script>
import { Overlay, Loading } from "vant";
export default {
  components: {
    Overlay,
    Loading
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    okText: {
      type: String,
      default: '确定'
    },
    autoclose: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      input: false
    }
  },

  methods: {
    onOk() {
      this.$emit('on-ok')
      if (this.autoclose) {
        this.$emit('input', false)
      }
    },

    onCancel() {
      this.$emit('on-cancel')
      this.$emit('input', false)
    }
  }
}
</script>

<style>

</style>
