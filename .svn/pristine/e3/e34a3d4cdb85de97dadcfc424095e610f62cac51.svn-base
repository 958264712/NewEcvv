<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const LeftSiderbar = defineAsyncComponent(
  () => import("./components/leftSidebar.vue")
);
const RightSiderbar = defineAsyncComponent(
  () => import("./components/rightSidebar.vue")
);
const Content = defineAsyncComponent(() => import("./components/content.vue"));
</script>
<template>
  <el-row class="companyModuler">
    <el-col :span="4" class="hidden-md-and-down">
      <LeftSiderbar />
    </el-col>
    <el-col :span="16">
      <Content />
    </el-col>
    <el-col :span="4" class="hidden-lg-and-down">
      <RightSiderbar />
    </el-col>
  </el-row>
</template>
<style lang="less" >
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
  background-image: url('@/assets/images/com-sprites-v4.png');
  display: inline-block;
  background-repeat: no-repeat;
}
</style>
