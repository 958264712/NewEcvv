<script setup lang="ts">
import {defineAsyncComponent} from 'vue'
const RFQHeader = defineAsyncComponent(()=>import('./components/header.vue'))
const RFQContent = defineAsyncComponent(()=>import('./components/content.vue'))
const RFQFooter = defineAsyncComponent(()=>import('./components/footer.vue'))
</script>
<template>
    <main>
        <RFQHeader />
        <RFQContent />
        <RFQFooter />
    </main>
</template>
<style scoped lang="less">
    main{
        min-width:900px;
        margin:0 auto;
    }
</style>