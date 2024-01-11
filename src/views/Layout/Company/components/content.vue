<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from "vue";
import { Session } from "@/utils/storage";

const TopBar = defineAsyncComponent(
  () => import("./Content_components/topBar.vue")
);
const HeaderWrap = defineAsyncComponent(
  () => import("./Content_components/headerWrap.vue")
);
const NavWrap = defineAsyncComponent(
  () => import("./Content_components/navWrap.vue")
);
const Section = defineAsyncComponent(
  () => import("@/components/Section/index.vue")
);
const MBoxWrap = defineAsyncComponent(
  () => import("./Content_components/mBoxWrap.vue")
);
const PCcols = defineAsyncComponent(
  () => import("./Content_components/pcCols.vue")
);
const FormInquire = defineAsyncComponent(
  () => import("./Content_components/formInquire.vue")
);
const Basket = defineAsyncComponent(() => import("../../Basket/index.vue"));

const seesionCompany = Session.get('companyInfo')
const companyInfo = ref<any>({});
const companyProfile = ref<any>({})
const companyCardInfo = ref<any>({});
const companyIcon = ref<any>({
  companylevel:50,
  year:0,
  yearEnd:''
})
const productShowcase = ref<any>([]);
const newProducts = ref<any>([]);
const companyCateGroup = ref<any>([]);
const companyPic = ref<any>([]);
const companySlidePicList = ref<any>([]);
const companyname = ref("");
const description = ref("");
const companyarea = ref("");
const countryName = ref("");
const companyContactPerson = ref("");
const companyContactUrl = ref("");
const subDomainName = ref("");

const style = ref({
  height: "300px",
  width: "100%",
});
const radiusStyle = ref({
  width: "10px",
  height: "10px",
  radius: "50%",
});
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
  <main>
    <TopBar
      :companyname="companyname"
      :companyCardInfo="companyCardInfo"
      :countryName="countryName"
      :companyarea="companyarea"
    />
    <HeaderWrap :companySlidePicList="companySlidePicList" :companyIcon="companyIcon" :companyCateGroup="companyCateGroup" :companyProfile="companyProfile" :companyname="companyname" :description="description" />
    <NavWrap :companyProfile="companyProfile" :companyCateGroup="companyCateGroup" :subDomainName="subDomainName"/>
    <el-carousel
      arrow="always"
      :interval="3000"
      v-show="companySlidePicList.length"
    >
      <el-carousel-item v-for="item in companySlidePicList" :key="item">
          <img :src="item"  :style="style"/>
      </el-carousel-item>
    </el-carousel>
    <MBoxWrap
      :subDomainName="subDomainName"
      :newProducts="newProducts"
      :companyname="companyname"
      :companyContactUrl="companyContactUrl"
      :companyContactPerson="companyContactPerson"
      :companyInfo="companyInfo"
      :companyPic="companyPic"
      :productShowcase="productShowcase"
    />
    <PCcols
      :subDomainName="subDomainName"
      :companyCateGroup="companyCateGroup"
    />
    <FormInquire :companyname="companyname" />
    <Basket class="basket" />
  </main>
</template>
