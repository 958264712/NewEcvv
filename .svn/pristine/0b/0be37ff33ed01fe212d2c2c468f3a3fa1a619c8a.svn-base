<script lang='ts' setup>
import {defineAsyncComponent,ref} from 'vue'
import { ElMessage } from 'element-plus';
import { Session } from '@/utils/storage';

const ProductsInfo = defineAsyncComponent(()=>import('./components/productInfo.vue'))
const ProductDescription = defineAsyncComponent(()=>import('./components/productDescription.vue'))
const StartOrderModel = defineAsyncComponent(() => import('./components/StartOrderModel.vue'))
const Basket = defineAsyncComponent(() => import('../Basket/index.vue'))
const otp = defineAsyncComponent(() => import('@/views/Product/Sourcing/components/otp.vue'))

const companyInfo = ref<any>(Session.get('companyInfo'))
const pInfo = ref<any>(Session.get('pInfo'))
const StartOrderDialog = ref()
const prodInfo = ref()
const ifOpen = ref(false)
const companyPic = companyInfo.value.companyPic
const info = companyInfo.value.companyname
const ProductInfo = ref<any>({})
const ProductDataInfo = ref<any>({})
const handleStartOrder = () =>{
    if(prodInfo.value.ifOpen === true){
        // handleQuery1()
        StartOrderDialog.value.openDialog()
    }else{
        ElMessage.error('Please select All Message')
    }
}
// emit 


</script>
<template>
<div class='productsModule'>
    <ProductsInfo ref="prodInfo" :info="info" :companyPic="companyPic" :handleStartOrder="handleStartOrder"  />
    <otp :ProductInfo = "pInfo"/>
    <ProductDescription :ProductInfo="pInfo" :handleStartOrder="handleStartOrder" :info="info" @select="select"/>
    <StartOrderModel ref="StartOrderDialog" :ProductDataInfo = "ProductDataInfo" />
    <Basket class="basket" />
</div>
</template>
<style lang='less' >
.productsModule{
    background-color:#fff;
}
.main-icon,
.top .search-submit,
.header .diamond,
.header .platinum,
.header .gold,
.gold-button .icon-content-supplier,
.icon-prev-btn-large,
.icon-next-btn-large,
.col-left .search-box .submit,
.related-product-prev-btn a,
.related-product-next-btn a,
.mod-banner .slide .next,
.mod-banner .slide .prev,
.mod-banner .slide .slide-nav a,
.member-join span,
.member-logon span,
.nav-site .basket,
.view-page-wrap .page .pre-none,
.view-page-wrap .page .next,
.products-container .ico-select a,
.products-container .ico-select .selected,
.PDcol-right .contact .basket,
.PDcol-right .share .fb,
.PDcol-right .share .tt,
.see-larger-img .magnifier,
.header .verified {
  background-image: url('@/assets/images/com-sprites-v4.png');
  display: inline-block;
  background-repeat: no-repeat;
}
</style>