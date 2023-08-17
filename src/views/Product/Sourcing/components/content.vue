<script setup lang="ts">
import { ref } from 'vue'
// import PicZoom from '@/components/picZoom/index.vue'
// 自己开发一套npm 用导入方式替换了子文件，源码保留
import PicZoom from 'vue3-piczoom'

const props = defineProps(['handleStartOrder', 'ProductInfo'])
const emit = defineEmits(['select'])
const handleStartOrder = () => {
    props.handleStartOrder()
}
const selectList = ref([])
const selectList1 = ref([])

// 鼠标移过获取高亮照片
const handleEnter = (e: any) => {
    if (e.target.src) {
        props.ProductInfo.picPathAll = e.target.src
        const list = e.target.parentElement.parentElement.children
        for (let i of list) {
            i.removeAttribute("class", 'current-active')
        }
        e.target.parentElement.setAttribute("class", 'current-active')
    }
}
const handleSendMsg = (id: number) => {
    return decodeURIComponent(`https://www.ecvv.com/sendMsg/sendMsg.html?chkIDs=P|${id}`)
}
const bindCheckBox = () => {
    if (selectList.value.length > 1) {
        selectList.value.splice(0, 1)
    }
    emit('select',selectList.value,selectList1.value)
}
const bindCheckBox1 = () => {
    emit('select',selectList.value,selectList1.value)
}


