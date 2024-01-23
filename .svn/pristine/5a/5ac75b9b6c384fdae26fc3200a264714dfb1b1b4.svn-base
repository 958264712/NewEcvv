<script setup lang="ts">
import { ref,onMounted,defineAsyncComponent } from "vue";
// import { getCompanyInfo } from '@/api/modular/company.ts'
import { Session } from '@/utils/storage';
import '@/theme/template.less'


const ComHeader = defineAsyncComponent(() => import("./components/company_header.vue"));
const NavWrap = defineAsyncComponent(() => import("./components/navWrap.vue"));
const ProduceList = defineAsyncComponent(() => import("./components/produceList.vue"));
const Basket = defineAsyncComponent(() => import("../Basket/index.vue"));

const seesionCompany = Session.get('companyInfo')
const companyInfo = ref<any>({})
const companyProfile = ref<any>({})
const companyCardInfo = ref<any>({})
const productShowcase = ref<any>([])
const newProducts = ref<any>([])
const companyPic = ref<any>([])
const companySlidePicList = ref<any>([]);
const companyCateGroup = ref<any>([])
const companyname = ref("");
const description = ref("");
const companyarea = ref("");
const countryName = ref("");
const companyContactPerson = ref("");
const companyContactUrl = ref("");
const subDomainName = ref("");
const style = ref({
    height:'400px',
    maxWidth:'1400px',
    margin:'0 auto'
})
const companyIcon = ref<any>({
  companylevel:50,
  year:0,
  yearEnd:''
})
const primaryColor = ref("#0173a9");
const primaryRgbaColor = primaryColor.value
const companyStyleType = (key) => {
  switch (key) {
    case 1:
      primaryColor.value = '#0173a9'
      break;
    case 2:
      primaryColor.value = '#ed9706'
      break;
    case 3:
      primaryColor.value = '#79C547'
      break;
    case 4:
      primaryColor.value = '#d02460'
      break;
    case 5:
      primaryColor.value = '#ad0101'
      break;
    case 6:
      primaryColor.value = '#3e5e87'
      break;
    case 7:
      primaryColor.value = '#3b3c3e'
      break;
    case 8:
      primaryColor.value = '#2469aa'
      break;
    case 9:
      primaryColor.value = '#64bbd7'
      break;
  }
};

// 获取公司信息
const handleQuery = async () => {
        companyInfo.value = seesionCompany.companyInfo
        companyProfile.value = seesionCompany.companyProfile
        companyCardInfo.value = seesionCompany.companyCardInfo
        companyname.value = seesionCompany.companyname
        description.value = seesionCompany.description
        countryName.value = seesionCompany.countryName
        companyarea.value = seesionCompany.companyarea
        companyPic.value = seesionCompany.companyPic
        subDomainName.value = seesionCompany.subDomainName
        companyCateGroup.value = seesionCompany.companyCateGroup
        productShowcase.value = seesionCompany.productShowcase 
        companySlidePicList.value = seesionCompany.companySlidePicList;
        companyContactPerson.value = seesionCompany.companyContactPerson
        companyContactUrl.value = seesionCompany.companyContactUrl
        newProducts.value = seesionCompany.newProducts 
        companyStyleType(seesionCompany.webModel)
        companyIcon.value = {
          companylevel:seesionCompany.companylevel,
          year:seesionCompany.year,
          yearEnd:seesionCompany.yearEnd
        }
}

onMounted(() => {
  handleQuery();
});

</script>
<template>
  <main class='companyModuler'>
    <ComHeader :companyIcon="companyIcon" :companyname="companyname" :companyCardInfo="companyCardInfo" :countryName="countryName" :companyarea="companyarea" :companyPic="companyPic"/>
    <NavWrap :style="{'--primaryColor': primaryColor,'--primaryRgbaColor':primaryRgbaColor}" :companyProfile="companyProfile" :companyCateGroup="companyCateGroup" :subDomainName="subDomainName"/>
    <el-carousel
      arrow="always"
      :interval="3000"
      v-show="companySlidePicList.length"
      :style="style"
    >
      <el-carousel-item v-for="item in companySlidePicList" :key="item" style="height:400px">
        <img :src="item" style="width:100%;height:100%" />
      </el-carousel-item>
    </el-carousel>
    <ProduceList :style="{'--primaryColor': primaryColor}" :companyCateGroup="companyCateGroup" :newProducts="newProducts" :productShowcase="productShowcase" :companyname="companyname" :companyContactUrl="companyContactUrl" :companyPic="companyPic" :companyContactPerson="companyContactPerson"/>
    <Basket class="basket" />
  </main>
</template>
<style lang="less" >
.companyModuler {
  background-color: #fff;
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
