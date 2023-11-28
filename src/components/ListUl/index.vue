<script setup lang="ts">
// 组件化Ul 定义name，style，dom元素,接收props值
const props = defineProps(["setUl"]);
</script>

<template>
  <!-- 开头 ----以识别富文本的形式开发Ul组件使用v-html-->
  <ul
    :id="props.setUl.UlId"
    :class="props.setUl.className"
    :style="props.setUl.styleUl"
  >
    <li
      :class="item.className"
      :id="item.liId"
      v-for="item in props.setUl.children"
      v-html="item.content"
      :style="item.isStyle ? item.objStyle : ''"
    ></li>
  </ul>
</template>
