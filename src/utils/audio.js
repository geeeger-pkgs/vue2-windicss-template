/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:14:09
 * @Last Modified by: geeeger
 * @Last Modified time: 2021-08-11 12:57:26
 * @Description: 全域音乐控制器，依赖howler
 */
import { Howl } from "howler"
import bus from "./bus"

const cache = new Map()

// const AppName = `AudioManager`

const CurrentSource = 'current'

const Rate = 'rate'

export const AudioManager = {
  /**
   * @description 播放
   */
  play() {
    if (!cache.has('current')) {
      // throw new Error(`${AppName}: No source find`)
      return
    }

    const current = cache.get(CurrentSource)

    if (!current.howl.playing()) {
      current.howl.play()
      const rate = cache.get(Rate)
      if (rate) {
        current.howl.rate(Number(rate))
      }
    }
  },

  /**
   * @description 更换源
   * @param {string} src
   * @param {*} noPlay
   */
  src(src, noPlay) {
    AudioManager.stop()
    let current
    if (!cache.has(src)) {
      current = {
        key: src,
        howl: new Howl({
          src: [src],
          html5: true,
          onplay() {
            bus.$emit('audioPlay', current)
          },
          onload() {
            bus.$emit('audioLoad', current)
          },
          onend() {
            bus.$emit('audioEnd', current)
          },
          onpause() {
            bus.$emit('audioPause', current)
          },
          onstop() {
            bus.$emit('audioStop', current)
          },
          onseek() {
            bus.$emit('audioSeek', current)
          }
        })
      }

      cache.set(src, current)
      cache.set(CurrentSource, current)
      !noPlay && AudioManager.play()
      if (current.howl.state() === 'loaded') {
        bus.$emit('audioLoaded', current)
      } else {
        bus.$emit('audioLoading', current)
      }
    } else {
      current = cache.get(src)
      cache.set(CurrentSource, current)
      !noPlay && AudioManager.play()
    }
  },

  /**
   * @description 暂停
   */
  pause() {
    if (!cache.has('current')) {
      // throw new Error(`${AppName}: No source find`)
      return
    }

    const current = cache.get(CurrentSource)
    current.howl.pause()
  },

  /**
   * @description Set the volume and update the volume slider display.
   * @param {number} val val Volume between 0 and 1.
   */
  volume(val) {
    if (!cache.has('current')) {
      // throw new Error(`${AppName}: No source find`)
      return
    }

    const current = cache.get(CurrentSource)
    current.howl.volume(val)
  },

  /**
   * @description Seek to a new position in the currently playing track.
   * @param {number} per Percentage through the song to skip.
   */
  seek(per) {
    if (!cache.has('current')) {
      // throw new Error(`${AppName}: No source find`)
      return
    }

    const current = cache.get(CurrentSource)

    if (current.howl.playing()) {
      current.howl.seek(current.howl.duration() * per)
    } else {
      current.howl.seek(current.howl.duration() * per)
      current.howl.play()
    }
  },

  /**
   * @description stop it
   */
  stop() {
    if (!cache.has('current')) {
      // throw new Error(`${AppName}: No source find`)
      return
    }

    const current = cache.get(CurrentSource)
    current.howl.stop()
  },

  current() {
    return cache.get(CurrentSource)
  },

  rate(val) {
    cache.set(Rate, val)
    if (!cache.has('current')) {
      // throw new Error(`${AppName}: No source find`)
      return
    }
    const current = cache.get(CurrentSource)
    current.howl.rate(Number(val))
  }
}
