<script setup lang="ts">
import { defineAsyncComponent,ref } from "vue";
import "@/theme/template.less";
import { colorToRGB } from "@/utils/colorRgba";
import { Session } from '@/utils/storage';

const LeftSiderbar = defineAsyncComponent(
  () => import("./components/leftSidebar.vue")
);
const RightSiderbar = defineAsyncComponent(
  () => import("./components/rightSidebar.vue")
);
const Content = defineAsyncComponent(() => import("./components/content.vue"));

const companyInfo = Session.get('companyInfo')
const primaryColor = ref("#0173a9");
const primaryRgbaColor = colorToRGB(primaryColor.value, 0.85);
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
companyStyleType(companyInfo.webModel)
</script>
<template>
  <el-row class="companyModuler">
    <el-col :span="4" class="hidden-md-and-down">
      <LeftSiderbar :style="{ '--primaryColor': primaryColor }" />
    </el-col>
    <el-col :span="16">
      <Content
        :style="{
          '--primaryColor': primaryColor,
          '--primaryRgbaColor': primaryRgbaColor,
        }"
      />
    </el-col>
    <el-col :span="4" class="hidden-lg-and-down">
      <RightSiderbar
        :style="{
          '--primaryColor': primaryColor,
          '--primaryRgbaColor': primaryRgbaColor,
        }"
      />
    </el-col>
  </el-row>
</template>
<style lang="less">
.companyModuler {
  padding: 0 10%;
  padding-top: 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
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
  background-image: url("@/assets/images/com-sprites-v4.png");
  display: inline-block;
  background-repeat: no-repeat;
}
</style>
