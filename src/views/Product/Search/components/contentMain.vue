<script setup lang="ts">
import { ref, watch } from 'vue'
import { getSearchList, getRelatedKeyWord } from '@/api/modular/search'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps(['contentMain'])

const showStyle = ref({
    height: '65px'
})
const ifShow = ref(false)
const popDiv = ref(false)
const sourcinghref = ref(`https://www.ecvv.com/sourcing/search.html?kw=${router.options.history.location.split('=')[1]}`)
const manufacturershref = ref(`https://www.ecvv.com/manufacturers/search.html?kw=${router.options.history.location.split('=')[1]}`)


const handleIfShow = (val: boolean) => {
    ifShow.value = val
    if (val) {
        showStyle.value = {
            height: 'auto'
        }
    } else {
        showStyle.value = {
            height: '65px'
        }
    }
}
const list = ref<ListParamsType>([])
const alsoSearched = ref<AlsoSearchedType>([])
const num = ref<number>(0)
const tableParams = ref({
    pageIndex: 1,
    pageSize: 30,
    count: 0,
});
const params = ref<any>({
    kw: router.options.history.location.split('=')[1]
})
// 改变页面容量
const handleSizeChange = (val: number) => {
    tableParams.value.pageSize = val;
    handleQuery();
};

// 改变页码序号
const handleCurrentChange = (val: number) => {
    tableParams.value.pageIndex = val;
    handleQuery();
};
// 获取搜索信息列表
const handleQuery = async () => {
    if (props.contentMain.cid) {
        params.value.cid = props.contentMain.cid
    }
    await getSearchList(Object.assign(params.value, tableParams.value)).then(res => {
        if (res.data.type === 'success') {
            list.value = res.data.result.list
            num.value = res.data.result.count
            tableParams.value.count = res.data.result.count
        }
    })
}

// 获取相关关键字
const handleKeyWord = async () => {
    await getRelatedKeyWord(Object.assign({ keyword: router.options.history.location.split('=')[1] })).then(res => {
        if (res.data.type === 'success') {
            const list = ref([])
            res.data.result.map((item: any) => {
                list.value.push(item)
                if (list.value.length % 5 === 0) {
                    alsoSearched.value.push(list.value)
                    list.value = []
                }
            })
        }
    })
}
handleKeyWord()
handleQuery()
const handleShowChange = (val: boolean) => {
    popDiv.value = val
}

