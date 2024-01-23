<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineAsyncComponent,ref,watch } from 'vue'
import { Session } from "@/utils/storage";
import '@/theme/template.less'

const props = defineProps(['handleStartOrder','ProductInfo',"info"])
const Form = defineAsyncComponent(()=>import("./formInquire.vue"))
const ifMore = ref(false)
const service = ref(true)
const cuarantee = ref(true)
const router = useRouter();
const style = ref({})
const companyInfo = Session.get('companyInfo')

const primaryColor = ref("#0173a9");
const primaryRgbaColor = primaryColor.value
const companyStyleType = (key) => {
  switch (key) {
    case 1:
      primaryColor.value = '#0173a9'
      break;
    case 2:
      primaryColor.value = '#ed9706'
      break;
    case 3:
      primaryColor.value = '#79C547'
      break;
    case 4:
      primaryColor.value = '#d02460'
      break;
    case 5:
      primaryColor.value = '#ad0101'
      break;
    case 6:
      primaryColor.value = '#3e5e87'
      break;
    case 7:
      primaryColor.value = '#3b3c3e'
      break;
    case 8:
      primaryColor.value = '#2469aa'
      break;
    case 9:
      primaryColor.value = '#64bbd7'
      break;
  }
};
companyStyleType(companyInfo.webModel)
// 切换菜单
const handleChange = (e:any) => {
    const list = e.target.parentElement.children
    
    for (let i of list) {
        i.removeAttribute("class", 'tabli-active')
    }
    e.target.setAttribute("class", 'tabli-active')
    // 判断是否为more
    if (e.target.id === 'more-tabli') {
        ifMore.value = true;
    } else {
        ifMore.value = false;
    }
    if (e.target.id === 'service') {
        service.value = false
    } else {
        service.value = true
    }
    if (e.target.id === 'cuarantee') {
        service.value = false
        cuarantee.value = false
    } else {
        cuarantee.value = true
    }
}
// 点击more
const handleClick = (e:any) => {
    ifMore.value = true;
    const list = e.target.parentElement.parentElement.parentElement.children[0].children[0].children
    for (let i of list) {
        i.removeAttribute("class", 'tabli-active')
    }
    list[1].setAttribute("class", 'tabli-active')
}
// 判断是否置顶
const scroll = ref(false)
const scrollTop = ref(0)
window.addEventListener('scroll', () => {
    const top:any = document.getElementById("scroll")
    if(top.offsetTop !== 73){
        scrollTop.value = top.offsetTop
    }
    if (top.offsetTop <= document.documentElement.scrollTop && scroll.value === false ) {
        style.value = {
            position: 'fixed',
            top: '73px',
            width: '450px'
        }
        if(scrollTop.value >= document.documentElement.scrollTop){
            scroll.value = true
        }
    } 
    if ((scrollTop.value >= document.documentElement.scrollTop && scroll.value === true ) ||(scrollTop.value >= document.documentElement.scrollTop && scroll.value === false && top.offsetTop > document.documentElement.scrollTop)  ) {
        style.value = {
            position: 'inherit',
        }        
        scroll.value = false
    }
})
const handleSendMsg = (id) => {
    Session.set('sendCompanyInfo',{
      product:true
    })
      let routeUrl = router.resolve({ path: `/sendMsg` });
      window.open(routeUrl.href);
};

