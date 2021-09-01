<template>
  <div
    class="w-58px h-58px rounded-full overflow-hidden font-medium flex justify-center items-center leading-none"
    :class="`${typeStyle} ${src ? '' : radomColor}`"
    v-on="$listeners"
  >
    <img v-if="src" v-lazy="src" alt="" class="w-full h-full object-cover">
    <span v-else>{{getName}}</span>
  </div>
</template>

<script>
import LazyloadMixin from "@/mixins/lazyload";
import { shuffle } from 'lodash-es';
/* eslint-disable no-control-regex */

export default {
  mixins: [
    LazyloadMixin
  ],
  props: {
    src: String,
    type: {
      type: String,
      default: 'normal'
    },
    name: {
      type: String,
      default: '',
    }
  },

  computed: {
    typeStyle() {
      return {
        big: 'w-58px h-58px text-20px',
        large: 'w-86px h-86px text-30px',
        middle: 'w-50px h-50px text-16px',
        normal: 'w-48px h-48px text-15px',
        normalx: 'w-36px h-36px text-12px',
        small: 'w-40px h-40px text-13px',
        tiny: 'w-30px h-30px text-10px',
        tinyx: 'w-16px h-16px text-10px',
      }[this.type]
    },
    radomColor() {
      const colors = [
        'bg-rose-100 text-rose-500',
        'bg-pink-100 text-pink-500',
        'bg-fuchsia-100 text-fuchsia-500',
        'bg-purple-100 text-purple-500',
        'bg-violet-100 text-violet-500',
        'bg-indigo-100 text-indigo-500',
        'bg-blue-100 text-blue-500',
        'bg-cyan-100 text-cyan-500',
        'bg-teal-100 text-teal-500',
        'bg-emerald-100 text-emerald-500',
        'bg-green-100 text-green-500',
        'bg-lime-100 text-lime-500',
        'bg-yellow-100 text-yellow-500',
        'bg-amber-100 text-amber-500',
        'bg-orange-100 text-orange-500',
        'bg-red-100 text-red-500',
      ]
      return shuffle(colors)[0]
    },
    getName() {
      let name = this.name || this.name.trim()
      if (!name) {
        return '';
      }
      if (/^[^\x00-\xff]/.test(name)) {
        return name[0]
      }
      const n = name.split(' ')
      if (!n[1] || /^[^\x00-\xff]/.test(n[1])) {
        return n[0][0]
      }
      return n[0][0] + n[1][0]
    }
  }
}
</script>
