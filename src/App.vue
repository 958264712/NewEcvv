<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView class="app"/>
  <!-- 全局静态布局 -->
</template>

<style >
/* 全局样式定义 */
.app{
  position: relative;
}
ul,li,ol{
  list-style-type: none;
}
a{
  color: #000;
}
section{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
img {
    vertical-align: middle;
}
input:focus, textarea:focus {
  outline: none;
}
</style>
