<script setup lang="ts">
import { useRoute } from 'vue-router';
import { defineAsyncComponent } from 'vue'
const route = useRoute()
const Footer = defineAsyncComponent(() => import('@/views/Footer/index.vue'));
const Header = defineAsyncComponent(() => import('./components/header/index.vue'));

</script>

<template>
    <div class="login">
        <Header />
        <router-view :key="route.path" />
        <Footer />
    </div>
</template>

<style scoped lang="less">
.login{
    width:600px;
    margin:0 auto;
}
</style>