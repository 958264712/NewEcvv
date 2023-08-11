<script setup lang="ts">
const props = defineProps(['ProductInfo'])

</script>
<template>
    <section class="details-content-otp auto-w">
        <h3 class="details-content-otp-h3">
            Products related to this item
        </h3>
        <div class="wc1200 row rowE">
            <div class="bd mt20" style="margin: 10px;">
                <div id="sca1" class="warp-pic-list">
                    <div id="wrapBox1" class="wrapBox" style="width: 1400px; height: 220px; overflow: hidden;">
                        <el-carousel :interval="3000" id="count1" class="count clearfix" arrow="always"
                            indicator-position="none">
                            <el-carousel-item v-for="ite in props.ProductInfo.recommProductList">
                                <div v-for="(i, index) in ite" :key="index" class="infoDiv">
                                    <a :href="i.productUrl" class="img_wrap">
                                        <img :alt="i.productname" :src="i.picPath">
                                    </a>
                                    <p class="qh_name">
                                        <a :title="i.productname" :href="i.productUrl">{{ i.productname }}</a>
                                    </p>
                                    <span class="qh_price">{{ i.productPriceStr }} <i> {{ i.productUnit }}</i></span>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.details-content-otp {
    margin-top: 30px;
    clear: both;
    flex-direction: column;
}

.details-content-otp-h3 {
    background: #f8f8f8;
    height: 45px;
    line-height: 45px;
    text-indent: 15px;
    font-size: 16px;
    font-weight: normal;
    width: 1440px;
    margin: 0 auto;
}
.wc1200{
    width:1400px;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}

.wrapBox {
    position: relative;
    margin: 0 auto;
}

.rowE .count li {
    margin-right: 30px;
    width: 150px;
    height: 220px;
}

.rowE .count .img_wrap {
    width: 150px;
}

.warp-pic-list .img_wrap {
    display: block;
    font-size: 0;
    overflow: hidden;
}

.rowE .count .img_wrap img {
    width: 150px;
    height: 150px;
}

.qh_price {
    color: #1da1f2;
    font-size: 18px;
}
.qh_price i {
    color: #888888;
    font-size: 14px;
}
</style>
<style lang="less">
// 轮播图
#wrapBox1 {

    .el-carousel__arrow--left,
    .el-carousel__arrow--right {
        position: absolute;
        height: 55px;
        width: 35px;
        cursor: pointer;
        background-color: #000;
        color: #fff;
        text-align: center;
        top: calc(50% - 30px);
        border-radius: 0;

        .el-icon {
            width: 32px;
        }

        svg {
            width: 55px;
            height: 35px;
            // padding-right: 10px;
        }
    }

    .el-carousel__arrow--right {
        right: 10px;
    }

    .el-carousel__arrow--left {
        left: 0;
    }

    .infoDiv {
        width: 150px;
        height: 220px;
        margin: 0 20px;
        .qh_name a{
            width: 150px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
    }

    .el-carousel__item {
        display: flex;
        padding-left: 30px;
    }
}
</style>