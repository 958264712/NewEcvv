<script setup lang="ts">
import {ref,defineAsyncComponent} from 'vue'
import {useRouter} from 'vue-router'
import {getProductInfo,getProductOrder} from '@/api/modular/search'
import { ElMessage } from 'element-plus';

const content = defineAsyncComponent(() => import('./components/content.vue'))
const otp = defineAsyncComponent(() => import('./components/otp.vue'))
const all = defineAsyncComponent(() => import('./components/all.vue'))
const StartOrderModel = defineAsyncComponent(() => import('./components/StartOrderModel.vue'))
const router = useRouter()
const params = ref({
    pid:router.options.history.location.split('=')[1]
})
const paramsInfo = ref<any>({
    pid:router.options.history.location.split('=')[1],
    skuId:''
})
const StartOrderDialog = ref()
const ProductInfo = ref<any>({})
const ProductDataInfo = ref<any>({})
const ifOpen = ref(false)
const handleQuery = async () => {
    const res = await getProductInfo(Object.assign(params.value))
    if(res.data.type === 'success'){
        ProductInfo.value = res.data.result
        // 产品详情
        ProductInfo.value.picPathAll = res.data.result.productDetail.picPathAll[0]
        ProductInfo.value.productDescription = res.data.result.productDetail.productDescription
        ProductInfo.value.productPropertyList = res.data.result.productDetail.productPropertyList
        ProductInfo.value.picPathAllList = res.data.result.productDetail.picPathAll
        ProductInfo.value.productName = res.data.result.productDetail.productName
        ProductInfo.value.supplyAbility = res.data.result.productDetail.supplyAbility
        ProductInfo.value.minorderUnit = res.data.result.productDetail.minorderUnit
        ProductInfo.value.minOrder = res.data.result.productDetail.minOrder
        ProductInfo.value.productID = res.data.result.productDetail.productID
        ProductInfo.value.productPrice = res.data.result.productOtherInfo.productPrice
        ProductInfo.value.priceUnit = res.data.result.productOtherInfo.priceUnit
        ProductInfo.value.productUnit = res.data.result.productOtherInfo.productUnit
        ProductInfo.value.skuInfo = res.data.result.productOtherInfo.skuInfo
        if(ProductInfo.value.skuInfo?.length > 0){
            ProductInfo.value.ifSku = true
        }else{
            ProductInfo.value.ifSku = false
        }
        ProductInfo.value.skuPrice = res.data.result.productOtherInfo.skuPrice
        // 面包屑
        ProductInfo.value.getNavigationMsg = res.data.result.getNavigationMsg
        // 产品列表
        const list = res.data.result.recommProductList
        ProductInfo.value.recommProductList = []
        const list1 = ref<any>([])
        list.map((item:any)=>{
            list1.value.push(item)
            if(list1.value.length % 7 === 0){
                ProductInfo.value.recommProductList.push(list1.value)
                list1.value = []
            }
        }) 
        // 推荐产品列表
        ProductInfo.value.productRecommendList = res.data.result.productRecommendList

    }
}
handleQuery()
const handleQuery1 = async () => {
    const res = await getProductOrder(Object.assign(paramsInfo.value))
    if(res.data.type === 'success'){
        ProductDataInfo.value.productName = res.data.result.productName
        ProductDataInfo.value.firstPicPath = res.data.result.firstPicPath
        ProductDataInfo.value.m_packing = res.data.result.m_packing
        ProductDataInfo.value.price = res.data.result.price
        ProductDataInfo.value.productbrand = res.data.result.productbrand
        ProductDataInfo.value.productmodel = res.data.result.productmodel
        ProductDataInfo.value.unitStr = res.data.result.unitStr
        ProductDataInfo.value.token = res.data.result.token
    }
}

const handleStartOrder = () =>{
    if(ifOpen.value === true|| !ProductInfo.value.ifSku){
        handleQuery1()
        StartOrderDialog.value.openDialog()
    }else{
        ElMessage.error('Please select All Message')
    }
}

// emit 
const select = (list:any,list1:any) => {
    const selectList = list.concat(list1)
    if(selectList.length === 3){
        ProductInfo.value.skuPrice.map((item:any) =>{
            const head = item.skuPropIds.split(',')
            if(head[0] === selectList[0]){
                paramsInfo.value.skuId = item.skuPropIds
                ifOpen.value = true
            }
        })
    }
}
</script>
<template>
    <main>
        <section class="details-content-banner">
            <a href="//purchasing.ecvv.com" target="_blank">
            </a>
        </section>
        <content :handleStartOrder="handleStartOrder" :ProductInfo = "ProductInfo" @select="select"/>
        <otp :ProductInfo = "ProductInfo"/>
        <all :handleStartOrder="handleStartOrder" :ProductInfo = "ProductInfo"/>
        <StartOrderModel ref="StartOrderDialog" :ProductDataInfo = "ProductDataInfo" />

    </main>
</template>
<style scoped lang="scss">
.details-content-banner a {
    display: block;
    height: 156px;
    width: 100%;
    background: url('//eresource.ecvv.com/PC_Ecvv/images/company-img/banner1440.jpg') center no-repeat;
}
main{
    background-color: #fff;
}
</style>