<script setup lang="ts">
// 组件化Ul 定义name，style，dom元素,接收props值
const props = defineProps(['item'])

</script>

<template>
    <!-- typeFour -->
    <section class="chs" :style="props.item.styleAll">
        <h3 class="section-h3">
            {{ props.item.name }}
        </h3>
        <ul class="chs-ul bg">
            <li v-for="ite in props.item.content">
                <img :src="ite.src">
                <span>{{ite.title }}</span>
                <p>
                    {{ ite.content }}
                </p>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.chs{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
    margin-bottom: 50px;
}
.section-h3 {
    font-size: 24px;
    color: #333333;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 25px;
    font-weight: 600;
}
.chs-ul {
    letter-spacing: -4px;
}
.bg {
    background: #fff;
}
.chs-ul li {
    display: inline-block;
    width: 25%;
    padding: 50px 45px;
    vertical-align: top;
    text-align: center;
    position: relative;
    letter-spacing: 0;
    margin-left: -1px;
}
.chs-ul li span {
    display: block;
    font-size: 18px;
    color: #333333;
    margin-top: 10px;
    margin-bottom: 25px;
    font-weight: 600;
}
.chs-ul li p {
    text-align: left;
    color: #888888;
}
.chs-ul li:after {
    content: '';
    position: absolute;
    height: 160px;
    top: 120px;
    left: 100%;
    border-right: 1px solid #ededed;
}
.chs-ul li:last-child:after {
    border-right: none;
}
.chs-ul li:hover img {
    transform: translate(0,-5px);
    -webkit-transform: translate(0,-5px);
    transition: all 0.3s ease;
}
.chs-ul li:hover span {
    color: #ff6d18;
    transition: all 0.3s ease;
}
</style>