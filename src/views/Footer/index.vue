<script setup lang="ts">
import { ref, defineAsyncComponent, watch } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const FootNav = defineAsyncComponent(() => import('./components/FootNav.vue'))
const Endtable = defineAsyncComponent(() => import('./components/Endtable.vue'))
const CopyRight = defineAsyncComponent(() => import('./components/CopyRight.vue'))

// 判断是否为reg页面
const ifReg = ref(false)
if (router.options.history.location === '/register' || router.options.history.location === '/account') {
  ifReg.value = true
} else {
  ifReg.value = false
}

</script>

<template>
  <main>
    <template v-if="!ifReg">
      <FootNav />
      <Endtable />
    </template>
    <CopyRight />
  </main>
</template>
