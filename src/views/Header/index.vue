<script setup lang="ts">
import { defineAsyncComponent, ref,watch,onMounted  } from 'vue'
import {useRouter} from 'vue-router'
import { Session } from '@/utils/storage';

// 懒加载 引入组件
const headerUp = defineAsyncComponent(() => import('./components/HeaderTop.vue'));
const headerDown = defineAsyncComponent(() => import('./components/HeaderSearch.vue'));

const companyInfo = Session.get('companyInfo')
const router = useRouter()
const location = router.options.history.location.split('/')[1]
// 判断是否为公司页面
const ifCompany = ref(false)

// 获取当前屏幕高度，判断是否固定高度
const ifFixed = ref<boolean>(false)
const style = ref<object>({})
const width = ref(document.body.clientWidth)
if (width.value < 1400) {
  style.value = {
    padding: '0',
    position: 'fixed',
    zIndex: 1000,
    backgroundColor: '#fff',
    width: '100%',
    boxShadow: '1px 2px 3px #dcdcdc',
    top: 0,
  }
} else {
  style.value = {
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#fff',
    width: '100%',
    boxShadow: '1px 2px 3px #dcdcdc',
    // padding: '0 13%'
  }
}

// 滚动条高度改变时
window.addEventListener('scroll', () => {
  width.value = document.body.clientWidth
  if (document.documentElement.scrollTop > 80 ) {
    ifFixed.value = true
    if(location === '' && companyInfo.companylevel < 50){
      ifFixed.value = false
    }
    if (width.value < 1400) {
      style.value = {
        padding: '0',
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        top: 0,
      }
    } else {
      style.value = {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        // padding: '0 13%'
      }
    }
  }
   if (document.documentElement.scrollTop < 70) {
    ifFixed.value = false
  }
})
// 浏览器改变时

window.addEventListener('resize', () => {
  width.value = document.body.clientWidth
  if (document.documentElement.scrollTop > 80  ) {
    ifFixed.value = true
    if(location === '' && companyInfo.companylevel < 50){
      ifFixed.value = false
    }
    if (width.value < 1400) {
      style.value = {
        padding: '0',
        position: 'fixed',
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        top: 0,
      }
    } else {
      style.value = {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '1px 2px 3px #dcdcdc',
        // padding: '0 13%'
      }
    }
  } else {
    ifFixed.value = false
  }
  
})

onMounted(()=>{
  if((location === ''&& companyInfo.companylevel < 50) || location === 'sendMsg'|| location === 'requestSample'||location === 'send-customized-request'){
    ifCompany.value = true
  }else{
    ifCompany.value = false
  }
})

watch(() =>router,(val)=>{
  if((location === ''&& companyInfo.companylevel < 50)  || location === 'sendMsg'|| location === 'requestSample' ||location === 'send-customized-request'){
    ifCompany.value = true
  }else{
    ifCompany.value = false
  }
},{
    // 深度观察监听
    deep: true
  })
</script>

<template>
  <main >
    <headerDown :style="ifFixed === true ? style : ''" :ifCompany="ifCompany"/>
    <headerUp v-show='!ifCompany'/>
  </main>
</template>

