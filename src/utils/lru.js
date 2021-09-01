/*
 * @Author: geeeger
 * @Date: 2021-08-03 09:25:49
 * @Last Modified by: geeeger
 * @Last Modified time: 2021-08-03 09:26:09
 * @Description: 使用链表实现的简单LRU
 */
import { LinkedList } from "@geeeger/structure";

export default class LRU {
  constructor(size) {
    this.cache = {};
    this.size = size;
    this.list = new LinkedList(null);
  }

  clear() {
    this.list = new LinkedList(null);
    this.cache = {};
  }

  remove(key) {
    if (this.list.remove(key)) {
      delete this.cache[key]
    }
  }

  keys() {
    return Object.keys(this.cache)
  }

  set(key, element) {
    if (!this.list.edit(key, key)) {
      this.list.add(key)
    }
    this.cache[key] = element;
    if (this.list.length > this.size) {
      let last = this.list.root
      let length = this.list.length - 1
      for (let index = 0; index < length; index++) {
        last = last.left;
      }
      this.remove(last.getValue());
    }
  }

  get(key) {
    return this.cache[key];
  }

  toArray() {
    return this.list.stream().map(key => ({
      key: key,
      value: this.cache[key]
    }))
  }

  getList() {
    return this.list.stream().map(key => this.cache[key])
  }

  length() {
    return this.list.length;
  }
}
