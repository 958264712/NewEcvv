<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'; 
const route = useRoute()
// 懒加载 引入组件
const Homehead = defineAsyncComponent(() => import('@/views/Header/index.vue'));
const Homefooter = defineAsyncComponent(() => import('@/views/Footer/index.vue'));
const Sidebar = defineAsyncComponent(() => import('@/views/Sidebar/index.vue'));

</script>

<template>
  <Homehead class="head" />
  <router-view :key="route.path"/>
  <Homefooter class="foot" />
  <!-- 侧边栏 -->
  <Sidebar class="side" />
</template>

<style scoped>
.head {
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
}

.content {
  height: 100%;
  margin: 20px auto;
}

.foot {
  padding-bottom: 34px;
  width: 100%;
  background: #f5f5f5;
  border-top: 2px solid #ddd;
}
.side{
  position: fixed;
  top: 50%;
  right: 5px;
}
</style>