</script>
<template>
    <!-- 面包屑 -->
    <section class="details-content-navigation auto-w" style="justify-content:flex-start ;">
        <p class="details-content-navigation-l" v-for="(i, index) in props.ProductInfo.getNavigationMsg" :key="index">
            <a :href="i.href">{{ i.text }}</a>&nbsp;&nbsp;<em>&gt;</em>
        </p>
    </section>
    <!-- 详情 -->
    <section class="details-content-spc auto-w">
        <div class="details-content-spc-l">
            <div class="spc-box">
                <div class="spec-scroll">
                    <div class="items">
                        <ul id="uProductImgs" @mouseover="(e) => handleEnter(e)">
                            <li v-for="(i, index) in props.ProductInfo.picPathAllList" :key="index"
                                :class="index === 0 ? 'current-active' : ''">
                                <img alt="ECVV Miniature Circuit Breaker TGB1N-125 2PTGB1N-1252P-D-80A 6KA TENGEN MCB"
                                    :bigpic="i" :src="i">
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="preview" class="spec-preview">
                    <div class="spec-preview-div" style="margin: 0px auto; width: 550px; height: 550px;">
                        <pic-zoom :url="props.ProductInfo.picPathAll" :scroll="true"></pic-zoom>
                    </div>
                </div>
                <p class="rol-z">Roll over image to zoom in</p>
            </div>
        </div>
        <div class="details-content-spc-r">
            <h1 class="details-content-spc-title spc-width-active" id="hEcvvProductName">{{ props.ProductInfo.productName }}
            </h1>
            <p class="details-content-spc-p spc-width-active">
                ECVV China Sourcing Agent will assess the reputation and supply ability of the factory and conduct field
                trips to select the high-quality Chinese factories for buyers.
            </p>
            <p class="details-content-spc-price spc-width-active">
                <span class="price-tt">FOB Price:</span>
                <span class="price-sc">{{ props.ProductInfo.priceUnit }} <span id="spnProductSltPrice">{{
                    props.ProductInfo.productPrice }}</span></span>
                <span class="price-cm" id="spnProductUnit">/ {{ props.ProductInfo.productUnit }}</span>
            </p>
            <p class="details-content-spc-dm spc-width-active">
                <span>Final price determined by purchase quantity.</span>
                <a @click="handleStartOrder" id="GetOrder" rel="nofollow">Get Latest Price &gt;&gt;</a>
            </p>

            <div class="details-content-spc-sku" id="dvSkuDetail">
                <template v-if="props.ProductInfo.ifSku">
                    <dl class="p-property-item" v-for="(i, index) in props.ProductInfo.skuInfo" :key="index">
                        <dt class="p-item-title">
                            {{ i.title }}
                        </dt>
                        <dd class="p-item-main sku-attr-list util-clearfix" v-for="(ite, ind) in i.content">
                            <template v-if="ite.type === 0">
                                <el-checkbox-group v-model="selectList" @change="bindCheckBox" >
                                    <el-checkbox :label="ite.sku" :key="ind">
                                        <a data-role="sku" :data-sku-id="ite.sku">
                                            <img :src="ite.imgPath" :title="ite.imgTitle" :bigpic="ite.imgPath">
                                            {{ ite.imgTitle }}
                                        </a>
                                    </el-checkbox>
                                </el-checkbox-group>
                            </template>
                            <template v-else-if="ite.type === 1">
                                <el-checkbox-group v-model="selectList1" @change="bindCheckBox1">
                                    <el-checkbox-button  :key="ind" :label="ite.sku">
                                        <a data-role="sku" :data-sku-id="ite.sku">
                                            {{ ite.text }}
                                        </a>
                                    </el-checkbox-button>
                                </el-checkbox-group>
                            </template>
                            <!-- <div data-role="msg-error" class="msg-error sku-msg-error">
                                {{ i.errorMsg }}
                            </div> -->
                        </dd>
                    </dl>

                </template>
            </div>

            <div class="details-content-smq">
                <p class="spc-width-active spc-mt5">
                    <span class="smq-span1">
                        Supply Ability:
                    </span>

                    <span id="spnSupplyAbility" class="smq-span2">{{ props.ProductInfo.supplyAbility }}</span>
                </p>
                <p class="spc-width-active spc-mt5">
                    <span class="smq-span1">
                        MOQ:
                    </span>
                    <span id="spnMOQ" class="smq-span2">
                        {{ props.ProductInfo.minOrder }} {{ props.ProductInfo.minorderUnit }}
                    </span>
                </p>
                <p class="spc-width-active">
                    <span class="smq-span1" style="font-size: 18px;"> In Stock </span>
                    <span class="smq-span2"></span>
                </p>
                <p class="spc-width-active">
                    <span class="smq-span1">
                        Delivery Time:
                    </span>
                    <span class="smq-span2">1 day delivery in China</span>
                </p>
            </div>
            <div class="details-content-sample">
                <!--sample-y-->
                <div class="details-content-sample-y">
                    <a class="pus-now" @click="handleStartOrder" rel="nofollow">
                        Start Order
                    </a>
                    <a class="get-sample" href="javascript:void(0)" rel="nofollow">
                        Get Sample
                    </a>
                </div>
                <!--sample-n-->
                <div class="details-content-sample-n" id="PusOrder">
                    <a class="pus-now-n" :href="handleSendMsg(props.ProductInfo.productID)" rel="nofollow">
                        Inquiry Now
                    </a>
                    <a class="pus-now-n1" @click="handleStartOrder" rel="nofollow">
                        Start Order
                    </a>
                </div>
                <div class="details-content-sample-n" id="PusOrder">
                    <a class="pus-now" href="//www.ecvv.com/company/linglong/index.html" rel="nofollow">
                        <img src="//eresource.ecvv.com/PC_Ecvv/images/company-img/st-shop.png">
                        Visit Showroom
                    </a>
                </div>
            </div>

            <div class="details-content-bt spc-width-active">
                <p>
                    <span class="details-content-bt-span1">
                        Guarantee:
                    </span>
                    <span class="details-content-bt-spans">
                        Supply by ECVV, ensure product quality and provide logistics service.
                    </span>
                </p>
                <p>
                    <span class="details-content-bt-span1">
                        Payment:
                    </span>
                    <span class="details-content-bt-spanb">
                        Bank transfer
                    </span>
                    <span>
                        <img src="//eresource.ecvv.com/PC_Ecvv/images/company-img/UnionPay.png">
                    </span>
                </p>
                <p class="thi-p">Third party financial regulators will be involved in the transaction process.</p>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.auto-w {
    width: 1440px;
    margin: 0 auto;
}

.details-content-navigation {
    border-bottom: 1px solid #f2f3f7;
}

.details-content-spc {
    letter-spacing: -4px;
    min-height: 640px;
    display: flex;
    justify-content: space-around;
}

// 左边图片样式
.details-content-spc-l {
    padding-top: 20px;
    letter-spacing: 0;
    width: 610px;
}

.spec-scroll .items {
    width: 68px;
    position: absolute;
}

#uProductImgs {
    padding: 0;
    display: flex;
    flex-direction: column;

    li {
        width: 64px;
        margin-bottom: 10px;
    }
}

