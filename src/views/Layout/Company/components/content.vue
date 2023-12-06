<script setup lang = "ts" >
import { defineAsyncComponent,ref,onMounted } from "vue";
import { getCompanyInfo } from '@/api/modular/company.ts'

const TopBar = defineAsyncComponent(() => import("./Content_components/topBar.vue"));
const HeaderWrap = defineAsyncComponent(() => import("./Content_components/headerWrap.vue"));
const NavWrap = defineAsyncComponent(() => import("./Content_components/navWrap.vue"));
const Section = defineAsyncComponent(() => import("@/components/Section/index.vue"));
const MBoxWrap = defineAsyncComponent(() => import("./Content_components/mBoxWrap.vue"));
const PCcols = defineAsyncComponent(() => import("./Content_components/pcCols.vue"));
const FormInquire = defineAsyncComponent(() => import("./Content_components/formInquire.vue"));

const companyInfo = ref<any>({})
const companyCardInfo = ref<any>({})
const companyname = ref("");
const description = ref("");


const imgList = ref([
    { url: 'https://upload.ecvv.com/upload/UserImage/20200528/ecvv1-49c18bff-5d00-4747-a6f5-5fdb5d3778dc.jpg',  key: 0 },
    { url: 'https://upload.ecvv.com/upload/UserImage/20200528/ECVV2-c1efe2cc-8706-47b5-9d4f-1786056aa65b.jpg',  key: 1 },
    { url: 'https://upload.ecvv.com/upload/UserImage/20200528/ecvv3-635fd0c4-f71c-4ae6-8b44-52c232e31302.jpg',  key: 2 },
])
const style = ref({
    height:'300px',
    width:'100%'
})
const radiusStyle = ref({
    width:'10px',
    height:'10px',
    radius:'50%'
})
// 获取公司信息
const handleQuery = async () => {
    await getCompanyInfo().then((res)=>{
        if(res.data.type === 'success'){
            companyInfo.value = res.data.result.companyInfo
            companyCardInfo.value = res.data.result.companyCardInfo
            companyname.value = res.data.result.companyname
            description.value = res.data.result.description
        }
    })
}


onMounted(()=>{
    handleQuery()
})
</script>
<template>
    <main>
        <TopBar :companyname="companyname" :companyCardInfo="companyCardInfo"/>
        <HeaderWrap :companyname="companyname" :description="description" />
        <NavWrap />
        <Section :list="imgList" :style="style" :interval="3000" :arrow="always" :radiusStyle="radiusStyle" />
        <MBoxWrap :companyname="companyname" :companyInfo="companyInfo"/>
        <PCcols />
        <FormInquire />
    </main>
</template>