<script lang='ts' setup>
import {defineAsyncComponent,ref,watch} from 'vue'
import {getProductInfo,getProductOrder} from '@/api/modular/search'
import {useRouter} from 'vue-router'

const props = defineProps(["handleStartOrder","info","shopNum","setshopNum","companyPic"])
const emit = defineEmits(["shopNum","setshopNum"])
const Left = defineAsyncComponent(()=>import('./infoComponents/left.vue'))
const Right = defineAsyncComponent(()=>import('./infoComponents/right.vue'))

const router = useRouter()
const params = ref({
    pid:router.options.history.location.split('=')[1]
})
const ProductInfo = ref<any>({})

const setshopNum = (val:any) => {
    emit("setshopNum",val.value)
}
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
        if(ProductInfo.value.skuInfo.length > 0){
            ProductInfo.value.ifSku = true
        }else{
            ProductInfo.value.ifSku = false
        }
        ProductInfo.value.skuPrice = JSON.parse(res.data.result.productOtherInfo.skuPrice)
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
</script>
<template>
<div class='productsInfo'>
    <Left :title = "props.info" :ProductInfo = "ProductInfo" :handleStartOrder = "props.handleStartOrder" />
    <Right :shopNum="props.shopNum" @setshopNum="setshopNum" :title = "props.info" :companyPic="companyPic"/>
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