// ecvv 筛选
const SourcingAgentCli = () => {
    if (document.getElementById('sourcingAgent')?.checked) {
        params.value.sourcingAgent = 1
    } else {
        delete params.value.sourcingAgent
    }
}
// 跳转product详情
const handleProduct = (item?:string) => {
    router.push({path:`/product-sourcing?pid`,query:{pid:item}})
}
// 监听cid
watch(
    () => props.contentMain.cid,
    (val) => {
        handleQuery()
    }
)
// 监听ecvv筛选
watch(
    () => params.value.sourcingAgent,
    (val) => {
        handleQuery()
    }
)
// 监听cid
watch(
    () => props.contentMain.UrlPVMsg,
    (val) => {
        params.value.UrlPVMsg = props.contentMain.UrlPVMsg
        handleQuery()
    }
)
</script>
<template>
    <div class="col-center-main">
        <!-- tabbar -->
        <div class="tab-list">
            <ul class="tab-list-nav">
                <li class="active"><a href="javascript: void(0); " rel="nofollow"> General Search</a></li>
                <li><a :href="sourcinghref" rel="nofollow"> Sourcing Services</a></li>
                <li><a :href="manufacturershref" rel="nofollow"> Manufacturers</a></li>
            </ul>

            <div style="color: #ee6600">
                <!--SourcingAgentCli()执行时route加入参数 sourcingagent=1 反之删除 -->
                <label><input id="sourcingAgent" name="sourcingAgent" type="checkbox" value="999"
                        @click="SourcingAgentCli"><span style="padding-left: 3px;">ECVV Sourcing Agent</span></label>
            </div>
        </div>
        <!-- found num -->
        <div id="teamIntroduction"> Found <span style="color: #ee6600;">{{ num }}</span> {{ props.contentMain.code }}
            Sourcing
            Services, {{ props.contentMain.code }} Manufacturersand Sourcing Agent. </div>
        <!-- contentList -->
        <div class="list-items">
            <div class="clear">
            </div>
            <div class="list-item" v-for="(item, index ) in list" :key="index">
                <div class="item-main clearfix">
                    <div class="list-item-inquiry">
                    </div>
                    <div class="list-item-pic">
                        <a target="_blank" :title="item.title" @click="handleProduct(item.productID)">
                            <img :src="item.src" :alt="item.title"></a>
                    </div>
                    <div class="list-item-right">
                        <div class="attr">
                            <h2>
                                <a :title="item.title" target="_blank" @click="handleProduct(item.productID)">
                                    {{ item.title }}</a>
                            </h2>
                            <div class="busi-attr">
                                <template v-if="item.ifPrice">
                                    <p><span class="attrName">FOB Price: </span><span class="unitStyle">{{ item.price
                                    }}</span>
                                        <span class="unitStyle">/{{ item.pieceOrSet }}</span>
                                    </p>
                                </template>
                                <template v-if="item.ifOrder">
                                    <p style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"><span
                                            class="attrName">Min. Order: </span>{{ item.order }}</p>
                                </template>
                                <template v-if="item.ifAbility">
                                    <p><span class="attrName">Supply Ability: </span>{{ item.ability }}</p>
                                </template>
                            </div>
                            <div class="busi-ai" v-for="(i, ind) in item.list" :key="ind">
                                {{ i.text }}
                            </div>
                        </div>
                        <div class="supplier">
                            <div class="atb-wrap">
                                <a id="addBasket4344445" class="atb-jia" rel="nofollow">
                                    <span class="ls-main-ico"></span>
                                    Add to Basket
                                </a>
                            </div>
                            <p>
                                <a :href="item.fromHref" :title="item.from" target="_blank" class="company">
                                    {{ item.from }}
                                </a>
                            </p>
                            <p>
                                <a title="Manufacturer" target="_blank" rel="nofollow" class="card">Manufacturer</a>
                            </p>
                            <p>
                                <a :href="item.fromHref" :title="item.from" target="_blank" rel="nofollow"
                                    class="card">Contact Details</a> <span class="location">
                                    China(Mainland)<img class="flag" src="https://www.ecvv.com/img/cn.gif"></span>
                            </p>
                            <span class="icons">
                                <template v-if="item.ifIcon">
                                    <!-- 预留位，大概有几种分类 -->
                                    <a :href="item.iconHref" rel="nofollow" class="ls-main-ico Licelogo icon-item"
                                        target="_blank"></a>
                                </template>
                            </span>
                            <div class="contact">
                                <a href="https://www.ecvv.com/product/4344445.html" rel="nofollow" class="contact-supplier"
                                    style="cursor: pointer;" target="_blank">
                                    <span class="spirits-small s22"></span>Inquiry Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- pagination -->
        <el-pagination id="pagination" v-model:currentPage="tableParams.pageIndex" v-model:page-size="tableParams.pageSize"
            :total="tableParams.count" :page-sizes="[30, 50, 100, 200]" layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />

        <!-- message -->
        <div class="queDiv">
            <span class="findTipTitle">Did you find what you were looking for ? </span>
            <br>
            <a class="btnYesNo btnYesNo_Defult" @click="handleShowChange(false)">Yes</a>
            <a class="btnYesNo btnYesNo_Defult" @click="handleShowChange(true)">No</a>

            <template v-if="popDiv">
                <div id="popDiv" class="mydiv">
                    <p class="findTipTitle">What problems did you have with the search experience ? </p>
                    <input type="checkbox" name="feedbackitem" value="1"><span>I can't filter search results effectively.
                    </span>
                    <br> <input type="checkbox" name="feedbackitem" value="2"><span>Search results do not match search
                        terms.
                    </span>
                    <br><input type="checkbox" name="feedbackitem" value="3"><span>Something is broken. </span>
                    <br><input type="checkbox" name="feedbackitem" value="4"><span>I don't understand the meaning of
                        Manufacturer search and Sourcing Service search </span>
                    <div>
                        <p class="findTipTitle">Do you think the two kinds of search, manufacturer and Sourcing Service,can
                            help
                            you find the right supplier faster </p>
                        <input type="radio" name="feedbackradioitem" id="yes1" value="1"><label
                            for="yes1"><span>Yes</span></label>
                        <input type="radio" name="feedbackradioitem" id="no2" value="2"><label
                            for="no2"><span>No</span></label>
                    </div>
                    <div> Please explain your problem here:
                        <input style=" width: 300px; height: 50px" type="text" id="txtproblem" value="">
                    </div>

                    <div><button type="button" class="subdis" onclick="ajax_submit(3,params.value.kw)" disabled>Submit</button>
                    </div>


                </div>
            </template>
        </div>

        <!-- also searched -->
        <div class="inlink-top">

            <div class="inlink-top-cont inlink-top-cont2" :style="showStyle">
                <span class="inlink-top-cont-title">Customer who searched qq also searched: </span>
                <br>
                <table width="100%">
                    <tbody>
                        <tr v-for="(item, index) in alsoSearched" :key="index">
                            <td v-for="(ite, ind) in item" :key="ind">
                                <a :href="ite.href">{{ ite.text }}</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="inlink-top-more">
                <template v-if="ifShow">
                    <a @click="handleIfShow(false)" rel="nofollow" id="crosslink-top-more-btn"
                        class="shang-ico">Less<span></span></a>
                </template>
                <template v-else>
                    <a @click="handleIfShow(true)" rel="nofollow" id="crosslink-top-more-btn"
                        class="xia-ico">More<span></span></a>
                </template>
            </div>
        </div>
        <!-- qq -->
        <div class="inlink-left inlink-left2">
            <div class="block">
                Top Suppliers for
                {{ props.contentMain.code }}
                <table width="100%">
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- product alert -->
        <div class="search-service">
            <ul>
                <link rel="Stylesheet" href="https://www.ecvv.com/NewCompany/Css/product-detail.css?t=202209231114">
                <li>

                    <p class="ser-tips">
                        Want the latest &amp; hottest Products Info. for "{{ props.contentMain.code }}"?
                    </p>
                    <h3 class="ser-tips-h3">Product Alert</h3>
                    <p>
                        Subscribe to your interested Product Alert and you will get emails with the lastest
                        and hottest Product Info. periodically.It's free!
                    </p>
                    <p>
                        <input type="text" name="txtTradeAlertEmail" value="Your e-mail address" class="grey"
                            id="txtTradeAlertEmail">
                        <a title="Subscribe to the latest products" rel="nofollow" onclick="linkTradeAlert('qq');"
                            class="btn">Subscribe&gt;&gt;</a>
                    </p>
                </li>
            </ul>
            <!--proups-->
            <div id="DivShowStartOrder" class="popups-bg" style="display: none">
                <div class="ShowStartOrder">
                    <iframe id="ShowStartOrder" width="800" height="620" src="javascript:void(0)"></iframe>
                    <img class="close-bg" onclick="CloseOrder()" src="//eresource.ecvv.com/PC_Ecvv/images/del-box.png">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.col-center-main {
    margin: 0 20px;
    width: auto;
}

