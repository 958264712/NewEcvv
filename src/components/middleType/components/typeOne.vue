<script setup lang="ts">
// 组件化Ul 定义name，style，dom元素,接收props值
const props = defineProps(['item'])

</script>

<template>
    <!-- typeOne -->
    <div class="subassembly-box" >
        <div class="classify-list" v-for="item in props.item.contentObj" :key="props.item.id">
            <div class="classify-catalog-summary-img" id="categorytohome">
                <a target="_blank" rel="nofollow" :href="item.tncHref" :title="item.tncTitle">
                    <div class="classify-catalog-summary-imgs">
                        <img :src="item.tncSrc" :alt="item.tncTitle">
                    </div>
                    <div class="catalog-summary-info">
                        <div class="catalog-summary-info-title">{{ item.tncTitle }}</div>
                    </div>
                </a>
            </div>
            <!-- typeone：分格区 -->
            <div class="classify-catalog-dispersion-info" >
                <div class="catalog-dispersion-item" v-for="ite in item.proList" :key="ite.id">
                    <a target="_blank" :href="ite.productHref" :title="ite.productTitle">
                        <div>{{ ite.productTitle }}</div>
                        <div class="catalog-dispersion-pic">
                            <div class="catalog-dispersion-inr">
                                <img :src="ite.productSrc" :alt="ite.productTitle">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
a {
    color: #514d49;
}
a:hover {
    color: #23527c;
}
.subassembly-box {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
}
.classify-list {
    height: 400px;
    width: 100%;
    margin: 40px auto;
}
.classify-catalog-summary-img{
    height: 100%;
    width: 20%;
    float: left;
}
.classify-catalog-summary-imgs{
    height:100%;
    width: 100%;
    float: left;
}
.classify-catalog-summary-img a{
    display: inline-block;
}
.classify-catalog-summary-img img,.classify-catalog-summary-img a {
    height: 100%;
    width: 100%;
}
.catalog-summary-info {
    width: 20%;
    float: left;
    position: absolute;
    padding: 20px;
}
.catalog-summary-info-title {
    font-size: 20px;
    padding: 25px 0px;
}
.classify-catalog-dispersion-info {
    height: 400px;
    width: 80%;
    float: left;
    /* padding: 20px 25px; */
}
.catalog-dispersion-item {
    height: 200px;
    width: 25%;
    float: left;
    position: relative;
    padding: 20px;
    border: solid 1px #e1ebf3;
    margin: -1px -1px 0 0;
    background: #fff;
}
.catalog-dispersion-pic {
    height: 100%;
    /* width: 230px; */
    padding: 20px;
}
.catalog-dispersion-inr {
    height: 100%;
    width: 110px;
    float: right;
}
.catalog-dispersion-inr img {
    height: 100%;
    width: 100px;
}
</style>