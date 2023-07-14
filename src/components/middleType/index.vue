<script  setup lang="ts">
import { ref, defineAsyncComponent, reactive, watch } from 'vue'
const typeOne = defineAsyncComponent(() => import('./components/typeOne.vue'))
const typeTwo = defineAsyncComponent(() => import('./components/typeTwo.vue'))
const typeThree = defineAsyncComponent(() => import('./components/typeThree.vue'))
const typeFour = defineAsyncComponent(() => import('./components/typeFour.vue'))
// 组件化 定义name，style，dom元素,接收props值
const typeList = ref<object[]>([])
const props = defineProps(['typeProps'])
let itemObj: TypeTemp = {
    type: 0,
    name: '',
    target1: '',
    rel1: '',
    href1: '',
    title1: '',
    src1: '',
    contentObj: []
}
// 判断浏览器大小进行数据传输
let styleAll = ref({})
let styleImg = ref({})
const obj = reactive({ width: document.body.clientWidth })
// 进入当前浏览器时，判断是否改变大小
if (obj.width < 1400) {
    styleAll.value = {
        width: '1200px'
    }
    styleImg.value = {
        width: '160px',
        height: '160px'
    }
} else {
    styleAll.value = {
        width: '1440px'
    }
    styleImg.value = {
        width: '200px',
        height: '200px'
    }
}
// 监听变化
watch(
    () => obj.width,
    (val) => {
        obj.width = val;
        // 进入当前浏览器时，判断是否改变大小
        if (obj.width < 1400) {
            styleAll.value = {
                width: '1200px'
            }
            styleImg.value = {
                width: '160px',
                height: '160px'
            }
        } else {
            styleAll.value = {
                width: '1440px'
            }
            styleImg.value = {
                width: '200px',
                height: '200px'
            }
        }
    },
    {
        deep: true,
    }
);

// 浏览器改变时，壳子大小改变
window.onresize = () => {
    obj.width = document.body.clientWidth
}
window.onscroll = () => {
    obj.width = document.body.clientWidth
}
// 接收type类型，区分为哪种类型
props.typeProps.map((item: any) => {
    switch (item.type) {
        case 1:
            itemObj = {
                type: item.type,
                name: item.name,
                styleAll: styleAll,
                target1: item.content[0].target,
                rel1: item.content[0].rel,
                href1: item.content[0].href,
                title1: item.content[0].title,
                src1: item.content[0].src,
                contentObj: item.content[1]
            }
            break;
        case 2:
            itemObj = {
                type: item.type,
                name: item.name,
                styleAll: styleAll,
                contentObj: item.content
            }
            break;
        case 3:
            itemObj = {
                type: item.type,
                name: item.name,
                autoplay: item.autoplay,
                ifHref: item.ifHref,
                isHref: item.isHref,
                ifName: item.ifName,
                titleHref: item.titleHref,
                ifPropPrice: item.ifPropPrice,
                style: item.style,
                styleAll: styleAll,
                styleImg: styleImg,
                contentObj: item.content
            }
            break;
        case 4:
            itemObj = {
                type: item.type,
                name: item.name,
                styleAll: styleAll,
                contentObj: item.content
            }
            break;
    }
    typeList.value.push(itemObj)
})

</script>

<template>
    <!-- 开头 ---先遍历，再判断是哪种类型--->
    <section v-for="item in typeList">
        <template v-if="(item as TypeTemp).type === 1">
            <typeOne :item="item" />
        </template>
        <template v-else-if="(item as TypeTemp).type === 2">
            <typeTwo :item="item" />
        </template>
        <template v-else-if="(item as TypeTemp).type === 3">
            <typeThree :item="item" />
        </template>
        <template v-else-if="(item as TypeTemp).type === 4">
            <typeFour :item="item" />
        </template>

    </section>
</template>
<style scoped lang="scss">
section {
    margin: 0 auto;
}
</style>