.tab-list,
.tab-list-nav {
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 0;
}

.tab-list-nav li.active,
.tab-list-nav li.active a {
    background: #fff;
    cursor: default;
}

.tab-list-nav li a {
    display: block;
    height: 31px;
    line-height: 31px;
    font-size: 14px;
    text-decoration: none;
    position: relative;
    padding: 0 20px;
    font-weight: 700;
    color: #333;
    background-color: #f0f0f0;
}

#teamIntroduction {
    border: 0;
    border-radius: 3px;
    background-color: rgb(192, 217, 235, 80%);
    width: 100%;
    text-align: left;
    padding: 10px;
    resize: none;
    margin: 10px 0;
}

.clear {
    margin: 0px;
    padding: 0px;
    clear: both;
}

.list-item {
    border-bottom: 1px solid #ddd;
    background-color: #fff;
}

.list-item .item-main {
    padding: 25px 0;
    margin: 0 10px;
    zoom: 1;
}

.list-item-inquiry {
    width: 15px;
    height: auto;
    float: left;
    margin-right: 5px;
}

.list-item-pic {
    float: left;
    text-align: center;
    margin-right: 20px;
    border: 1px solid #EEEEEE;
    width: 160px;
    height: 160px;
}

.list-item-pic a img {
    border: none;
    width: 160px;
    height: 160px;
}

