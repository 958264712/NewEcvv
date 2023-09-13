<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
// 懒加载 引入组件
const headerUp = defineAsyncComponent(() => import('./components/HeaderTop.vue'));
const headerDown = defineAsyncComponent(() => import('./components/HeaderSearch.vue'));

// 获取当前屏幕高度，判断是否固定高度
const ifFixed = ref<boolean>(false)
const style = ref<object>({})
const width = ref(document.body.clientWidth)
if (width.value < 1400) {
  style.value = {
    padding: '0',
    position: 'fixed',
    zIndex: 1000,
    backgroundColor: '#fff',
    width: '100%',
    boxShadow: '1px 2px 3px #dcdcdc',
    top: 0,
  }
} else {
  style.value = {
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#fff',
    width: '100%',
    boxShadow: '1px 2px 3px #dcdcdc',
    padding: '0 13%'
  }
}

// 滚动条高度改变时
window.addEventListener('scroll', () => {
  width.value = document.body.clientWidth
  if (document.documentElement.scrollTop > 80) {
    ifFixed.value = true
    if (width.value < 1400) {
      style.value = {
        padding: '0',
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        top: 0,
      }
    } else {
      style.value = {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        padding: '0 13%'
      }
    }
  }
   if (document.documentElement.scrollTop < 70) {
    ifFixed.value = false
  }
})
// 浏览器改变时
window.addEventListener('resize', () => {
  width.value = document.body.clientWidth
  if (document.documentElement.scrollTop > 80  ) {
    ifFixed.value = true
    if (width.value < 1400) {
      style.value = {
        padding: '0',
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        top: 0,
      }
    } else {
      style.value = {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        padding: '0 13%'
      }
    }
  } else {
    ifFixed.value = false
  }
  
})


</script>

<template>
  <main>
      <headerDown :style="ifFixed === true ? style : ''"/>
    <headerUp />

  </main>
</template>