</script>
<template>
    <section class="details-content-all auto-w">
        <div class="details-content-all-l">
            <div class="details-content-all-store bd-st-c">
                <h2 class="st-h3" id="hfStoreName">ECVV Circuit Breaker Sales Service Department</h2>
                <div class="details-content-all-store-box pd-st-15">
                    <div class="store-main">
                        <p class="main-prd">Main products:</p>
                        <p class="store-main-content" id="pfCategoryName">Miniature Circuit Breaker, Moulded Case Circuit
                            Breaker, Residual Current Circuit Breaker, ELCB, MCB, MCCB, RCCB</p>
                    </div>
                    <div class="details-content-sample-n" id="PusOrder">
                        <a class="pus-now-n" @click="handleSendMsg(props.ProductInfo.productID)" rel="nofollow">
                            Inquiry Now
                        </a>
                        <a class="pus-now-n1" @click="props.handleStartOrder" rel="nofollow">
                            Start Order
                        </a>
                    </div>

                    <a class="enter-store" href="//www.ecvv.com/company/linglong/index.html" id="afStoreUrl">
                        <img src="//eresource.ecvv.com/PC_Ecvv/images/company-img/st-shop.png">
                        <span>Visit Showroom</span>
                    </a>
                </div>
            </div>
            <!--customers-->
            <div class="details-content-all-customers bd-st-c">
                <h3 class="st-h2">
                    Customers who viewed this item also viewed
                </h3>
                <div class="imgList">
                    <div v-for="(i,index) in props.ProductInfo.productRecommendList" :key="index">
                        <a :href="i.productUrl" class="img_wrap">
                            <img :alt="i.productname" :src="i.picPath" border="0"></a>
                        <p class="qh_name">
                            <a :title="i.productname"
                            :href="i.productUrl">{{ i.productname }}</a></p>
                        <span class="qh_price">{{ i.productPriceStr }}<i> {{ i.productUnit }}</i></span>
                    </div>
                </div>
            </div>
            <div class="details-content-all-store bd-st-c" id="scroll" :style="style">
                <h2 class="st-h3" id="hfStoreName">ECVV Circuit Breaker Sales Service Department</h2>
                <div class="details-content-all-store-box pd-st-15">
                    <div class="store-main">
                        <p class="main-prd">Main products:</p>
                        <p class="store-main-content" id="pfCategoryName">Miniature Circuit Breaker, Moulded Case Circuit
                            Breaker, Residual Current Circuit Breaker, ELCB, MCB, MCCB, RCCB</p>
                    </div>
                    <div class="details-content-sample-n" id="PusOrder">
                        <a class="pus-now-n" @click="handleSendMsg(props.ProductInfo.productID)" rel="nofollow">
                            Inquiry Now
                        </a>
                        <a class="pus-now-n1" @click="props.handleStartOrder" rel="nofollow">
                            Start Order
                        </a>
                    </div>

                    <a class="enter-store" href="//www.ecvv.com/company/linglong/index.html" id="afStoreUrl">
                        <img src="//eresource.ecvv.com/PC_Ecvv/images/company-img/st-shop.png">
                        <span>Visit Showroom</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="details-content-all-r">
            <div class="details-r-tab-box">
                <ul id="details-r-tab" class="details-r-tab" @click="(e) => handleChange(e)">
                    <li class="tabli-active">
                        Product Description
                    </li>
                    <li id="more-tabli">
                        Parameter
                    </li>
                    <li id="service">
                        Service Introduction
                    </li>
                    <li id="cuarantee">
                        Guarantee
                    </li>
                </ul>
                <div>
                <div class="details-r-tab-r" id="PusOrder2">
                    <a @click="handleSendMsg(props.ProductInfo.productID)" rel="nofollow">
                        Inquiry Now
                    </a>
                </div>
                <div class="details-r-tab-r1" id="PusOrder2">
                    <a @click="props.handleStartOrder" rel="nofollow">
                        Start Order
                    </a>
                </div>
                </div>
                
            </div>
            <template v-if="service">
                <!--Parameter-more-->
                <template v-if="ifMore">
                    <div class="details-content-parameter" id="PrdMs1">
                        <table cellspacing="0" cellpadding="0" class="parameter-table">
                            <tbody id="tbFProductProty">
                                <tr v-for="(i,index ) in props.ProductInfo.productPropertyList" :key="index"  >
                                    <th><span>{{i.propertyName  }}</span></th>
                                    <td><span>{{ i.valueStr }}</span></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </template>
                <template v-else>
                    <!--Parameter-->
                    <div class="details-content-parameter" id="PrdMs0">
                        <table cellspacing="0" cellpadding="0" class="parameter-table">
                            <tbody id="tbProductProty">
                                <tr  v-for="(i,index ) in props.ProductInfo.productPropertyList" :key="index" >
                                    <th><span>{{i.propertyName  }}</span></th>
                                    <td><span>{{ i.valueStr }}</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="more-par">

                            <a @click="(e)=>handleClick(e)" rel="nofollow">More Parameter &gt;</a>
                        </p>
                        

                    </div>
                    <!--describe-->
                    <div class="details-content-describe" id="PrdMs2" >
                        <p v-html="props.ProductInfo.productDescription"> </p>
                    </div>
                </template>
            </template>
            <template v-if="cuarantee">
                <!--Service Introduction-->
                <div class="details-content-service" id="PrdMs3">
                    <h3 class="st-h3 mt30">
                        Service Process
                    </h3>
                    <img class="sev-pr-img" src="//eresource.ecvv.com/PC_Ecvv/images/company-img/process.jpg">
                    <div class="sev-more">
                        <a href="//safebuy.ecvv.com/" target="_blank">
                            Learn more &gt;
                        </a>
                    </div>
                </div>
            </template>
            <!--Service Guarantee-->
            <div class="details-content-cuarantee" id="PrdMs4">
                <h3 class="st-h3 mt30">
                    Service Guarantee
                </h3>
                <ul class="Guarantee-ul">
                    <li>
                        <div class="Guarantee-div1">
                            <img src="//eresource.ecvv.com/PC_Ecvv/images/guarantee1.png">
                        </div>
                        <div class="Guarantee-div2">
                            <h3>Free purchase service fee</h3>
                            <p>
                                Free purchase service fee: ECVV do not charge the Buyer a procurement
                                Service Fee for purchasing this product.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="Guarantee-div1">
                            <img src="//eresource.ecvv.com/PC_Ecvv/images/guarantee2.png">
                        </div>
                        <div class="Guarantee-div2">
                            <h3>ECVV Supply</h3>
                            <p>
                                Ensure product quality and payment security.Ensure the date of delivery, ensure logistics to
                                end destinations, provide custom clearance service.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="Guarantee-div1">
                            <img src="//eresource.ecvv.com/PC_Ecvv/images/guarantee3.png">
                        </div>
                        <div class="Guarantee-div2">
                            <h3>Product Quality Commitment</h3>
                            <p>
                                ECVV China Sourcing Agent will assess the reputation and supply ability of the factory and
                                conduct field trips to select the high-quality Chinese factories for buyers.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="Guarantee-div1">
                            <img src="//eresource.ecvv.com/PC_Ecvv/images/guarantee4.png">
                        </div>
                        <div class="Guarantee-div2">
                            <h3>Deposit Service Commitments</h3>
                            <p>
                                In order to improve the quality of service, ECVV will charge for a $ 100 deposit for the
                                agent purchasing order, and the deposit will be part of subsequent purchasing costs.
                            </p>
                            <p>
                                After paying a deposit, if the purchasing order is not completed because of unsatisfied ECVV
                                services, ECVV will refund your deposit.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <Form :title = "props.info" :style="{'--primaryColor': primaryColor,'--primaryRgbaColor':primaryRgbaColor}" />
        </div>
    </section>