.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}

.list-item-right {
    overflow: hidden;
}

.list-item .attr {
    display: inline;
    width: 59% !important;
    float: left;
    overflow: hidden;
    padding-right: 2%;
}
.list-item .attr h2 {
    font-size: 16px;
    font-weight: 700;
    display: inline;
    margin-right: 4px;
    padding: 0;
    word-wrap: break-word;
    line-height: 20px;
}
.list-item .attr h2 a:visited {
    color: #969;
    text-decoration: none;
}
.list-item .attr h2 a {
    color: #004b91;
    text-decoration: none;
    border-bottom: 1px solid #004b91;
    cursor: pointer;
}
b,
strong {
    font-weight: 700;
}
.list-item .attr .busi-attr {
    margin: 10px 0 10px;
    font-weight: 400;
}
.list-item .attr .busi-attr p {
    line-height: 18px;
    color: #333;
    font-weight: 700;
    margin-bottom: 2px;
}
.list-item .attr .busi-attr p span.attrName {
    font-weight: 400;
    color: #666;
}
.atb-wrap {
    display: flex;
    justify-content: end;
}
.atb-wrap a {
    margin: 0 10px;
    color: #999;
}
.atb-jia span {
    background-position: -222px -47px;
    display: inline-block;
    height: 11px;
    width: 11px;
    margin-right: 8px;
}
.ls-main-ico {
    background-image: url('@/assets/images/Content_images/ls-sprites-v3.png?t=1') !important;
    background-repeat: no-repeat;
    display: inline-block;
}
.contact-supplier .s22 {
    height: 14px;
    width: 18px;
    vertical-align: middle;
}
.spirits-small {
    background-image: url("@/assets/images/Content_images/sprites-small.png");
    background-repeat: no-repeat;
    display: inline-block;
    background-position: -60px -60px;
}

.unitStyle {
    color: #1515F1;
    font-weight: 700;
}

a,
a:link {
    color: #004B91;
    text-decoration: none;
}

.busi-ai {
    color: #999;
    overflow: hidden;
}

.list-item .supplier {
    display: inline;
    width: 38% !important;
    float: left;
    overflow: hidden;
    text-align: left;
}
.atb-wrap {
    margin-bottom: 5px;
}
.list-item .supplier p {
    color: #999;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 5px;
}
.list-item .supplier .company {
    font-weight: 400;
    text-decoration: none;
}
.list-item .supplier .card {
    color: #999;
    font-weight: 400;
}
.list-item .supplier .location {
    margin-left: 10px;
}

.list-item .supplier .flag {
    margin-left: 5px;
}

.list-item .supplier .icons {
    margin-top: 5px;
    display: block;
}

.list-item .supplier .contact {
    clear: both;
    padding-top: 33px;
    display: block;
}

.list-item .supplier .icon-item {
    margin-right: 15px;
    height: 25px;
    width: 25px;
    background: none;
}

.contact-supplier {
    background-color: #FFE198;
    border: 1px solid #FFD673;
    color: #333333 !important;
    border-radius: 0.25em;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 5px;
    margin-right: 10px;
    padding: 3px 5px;
}

.contact-supplier:hover {
    background-color: #FFD979;
    border: 1px solid #FBD16B;
    color: #111 !important;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset;
}

