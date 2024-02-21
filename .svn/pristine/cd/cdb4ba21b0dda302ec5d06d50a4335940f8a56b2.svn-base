<script lang='ts' setup>
import {defineAsyncComponent,ref,onMounted} from 'vue'
import { ElMessage } from 'element-plus';
import { Session } from '@/utils/storage';
import {
  getProductInfo,
  getProductOrder,
} from "@/api/modular/search";

const ProductsInfo = defineAsyncComponent(()=>import('./components/productInfo.vue'))
const ProductDescription = defineAsyncComponent(()=>import('./components/productDescription.vue'))
const StartOrderModel = defineAsyncComponent(() => import('./components/StartOrderModel.vue'))
const Basket = defineAsyncComponent(() => import('../Basket/index.vue'))
const otp = defineAsyncComponent(() => import('@/views/Product/Sourcing/components/otp.vue'))

const companyInfo = ref<any>(Session.get('companyInfo'))
const productInfo = Session.get("productInfo");
const pInfo = ref<any>({})
const pDInfo = ref<any>({})
const StartOrderDialog = ref()
const prodInfo = ref()
const ifOpen = ref(false)
const companyPic = companyInfo.value.companyPic
const info = companyInfo.value.companyname
const paramsInfo = ref<any>({
  pid: productInfo.pid,
  // pid: '4868524',
});

const handleStartOrder = () =>{
    if(prodInfo.value.ifOpen === true){
        // handleQuery1()
        StartOrderDialog.value.openDialog()
    }else{
        ElMessage.error('Please select All Message')
    }
}
// emit 
// 获取产品订单信息
const pDInfoFun = async () => {
  const res = await getProductOrder(Object.assign(paramsInfo.value));
  if (res.data.type === "success") {
    pDInfo.value =res.data.result
  }
};
// 获取产品信息
const pInfoFun = async () => {
  const res = await getProductInfo(Object.assign(paramsInfo.value));
  if (res.data.type === "success") {
    pInfo.value = res.data.result;
    // 产品详情
    pInfo.value.picPathAll = res.data.result.productDetail.picPathAll[0];
    pInfo.value.productDescription =
      res.data.result.productDetail.productDescription;
    pInfo.value.productPropertyList =
      res.data.result.productDetail.productPropertyList;
    pInfo.value.picPathAllList = res.data.result.productDetail.picPathAll;
    pInfo.value.productName = res.data.result.productDetail.productName;
    pInfo.value.supplyAbility =
      res.data.result.productDetail.supplyAbility;
    pInfo.value.minorderUnit = res.data.result.productDetail.minorderUnit;
    pInfo.value.minOrder = res.data.result.productDetail.minOrder;
    pInfo.value.productID = res.data.result.productDetail.productID;
    pInfo.value.productPrice =
      res.data.result.productOtherInfo.productPrice;
    pInfo.value.priceUnit = res.data.result.productOtherInfo.priceUnit;
    pInfo.value.productUnit =
      res.data.result.productOtherInfo.productUnit;
    pInfo.value.skuInfo = res.data.result.productOtherInfo.skuInfo;
    if (pInfo.value.skuInfo.length > 0) {
      pInfo.value.ifSku = true;
    } else {
      pInfo.value.ifSku = false;
    }
    pInfo.value.skuPrice = JSON.parse(
      res.data.result.productOtherInfo.skuPrice
    );
    // 面包屑
    pInfo.value.getNavigationMsg = res.data.result.getNavigationMsg;
    // 产品列表
    const list = res.data.result.recommProductList;
    pInfo.value.recommProductList = [];
    const list1 = ref<any>([]);
    list.map((item: any) => {
      list1.value.push(item);
      if (list1.value.length % 7 === 0) {
        pInfo.value.recommProductList.push(list1.value);
        list1.value = [];
      }
    });
    // 推荐产品列表
    pInfo.value.productRecommendList =
      res.data.result.productRecommendList;
    Session.set("pInfo", res.data.result);
  }
};
onMounted(()=>{
    pInfoFun()
    pDInfoFun()
})
</script>
<template>
<div class='productsModule'>
    <ProductsInfo ref="prodInfo" :info="info" :pInfo="pInfo" :companyPic="companyPic" :handleStartOrder="handleStartOrder"  />
    <otp :ProductInfo = "pInfo"/>
    <ProductDescription :ProductInfo="pInfo" :handleStartOrder="handleStartOrder" :info="info" />
    <StartOrderModel ref="StartOrderDialog" :ProductDataInfo = "pDInfo" />
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
a{cursor:pointer;}
</style>