.spec-scroll .items ul li img {
    border: 1px solid #CCC;
    padding: 2px;
    width: 40px;
    height: 40px;
}

.spec-scroll .items ul li.current-active img {
    border: 2px solid #FF6600;
    padding: 1px;
}

.spec-preview {
    width: 550px;
    height: 550px;
    margin-left: 60px;
}

.jqzoom {
    border: none;
    position: absolute;
    padding: 0px;
    margin: 0px;
    display: block;
}

.jqzoom img {
    max-width: 550px;
    max-height: 550px;
    display: block;
}

.rol-z {
    text-indent: 60px;
    text-align: center;
    margin-top: 12px;
}

// 右边文本样式
.details-content-spc-r {
    width: 830px;
    letter-spacing: 0;
    padding-top: 20px;
    border-left: 1px solid #f2f3f7;
}

.details-content-spc-title {
    font-size: 21px;
    color: #333;
}

.details-content-spc-p {
    color: #ff6d18;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eeeeee;
    line-height: 18px;
    margin-bottom: 10px;
}

.spc-width-active {
    width: 96%;
    margin-left: 2%;
}

.details-content-spc-dm {
    padding-left: 97px;
}

.details-content-spc-sku {
    padding-left: 2%;
    background: #f8f8f8;
    padding-top: 20px;
    padding-bottom: 5px;
    margin-top: 15px;
}

.details-content-smq {
    padding-top: 15px;
}

.details-content-sample {
    width: 96%;
    margin: 25px auto;
}

.details-content-unionpay {
    padding-bottom: 15px;
    border-bottom: 1px solid #eeeeee;
}

.details-content-bt {
    padding-top: 15px;
    padding-bottom: 20px;
}

.spc-width-active {
    width: 96%;
    margin-left: 2%;
}

.details-content-spc-price .price-tt {
    padding-right: 27px;
    color: #555;
    padding-top: 7px;
    float: left;
    font-size: 14px;
}

.details-content-spc-price .price-sc {
    color: #1da1f2;
    font-size: 24px;
}

.details-content-spc-price .price-cm {
    color: #888888;
}

.details-content-spc-dm span {
    color: #888;
}

.details-content-spc-dm a {
    color: #1da1f2;
    cursor: pointer;
}

.spc-mt5 {
    margin-bottom: 5px;
}

.spc-width-active {
    width: 96%;
    margin-left: 2%;
}

.details-content-sample-y {
    display: none;
}

.details-content-sample-y .pus-now {
    background: #4eac10;
    color: #ffffff;
    width: 70%;
    font-size: 30px;
}

.details-content-sample-y .get-sample {
    font-size: 18px;
    color: #4eac10;
    width: 25%;
    float: right;
}

.details-content-sample-n .pus-now-n {
    width: 48%;
    background: #4eac10;
    color: #ffffff;
    font-size: 30px;
}

.details-content-sample-n .pus-now-n1 {
    width: 48%;
    margin-left: 10px;
    background: #fff;
    color: #000;
    font-size: 30px;
    border: 1px solid #000;
    cursor: pointer;
}

.details-content-sample-n .pus-now {
    width: 98%;
    margin-top: 10px;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    font-size: 30px;
}

.details-content-sample-y a,
.details-content-sample-n a {
    display: inline-block;
    height: 58px;
    line-height: 58px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #4eac10;
    vertical-align: top;
}

.details-content-bt-spanb {
    background: url(//eresource.ecvv.com/PC_Ecvv/images/company-img/card.png) center left no-repeat;
    text-indent: 38px;
    margin-right: 15px;
}

.details-content-unionpay p {
    text-indent: 35px;
    height: 30px;
    line-height: 30px;
}

.details-content-unionpay-p2 i {
    color: #1da1f2;
}

.details-content-bt p span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    color: #555;
}

.thi-p {
    color: #888888;
    padding-left: 10%;
    margin-top: 5px;
}

.details-content-smq .smq-span1 {
    color: #555;
    display: inline-block;
    width: 92.5px;
}

// sku style
.p-property-item {
    display: flex;
    margin-bottom: 10px;

    .p-item-title {
        width: 100px;
    }

    .sku-attr-list {
        display: flex;

        .el-checkbox-button__inner {
            padding: 0;
        }

        .el-checkbox__label a img {
            width: 40px;
            height: 40px;
        }
    }
}
</style>