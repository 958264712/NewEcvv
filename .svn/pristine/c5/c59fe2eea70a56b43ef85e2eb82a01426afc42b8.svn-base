<script setup lang="ts">
import { ref,onMounted,defineAsyncComponent } from "vue";
import { getCompanyInfo } from '@/api/modular/company.ts'
import { Session } from '@/utils/storage';

const ComHeader = defineAsyncComponent(() => import("./components/company_header.vue"));
const NavWrap = defineAsyncComponent(() => import("./components/navWrap.vue"));
const Content = defineAsyncComponent(() => import("./components/content.vue"));
const ProduceList = defineAsyncComponent(() => import("./components/produceList.vue"));

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
    width:'1400px',
    margin:'0 auto'
})
const companyIcon = ref<any>({
  companylevel:50,
  year:0,
  yearEnd:''
})

// 获取公司信息
const handleQuery = async () => {
    await getCompanyInfo().then((res)=>{
      if(res.data.type === 'success'){
        companyInfo.value = res.data.result.companyInfo
        companyProfile.value = res.data.result.companyProfile
        companyCardInfo.value = res.data.result.companyCardInfo
        companyname.value = res.data.result.companyname
        description.value = res.data.result.description
        countryName.value = res.data.result.countryName
        companyarea.value = res.data.result.companyarea
        companyPic.value = res.data.result.companyPic
        subDomainName.value = res.data.result.subDomainName
        companyCateGroup.value = res.data.result.companyCateGroup
        productShowcase.value = res.data.result.productShowcase 
        companySlidePicList.value = res.data.result.companySlidePicList;
        companyContactPerson.value = res.data.result.companyContactPerson
        companyContactUrl.value = res.data.result.companyContactUrl
        newProducts.value = res.data.result.newProducts 
        companyIcon.value = {
          companylevel:res.data.result.companylevel,
          year:res.data.result.year,
          yearEnd:res.data.result.yearEnd
        }
        Session.set('companyInfo',res.data.result)

        }
    })
}


onMounted(()=>{
    handleQuery()
})


</script>
<template>
  <main class='companyModuler'>
      <ComHeader :companyIcon="companyIcon" :companyname="companyname" :companyCardInfo="companyCardInfo" :countryName="countryName" :companyarea="companyarea" :companyPic="companyPic"/>
      <NavWrap  :companyProfile="companyProfile" :companyCateGroup="companyCateGroup" :subDomainName="subDomainName"/>
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
      <ProduceList :companyCateGroup="companyCateGroup" :newProducts="newProducts" :productShowcase="productShowcase" :companyname="companyname" :companyContactUrl="companyContactUrl" :companyPic="companyPic" :companyContactPerson="companyContactPerson"/>
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
