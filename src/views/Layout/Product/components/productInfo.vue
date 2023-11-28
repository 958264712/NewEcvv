<script lang='ts' setup>
import {defineAsyncComponent,ref} from 'vue'

const props = defineProps(["info"])
const Left = defineAsyncComponent(()=>import('./infoComponents/left.vue'))
const Right = defineAsyncComponent(()=>import('./infoComponents/right.vue'))
</script>
<template>
<div class='productsInfo'>
    <Left :title = "props.info.title"/>
    <Right />
</div>
</template>
<style lang='less' scoped>
.productsInfo {
    background-color: #fff;
    margin-bottom: 20px;
    // max-width: 1480px;
    min-width: 768px;
    width: 100%;
    padding: 30px 11%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
</style>