</template>
<style scoped lang="less">
.details-content-all {
    margin: 0 auto;
    margin-top: 30px;
    clear: both;
    width: 78%;
    // padding:10px 11%;
    align-items: flex-start;
    background-color:#fff;
}

// 左边文档
.details-content-all-l {
    width: 450px;
    display: inline-block;
}

.bd-st-c {
    border: 1px solid #e9e9e9;
    margin-bottom: 20px;
}

.st-h3 {
    font-size: 16px;
    font-weight: normal;
    background: #f8f8f8;
    text-indent: 0px;
    height: auto;
    padding: 6px 15px;
    line-height: 21px;
}

.pd-st-15 {
    padding: 0 15px;
}

.store-main {
    margin-top: 10px;
}

.store-main-img {
    letter-spacing: -4px;
    margin-top: 10px;
    margin-bottom: 5px;
}

.store-phone {
    background: url('//eresource.ecvv.com/PC_Ecvv/images/company-img/phone.png') 0px -1px no-repeat;
    height: 30px;
    line-height: 30px;
    text-indent: 32px;
}

.enter-store {
    display: block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: #f8f8f8;
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #000;
    margin-bottom: 15px;
}

.store-main-content {
    word-break: break-all;
    line-height: 25px;
}

.store-main-img li {
    margin-right: 8px;
    display: inline-block;
    letter-spacing: 0px;
    margin-bottom: 5px;
}

.enter-store img {
    vertical-align: middle;
    margin-right: 5px;
    margin-top: -4px;
}

.enter-store span {
    font-size: 30px;
    color: #333;
}

.bd-st-c {
    border: 1px solid #e9e9e9;
    margin-bottom: 20px;
}

.st-h2 {
    font-size: 16px;
    font-weight: normal;
    background: #f8f8f8;
    text-indent: 15px;
    height: 45px;
    line-height: 45px;
}

.details-content-sample-y a,
.details-content-sample-n a {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #4eac10;
    vertical-align: top;
}

.details-content-sample-n .pus-now-n {
    width: 48%;
    background: #4eac10;
    color: #ffffff;
    font-size: 30px;
}

