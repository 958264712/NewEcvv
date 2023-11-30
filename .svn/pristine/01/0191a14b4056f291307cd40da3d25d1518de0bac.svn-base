<script lang='ts' setup>
import {defineAsyncComponent,ref} from 'vue'
import { ElMessage } from 'element-plus';

const ProductsInfo = defineAsyncComponent(()=>import('./components/productInfo.vue'))
const ProductDescription = defineAsyncComponent(()=>import('./components/productDescription.vue'))
const StartOrderModel = defineAsyncComponent(() => import('./components/StartOrderModel.vue'))
const otp = defineAsyncComponent(() => import('@/views/Product/Sourcing/components/otp.vue'))
const ifOpen = ref(false)
const info = ref({
    title:'LED Sky Ceiling Panel Light 40W LED Panel Lights'
})
const ProductInfo = ref<any>({})
const ProductDataInfo = ref<any>({})
const handleStartOrder = () =>{
    if(ifOpen.value === true){
        // handleQuery1()
        StartOrderDialog.value.openDialog()
    }else{
        ElMessage.error('Please select All Message')
    }
}
</script>
<template>
<div class='productsModule'>
    <ProductsInfo :info="info"/>
    <otp :ProductInfo = "ProductInfo"/>
    <ProductDescription :ProductInfo="ProductInfo" :handleStartOrder="handleStartOrder"/>
    <StartOrderModel ref="StartOrderDialog" :ProductDataInfo = "ProductDataInfo" />
</div>
</template>
<style lang='less' scoped>
.productsModule{
    background-color:#fff;
}
</style>