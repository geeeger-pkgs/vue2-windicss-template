/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:24:35
 * @Last Modified by: geeeger
 * @Last Modified time: 2021-09-01 16:49:00
 * @Description: 使用简单LRU实现的本地历史数据管理器
 */
import LRU from "./lru"
import store from "store2"
import visibilityChange from "@geeeger/page-visibility"
import { HistoryKey } from "@/config"

export default {
  lru: new LRU(20),
  keys: [],
  _onChange: () => {},
  init() {
    this._init()
    visibilityChange.addListener((isHidden) => {
      if (!isHidden) {
        this._init()
      }
    })
    visibilityChange.init()
    return this
  },

  _init() {
    this.lru.clear()
    const list = JSON.parse(store.get(HistoryKey) || '[]').reverse()
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      this.lru.set(element.id, element)
    }
    this._onChange(this.lru.getList())
  },

  onChange(fn) {
    this._onChange = fn;
    return this;
  },

  record(element) {
    this.lru.set(element.id, element)
    const list = this.lru.getList()
    const listStr = JSON.stringify(list)
    store.set(HistoryKey, listStr)
    this._onChange(list)
    return this;
  },

  remove(id) {
    this.lru.remove(id)
    const list = this.lru.getList()
    const listStr = JSON.stringify(list)
    store.set(HistoryKey, listStr)
    this._onChange(list);
    return this;
  },

  clear() {
    this.lru = new LRU(20)
    store.set(HistoryKey, '[]')
    this._onChange([]);
    return this;
  },

  destory() {
    visibilityChange.destory()
    this._onChange = () => {}
  }
}
