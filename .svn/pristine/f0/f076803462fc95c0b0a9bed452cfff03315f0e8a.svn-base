<script setup lang="ts">
// 组件化Ul 定义name，style，dom元素,接收props值
const props = defineProps(['item'])

</script>

<template>
    <!-- typeThree props注释在ts中-->
    <section class="feature" :style="props.item.styleAll">
        <h3 class="section-h3">
            {{ props.item.name }}
        </h3>
        <div class="box bg">
            <template v-if="props.item.ifHref">
                <div class="more">
                    <a :href="props.item.isHref" target="_blank">
                        {{ props.item.titleHref }}
                    </a>
                </div>
            </template>
            <div class="sP-srcollMain" id="fpsrcollMain">
                <div class="sP-srcollPos" id="fpsrcollpos">
                    <el-carousel :interval="3000" arrow="always" :autoplay="props.item.autoplay" indicator-position="none">
                        <el-carousel-item v-for="ite in props.item.contentObj">
                            <div v-for="i in ite">
                                <div class="sP-Boxli cc-120" :style="props.item.styleImg">
                                    <div class="ProImg">
                                        <a target="_blank" :href="i.href" :title="i.title">
                                            <img :alt="i.Title" :src="i.imgSrc" :style="props.item.styleImg"></a>
                                    </div>
                                    <div class="ProInf">
                                        <a target="_blank" :href="i.href" :title="i.title">
                                            <span :class="props.item.ifPropPrice ? 'nowSpace' : ''"
                                                :style="props.item.ifPropPrice ? '' : props.item.style">{{ i.title }}</span>
                                        </a>
                                    </div>
                                    <template v-if="props.item.ifPropPrice">
                                        <div class="ProPrice"><span>Price:</span><span class="ms">{{ i.proPrice }}</span>
                                        </div>
                                        <div class="ProOrder"><span>Min. Order:</span><span class="ms">{{ i.proOrder
                                        }}</span></div>
                                    </template>
                                    <template v-else>
                                        <div class="featureCompanyName"><span>{{ i.companyName }}</span></div>
                                    </template>
                                </div>
                            </div>
                            <div class="sP-Boxli" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.feature {
    display: flex;
    max-width: 1440px;
    flex-direction: column;
}

.section-h3 {
    font-size: 24px;
    color: #333333;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 25px;
    font-weight: 600;
}

.more {
    position: absolute;
    right: 20px;
    top: 15px;

    a {
        color: blue;
    }
}

.box {
    width: 100%;
    position: relative;
    padding: 40px 0;
    border-top: 3px solid #0b4ab3;
    background-color: #fff;
}

.sP-srcollMain {
    margin: 20px auto 0 auto;
    position: relative;
    width: 96%;
    height: 270px;
    overflow: hidden;
    display: block;
}

.sP-srcollPos {
    position: absolute;
    left: 0px;
    top: 0px;
    width: auto;
    height: 270px;
    width: 100%;
}

.sP-Boxli {
    height: 270px;
    float: left;
    margin: 0 31px;
    width: 200px;
}

.ProImg {
    text-align: center;
    width: 100%;
    overflow: hidden;
}

.ProPrice,
.ProOrder {
    font-size: 12px;
    color: #ff6d18;
}

.ProPrice span.ms,
.ProOrder span.ms {
    color: #888888;
    padding-left: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.cc-120 img {
    width: 200px;
    height: 200px;
    transition: All 0.3s ease;
    -webkit-transition: All 0.3s ease;
    -moz-transition: All 0.3s ease;
    -o-transition: All 0.3s ease;
    overflow: hidden;
}

.cc-120 img:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    -ms-transform: scale(1.05);
}

.ProInf {
    margin: 6px 0 6px;
    width: 100%;
    font-weight: bold;
}

.featureCompanyName {
    padding-left: 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.featureCompanyName span {
    font-size: 12px;
    color: #888888;
}

.nowSpace:hover,
.more a:hover {
    color: #ff6d18;
}

.nowSpace {
    color: #333;
    font-size: 14px;
    font-weight: normal;
    padding-left: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
</style>
<style lang="scss">
/* 轮播图css */
#fpsrcollpos {
    position: relative;
}

#fpsrcollpos .el-carousel {
    height: 100%;
}

#fpsrcollpos .el-carousel .el-carousel__container {
    display: flex;
    height: 100%;
    padding-left: 40px;

    >div {
        overflow: hidden;
    }

    .el-carousel__item {
        animation-timing-function: ease-in;
        display: flex;
        height: 100%;
        width: 100%;
    }

    .el-carousel__arrow {
        padding: 10px;
        width: 30px;
        height: 27px;
        display: block;
        top: calc(50% - 23px);
        cursor: pointer;
        z-index: 9;
        position: absolute;
        border: none;

        i {
            display: none;
        }
    }

    .el-carousel__arrow--left {
        background: url('@/assets/images/sP-Prev.png') center center no-repeat;
        left: 10px;
    }

    .el-carousel__arrow--right {
        background: url('@/assets/images/sP-Next.png') center center no-repeat;
        right: 10px;
    }

    .el-carousel__arrow--left:hover {
        background: url("@/assets/images/sP-PrevHv.png") center center no-repeat;
    }

    .el-carousel__arrow--right:hover {
        background: url('@/assets/images/sP-NextHv.png') center center no-repeat;
    }

    .is-active {
        overflow: visible;
    }
}</style>