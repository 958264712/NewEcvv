<script setup lang="ts">
const props = defineProps(['rightAside'])

</script>
<template>
    <aside>
        <div class="col-right">
            <div class="adv-keywords">
                <h3>{{ props.rightAside.title }}</h3>
                <ul>
                    <li v-for="(item, index) in props.rightAside.list" :key="index">
                        <div class="img-wrapper">
                            <div class="img-inner-wrapper">
                                <a :href="item.href" :title="item.title" target="_blank" rel="nofollow">
                                    <img :src="item.src" :title="item.title" :alt="item.title">
                                </a>
                            </div>
                        </div>
                        <p class="product-title">
                            <a :href="item.href" :title="item.title" target="_blank" rel="nofollow">
                                <strong class="high-lighter">{{ item.code }}</strong>{{ item.text }}</a>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="rfq">
                <a href="https://myecvv.ecvv.com/RFQInquiry/CommInquiryPost.aspx"
                    style="border:1px solid #d7d5d5;height:43px;line-height:43px;display:block;cursor:pointer;text-align:center;"
                    title="Easy Sourcing More Convenient, More Efficient" target="_blank">Post Sourcing Request</a>
            </div>
        </div>
    </aside>
</template>
<style scoped lang="scss">
ul {
    padding: 0;
}

strong {
    font-weight: 700;
    color: #000;
}

.col-right {
    width: 200px;
    background-color: #FFFFFF;
}

.col-right .adv-keywords {
    border: 1px solid #ddd;
    padding-bottom: 15px;
}

.col-right .adv-keywords h3 {
    margin-top: 13px;
    font-weight: 700;
    text-align: center;
}

.col-right ul li {
    width: 100%;
    text-align: center;
    overflow: hidden;
}

.col-right .img-wrapper {
    width: 150px;
    height: 150px;
    border: 1px solid #eeeeee;
    overflow: hidden;
    display: block;
    margin: 12px auto 0;
}

.col-right .img-inner-wrapper {
    text-align: center;
    vertical-align: middle;
}

.col-right .img-inner-wrapper a {
    display: table-cell;
    height: 100%;
    text-align: center;
    vertical-align: middle;
}

.col-right li img {
    height: auto;
    vertical-align: middle;
    width: auto;
    max-height: 150px;
    border: medium none;
}

.col-right .product-title {
    height: auto;
    line-height: 18px;
    margin: 5px auto;
    text-align: left;
    width: 150px;
    max-height: 35px;
}

.col-right .product-title a {
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.product-title a:hover,
.product-title a:hover strong {
    color: #ee6600;
}
.rfq a{
    color:#0f55ae;
}
.rfq a:hover {
    color: #ee6600;
}
</style>