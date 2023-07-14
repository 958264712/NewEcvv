import { defineStore } from 'pinia'
import { contentStore } from './contentStore'
export const useCounterStore = defineStore('counter', () => {
  contentStore()

  return { contentStore }
})