.list-item:hover {
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.13);
}

.list-item .attr h2 a:hover {
    border-bottom: 1px solid #ee6600;
}

.seo-sl a:hover,
.col-left .inlink-left a:hover,
.list-item .supplier .card:hover,
a:hover,
.attr h2 a:hover {
    color: #ee6600;
    cursor: pointer;
}




// message
.queDiv {
    border: 1px solid #efefef;
    padding: 10px;
    margin-top: 10px;
    background: #fff;

    .findTipTitle {
        color: #202123;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .btnYesNo_Defult {
        background-color: rgb(255, 255, 255);
        color: rgb(51, 51, 51);
    }

    .btnYesNo {
        border-radius: 3px;
        border: 1px solid rgb(198, 202, 209);
        cursor: pointer;
        display: inline-block;
        font-family: Roboto, Helvetica, Tahoma, Arial, "Microsoft YaHei";
        font-size: 14px;
        font-weight: 400;
        height: 28px;
        line-height: 28px;
        margin-top: 5px;
        padding: 0 12px;
        text-align: center;
        width: 66px;
        margin-left: 8px;
    }

    .btnYesNo:hover {
        background-color: rgba(255, 116, 0, 0.1);
        border: 1px solid rgb(255, 116, 0);
        color: rgb(255, 116, 0);
    }

    .mydiv span {
        color: #666;
        margin-left: 10px;
    }

    .mydiv #no2 {
        margin-left: 40px;
    }

    .subdis {
        color: #000;
    }
}

// also searched
.inlink-top {
    border-bottom: 1px solid #eee;
    background-color: #fff;
    padding: 10px;
    position: relative;
    margin: 10px 0;

    .inlink-top-more {
        display: inline-block;
        white-space: nowrap;
        color: #004B91;
        position: absolute;
        top: 10px;
    }

    .inlink-top-cont {
        display: inline-block;
        overflow: hidden;
        width: 90%;
    }

    .inlink-top-cont-title {
        color: #666;
    }

    .shang-ico span {
        width: 0;
        height: 0;
        line-height: 0;
        display: inline-block;
        border-width: 4px;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #999 rgba(0, 0, 0, 0);
        border-style: dashed dashed solid dashed;
        margin-left: 5px;
        margin-right: 3px;
        position: relative;
    }

    .xia-ico span {
        width: 0;
        height: 0;
        line-height: 0;
        display: inline-block;
        border-width: 4px;
        border-color: #999 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
        border-style: solid dashed dashed dashed;
        margin-left: 5px;
        margin-right: 3px;
        position: relative;
    }
}

// qq 
.inlink-left2 {
    padding: 10px;
    background-color: #fff;
}

// product alert
.search-service {
    margin: 10px 0;
    padding-bottom: 10px;
    color: #555;
    background-color: #fff;
    line-height: 30px;

    ul {
        padding: 0;
    }

    .popups-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(144, 144, 144, 0.5);
        z-index: 999;
    }

    .ShowStartOrder {
        width: 800px;
        height: 531px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }

    p {
        margin: 0;
        padding: 3px 10px;
    }

    input {
        border: 1px solid #eee;
        height: 24px;
        line-height: 24px;
        color: #999;
        padding: 0 5px;
        width: 170px;
        margin-right: 10px;
        vertical-align: middle;
    }

    .btn {
        border: 1px solid #ddd;
        color: #333;
        display: inline-block;
        height: 27px;
        line-height: 25px;
        padding: 0 10px;
        cursor: pointer;
        vertical-align: middle;
    }

    .ser-tips-h3 {
        padding-left: 10px;
        display: block;
        font-size: 1.17em;
        font-weight: bold;
    }

    .ser-tips {
        color: #999;
        padding-top: 10px;
    }
}
</style>
<style lang="less">
// <!-- pagination -->
#pagination {
    .el-input__suffix {
        border: none;
    }
    .el-input {
        width: 200px;
    }
    .el-input__wrapper {
        margin: 0;
    }
}
</style>