.details-content-sample-n .pus-now-n1 {
    width: 49%;
    margin-left: 10px;
    background: #f8f8f8;
    color: #000;
    font-size: 30px;
    border: 1px solid #000;
    cursor: pointer;
}
 .img_wrap {
    display: block;
    font-size: 0;
    overflow: hidden;
    width: 150px;
    height: 150px;
}
.qh_name a, .qh_name2 a {
    color: #333;
    display: -webkit-inline-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -ms-grid;
}
.qh_price {
    color: #1da1f2;
    font-size: 18px;
}
.img_wrap img {
    width: 150px;
    height: 150px;
}
.imgList{
    width:448px;
    padding:10px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:space-around;
>div{
    width:200px;
    height:230px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
}
.qh_price i {
    color: #888888;
    font-size: 14px;
}
// 右边详情
.details-content-all-r {
    width: calc(100% - 500px);
    display: inline-block;
    float: right;
}

.details-r-tab-box {
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;    
    margin-bottom: 20px;
}

.details-r-tab {
    padding: 0;
    display:inline-block;
    border: 1px solid #e8e8e8;
    background: #f8f8f8;
}

.details-r-tab-r1 {
   display:inline-block;
    height: 40px;
    line-height: 40px;
    width: 120px;
    text-align: center;
    background: #f8f8f8;
    border: 1px solid #000;
    border-radius: 5px;
}

.details-r-tab-r {
    display:inline-block;
    height: 40px;
    line-height: 40px;
    width: 120px;
    text-align: center;
    background: #4eac10;
    border-radius: 5px;
    margin-right:20px;
}
#PrdMs2{
    /deep/ img{
        width:100%;
    }
}
#PrdMs3{
    /deep/ img{
        width:100%;
    }
}
.sku-box {
    display: block;
    right: -1px;
    position: absolute;
    font-size: 12px;
    width: 440px;
    border: 1px solid #eaeaea;
    padding: 30px;
    background: #fff;
    border-top: none;
}

.details-r-tab li.tabli-active {
    border-top: 2px solid #1da1f2;
    background: #fff;
    color: #1da1f2;
}

.details-r-tab li {
    padding: 12px 15px;
    display: inline-block;
    letter-spacing: 0;
    margin-top: -1px;
    font-size: 16px;
    cursor: pointer;
}

.details-r-tab-r a {
    display: block;
    color: #fff;
    font-size: 18px;
}

.details-r-tab-r1 a {
    display: block;
    font-size: 18px;
    cursor: pointer;
}

.sku-box-img {
    position: absolute;
    right: 25px;
    top: -15px;
}

.spc-width-active2 {
    border-bottom: 1px dashed #e2e2e2;
    padding-bottom: 20px;
}

.spc-width-active {
    width: 96%;
    margin-left: 2%;
}

.details-content-spc-sku2 {
    background: #fff;
    margin-top: 5px;
}

.details-content-spc-sku {
    padding-left: 2%;
    background: #f8f8f8;
    padding-top: 20px;
    padding-bottom: 5px;
    margin-top: 15px;
}

.del-bottom-box {
    margin-top: 20px;
}

.sku-box .details-content-spc-price .price-tt {
    padding-right: 22px;
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

.subsku,
.delsku {
    display: inline-block;
    height: 35px;
    line-height: 33px;
    width: 120px;
    font-size: 16px;
    text-align: center;
}

table {
    margin-bottom: 20px;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;
}

.parameter-table tr:first-of-type th {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.parameter-table th {
    background: #f8f8f8;
    width: 320px;
    text-align: center;
    font-weight: normal;
}

.parameter-table th span {
    display: block;
    width: 90%;
    padding: 15px 0;
    margin: 0 auto;
    border-bottom: 1px solid #eeeeee;
}

.parameter-table td {
    padding-left: 30px;
}

.more-par {
    text-align: right;
    cursor: pointer;
}

.more-par a {
    color: #1da1f2;
}

.st-h3 {
    font-size: 16px;
    font-weight: normal;
    background: #f8f8f8;
    text-indent: 0px;
    height: auto;
    padding: 6px 15px;
    line-height: 21px;
    margin-bottom: 20px;
}

.sev-pr-img {
    margin-top: 30px;
    margin-bottom: 60px;
}

.sev-more {
    text-align: center;
    margin-bottom: 20px;
}

.sev-more a {
    font-size: 18px;
    color: #1da1f2;
    text-decoration: underline;
}

.Guarantee-ul li {
    letter-spacing: -4px;
    margin-bottom: 20px;
}

.Guarantee-ul li .Guarantee-div1 {
    display: inline-block;
    letter-spacing: 0px;
}

.Guarantee-ul li .Guarantee-div2 {
    display: inline-block;
    letter-spacing: 0px;
    width: 90%;
    vertical-align: top;
}

.Guarantee-ul li .Guarantee-div2 h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 6px;
}
</style>