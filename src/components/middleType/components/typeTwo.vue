<script setup lang="ts">
// 组件化Ul 定义name，style，dom元素,接收props值
const props = defineProps(['item'])

</script>

<template>
    <!-- typeOne -->
    <ul class="specil-ul  bg" :style="props.item.styleAll">
        <li v-for="ite in props.item.contentObj">
            <div class="exhibition">
                <p>{{ ite[0].title }}</p>
                <img :src="ite[0].src">
            </div>
            <div class="hover">
                <ul class="hover-ul">
                    <li v-for="item in ite[1]">
                        <a :target='item.target' :rel="item.nofollow"  :href="item.href">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.specil-ul {
    width: 100%;
    letter-spacing: -4px;
    padding-left: 0;
    max-width: 1440px;
    margin: 0 auto;
}
.specil-ul>li {
    margin-left: 1px;
    display: inline-block;
    width: 19.91%;
    position: relative;
    letter-spacing: 0;
}
.specil-ul>li:after {
    content: '';
    position: absolute;
    height: 327px;
    top: 0px;
    left: 100%;
    border-right: 1px solid #ededed;
}
.specil-ul>li .exhibition {
    text-align: center;
    padding: 40px 40px 20px 40px;
    background-color: #fff;
}
.specil-ul>li .exhibition img {
    width: 200px;
    height: 200px;
}
.specil-ul > li .exhibition p {
    white-space: nowrap;
    font-size: 18px;
    color: #333;
    margin-bottom: 40px;
    overflow: hidden;
    word-wrap: normal;
    text-overflow: ellipsis;
}
.hover {
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(30,85,177,0.8);
    width: 100%;
    height: 100%;
    padding-left: 40px;
    padding-top: 35px;
    box-shadow: 1px 10px 15px #d8d7d7;
    transition: all 1.5s ease;
    transition: opacity 1.5s;
    visibility: hidden;
    opacity: 0;
}
.hover-ul{
    padding-left: 0;
}
.hover-ul li a {
    color: #fff;
    display: block;
    height: 40px;
}
.hover-ul li a:hover {
    color: #faa61a;
    transform: translate(3px,0);
    transition: all 0.3s ease;
}
.specil-ul>li:after {
    content: '';
    position: absolute;
    height: 327px;
    top: 0px;
    left: 100%;
    border-right: 1px solid #ededed;
}
.specil-ul>li:hover .hover {
    visibility: visible;
    opacity: 1;
}
</style>