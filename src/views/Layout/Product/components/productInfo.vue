<script lang='ts' setup>
import {defineAsyncComponent,ref,watch} from 'vue'
import {getProductInfo,getProductOrder} from '@/api/modular/search'
import {useRouter} from 'vue-router'
import { Session } from "@/utils/storage";

const props = defineProps(["handleStartOrder","info","companyPic","pInfo"])
const Left = defineAsyncComponent(()=>import('./infoComponents/left.vue'))
const Right = defineAsyncComponent(()=>import('./infoComponents/right.vue'))

const router = useRouter()
const ifOpen = ref(false)
const paramsInfo = ref({})


const select = (list:any,list1:any) => {
    const selectList = list.concat(list1)
    if(selectList.length === props.ProductInfo.skuInfo?.length && props.ProductInfo.ifSku){
        props.pInfo.skuPrice.map((item:any) =>{
            const head = item.skuPropIds.split(',')
            if(head[0] === selectList[0]){
                paramsInfo.value.skuId = item.skuPropIds
                ifOpen.value = true
            }
        })
    }else{
        ifOpen.value = true
    }
}
defineExpose({ifOpen})
</script>
<template>
<div class='productsInfo'>
    <Left :title = "props.info" :ProductInfo = "props.pInfo" :handleStartOrder = "props.handleStartOrder" @select="select"/>
    <Right  :title = "props.info" :companyPic="companyPic"/>
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
}
</style>