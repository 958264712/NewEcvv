<script setup lang="ts">
import { ref } from 'vue'
const ifBack = ref<boolean>(false)
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 400) {
        ifBack.value = true
    } else {
        ifBack.value = false
    }
})
// 回到顶部
const backTop = () => {
    document.documentElement.scrollTop = 0
}
// 跳转到pfr上
const goHref = () => {
    window.open('https://myecvv.ecvv.com/RFQInquiry/CommInquiryPost.aspx', '_blank')
}
</script>

<template>
    <ul id="sideBar">
        <li title="Tell us what you need and try the easy way to get quotes!">
            <i class="goHref" @click="goHref()" >
            </i>
        </li>
        <template v-if="ifBack === true">
            <li>
                <i class="backTop" @click="backTop()" />
            </li>
        </template>
    </ul>
</template>

<style scoped lang="scss">
i{
    font-style:normal;
}
.sideBar{
    width: auto;
    z-index: 10;
    inset: auto 20px 150px auto;
}
.backTop , .goHref {
    display: block;
    color: #fff;
    background-color: #73ace6;
    border-radius: 3px;
    font-family: "FontAwesome";
    text-align: center;
    transition: all ease-in-out .3s;
    width: 48px;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    margin-bottom:5px ;
}
.backTop:before {
    content: "\f139";
    font-size: 32px;
}
.goHref:before {
    content: "";
    display: block;
    height: 100%;
    background:url('@/assets/images/Icon/targetWhite.png') no-repeat  center center ;
}
</style>