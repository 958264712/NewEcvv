import { defineStore } from 'pinia'

export const contentStore = defineStore('contentStore', {
  state: () => {
    return { width: document.body.clientWidth }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    clientWidth() { 
        this.width = document.body.clientWidth
    },
  },
})