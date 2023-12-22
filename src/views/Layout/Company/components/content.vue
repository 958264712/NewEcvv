<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted } from "vue";
import { getCompanyInfo } from "@/api/modular/company.ts";
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
  await getCompanyInfo().then((res) => {
    if (res.data.type === "success") {
      Session.set("companyInfo", res.data.result);
      companyInfo.value = res.data.result.companyInfo;
      companyProfile.value = res.data.result.companyProfile
      companyCardInfo.value = res.data.result.companyCardInfo;
      companyname.value = res.data.result.companyname;
      description.value = res.data.result.description;
      countryName.value = res.data.result.countryName;
      companyarea.value = res.data.result.companyarea;
      companyPic.value = res.data.result.companyPic;
      subDomainName.value = res.data.result.subDomainName;
      companyCateGroup.value = res.data.result.companyCateGroup;
      companySlidePicList.value = res.data.result.companySlidePicList;
      productShowcase.value = res.data.result.productShowcase;
      companyContactPerson.value = res.data.result.companyContactPerson;
      companyContactUrl.value = res.data.result.companyContactUrl;
      newProducts.value = res.data.result.newProducts;
      companyIcon.value = {
        companylevel:res.data.result.companylevel,
        year:res.data.result.year,
        yearEnd:res.data.result.yearEnd
      }
    }
  });
};

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
    <HeaderWrap :companyIcon="companyIcon" :companyCateGroup="companyCateGroup" :companyProfile="companyProfile" :companyname="companyname" :description="description" />
    <NavWrap />
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
  </main>
</template>
