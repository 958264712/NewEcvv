<script setup lang="ts">
import { ref, defineAsyncComponent,onMounted } from "vue";
import { useRouter } from "vue-router";
import { getLatestProduct,getProductInfo,getProductOrder } from "@/api/modular/search";
import { Session } from '@/utils/storage';

const props = defineProps([
  "productShowcase",
  "companyname",
  "companyContactPerson",
  "companyContactUrl",
  "companyCateGroup",
  "companyPic",
  "newProducts",
]);
const router = useRouter();
const FormInquire = defineAsyncComponent(() => import("./formInquire.vue"));

const companyInfo = Session.get('companyInfo')
const visible = ref(false);
const itemList = ref<any>([]);
const productGroup = ref<any>([]);
const ProductInfo = ref<any>({})
const ProductDataInfo = ref<any>({})
const paramsInfo = ref<any>({
  pid:'',
  skuId:''
})
const params = ref({
    pid:''
})

// 询盘1
const SendMessage = (id, item) => {
  Session.set("productInfo", item);
  paramsInfo.value.pid = id
  params.value.pid = id
  pDInfo()
  pInfo()
  Session.set('sendCompanyInfo',{
    product:true
  })
  let routeUrl = router.resolve({ path: `/sendMsg` });
  window.open(routeUrl.href, "_blank");
};

const clickProduct = (id,item) => {
  Session.set("productInfo", item);
  paramsInfo.value.pid = id
  params.value.pid = id
  pDInfo()
  pInfo()
  let routeUrl = router.resolve({ path: `/product/${id}` });
  window.open(routeUrl.href, "_blank");
};

// 获取最新产品
const handleQuery = async () => {
  await getLatestProduct(Object.assign({ keyword: companyInfo.companyCateGroup.catalog_id})).then((res) => {
    if (res.data.type === "success") {
      itemList.value = res.data.result.list;
    }
  });
  props.companyCateGroup.map((item, index) => {
    item.groupProList.map((i) => {
      productGroup.value.push(i);
    });
  });
};
handleQuery();
// 获取产品订单信息
const pDInfo = async () => {
    const res = await getProductOrder(Object.assign(paramsInfo.value))
    if(res.data.type === 'success'){
        ProductDataInfo.value.productName = res.data.result.productName
        ProductDataInfo.value.firstPicPath = res.data.result.firstPicPath
        ProductDataInfo.value.m_packing = res.data.result.m_packing
        ProductDataInfo.value.price = res.data.result.price
        ProductDataInfo.value.productbrand = res.data.result.productbrand
        ProductDataInfo.value.productmodel = res.data.result.productmodel
        ProductDataInfo.value.unitStr = res.data.result.unitStr
        ProductDataInfo.value.token = res.data.result.token
        Session.set("pDInfo",res.data.result)
    }
}
// 获取产品信息
const pInfo = async () => {
    const res = await getProductInfo(Object.assign(params.value))
    if(res.data.type === 'success'){
        ProductInfo.value = res.data.result
        // 产品详情
        ProductInfo.value.picPathAll = res.data.result.productDetail.picPathAll[0]
        ProductInfo.value.productDescription = res.data.result.productDetail.productDescription
        ProductInfo.value.productPropertyList = res.data.result.productDetail.productPropertyList
        ProductInfo.value.picPathAllList = res.data.result.productDetail.picPathAll
        ProductInfo.value.productName = res.data.result.productDetail.productName
        ProductInfo.value.supplyAbility = res.data.result.productDetail.supplyAbility
        ProductInfo.value.minorderUnit = res.data.result.productDetail.minorderUnit
        ProductInfo.value.minOrder = res.data.result.productDetail.minOrder
        ProductInfo.value.productID = res.data.result.productDetail.productID
        ProductInfo.value.productPrice = res.data.result.productOtherInfo.productPrice
        ProductInfo.value.priceUnit = res.data.result.productOtherInfo.priceUnit
        ProductInfo.value.productUnit = res.data.result.productOtherInfo.productUnit
        ProductInfo.value.skuInfo = res.data.result.productOtherInfo.skuInfo
        if(ProductInfo.value.skuInfo.length > 0){
            ProductInfo.value.ifSku = true
        }else{
            ProductInfo.value.ifSku = false
        }
        ProductInfo.value.skuPrice = JSON.parse(res.data.result.productOtherInfo.skuPrice)
        // 面包屑
        ProductInfo.value.getNavigationMsg = res.data.result.getNavigationMsg
        // 产品列表
        const list = res.data.result.recommProductList
        ProductInfo.value.recommProductList = []
        const list1 = ref<any>([])
        list.map((item:any)=>{
            list1.value.push(item)
            if(list1.value.length % 7 === 0){
                ProductInfo.value.recommProductList.push(list1.value)
                list1.value = []
            }
        }) 
        // 推荐产品列表
        ProductInfo.value.productRecommendList = res.data.result.productRecommendList
        Session.set("pInfo",res.data.result)
    }
}

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 4000) {
        visible.value = true
    } else {
        visible.value = false
    }
})
onMounted(()=>{
 window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 4000) {
        visible.value = true
    } else {
        visible.value = false
    }
})
})
</script>
<template>
  <el-row id="produceModule">
    <el-col :span="4" class="leftSider">
      <div class="sr-layout-nav home-nav">
        <div class="sr-layout-block">
          <div class="sr-layout-subblock sr-side-proGroup">
            <div class="sr-txt-title">
              <h2 class="sr-txt-h2">Product Categories</h2>
            </div>
            <ul class="sr-side-proGroup-list">
              <li
                v-for="(item, index) in props.companyCateGroup"
                :key="item"
                :class="
                  item.groupProList.length > 0
                    ? 'sr-side-proGroup-rightSpace'
                    : null
                "
              >
                <a ref="nofollow" :href="item.url" :title="item.name"
                  >{{ item.name }}
                  <i
                    class="ob-icon icon-right J-showSubList"
                    v-show="item.groupProList.length > 0"
                  ></i>
                </a>
                <ol class="sr-side-proGroup-sublist">
                  <li v-for="(i, ind) in item.groupProList" :key="i.pid">
                    <a
                      ref="nofollow"
                      :href="i.productUrl"
                      :title="i.productname"
                      >{{ i.productname }}</a
                    >
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="sr-layout-block contact-block J-contact-fix"
          style="inset: 40px auto auto; position: static; width: auto"
        >
          <div class="sr-txt-title">
            <h2 class="sr-txt-h2">Contact Supplier</h2>
            <a title="Business Card" class="title-icon J-show-card"
              ><i class="ob-icon icon-buyer-sourcing"></i
            ></a>
          </div>
          <div class="sr-layout-content contact-supplier">
            <div class="sr-side-contSupplier-info">
              <div class="sr-side-contSupplier-pic">
                <a :href="props.companyContactUrl">
                  <img
                    class="J-contact-img"
                    :src="props.companyPic[0]"
                    alt="Avatar"
                  />
                </a>
              </div>
              <div class="sr-side-contSupplier-txt">
                <a
                  class="sr-side-contSupplier-name"
                  :href="props.companyContactUrl"
                  >{{ props.companyContactPerson }}</a
                >
                <div class="sr-side-contSupplier-position">General Manager</div>
                <div class="sr-side-contSupplier-chat">
                  <b class="tm3_chat_status" style="display: none"></b
                  ><a
                    rel="nofollow"
                    class="tm-status-on"
                    title="Chat with supplier online now!"
                    >Chat with Supplier</a
                  >
                </div>
                <div class="sr-side-contSupplier-startMeeting">
                  <b
                    class="J-start-meeting"
                    theme="pc-search-list"
                    target="_blank"
                  ></b>
                </div>
              </div>
            </div>
            <form
              id="sideInqueryForm"
              class="form obelisk-form"
              method="post"
              target="_blank"
            >
              <input type="hidden" id="loginStatu" value="0" />
              <div class="sr-side-contSupplier-field">
                <textarea
                  class="input-textarea sr-side-contSupplier-message J-side-contSupplier-message"
                  name="content"
                  id="inquiryContent"
                  cols="90"
                  rows="2"
                  placeholder="Enter between 20 to 4,000 characters."
                  maxlength="4000"
                ></textarea>
              </div>
              <div
                class="sr-side-contSupplier-field sr-side-contSupplier-emailfield J-contSupplier-email-field"
              >
                <input
                  class="input-text sr-side-contSupplier-email"
                  name="senderMail"
                  placeholder="Your email address"
                  value=""
                />
              </div>
              <div class="sr-side-contSupplier-btn cf">
                <div class="cf">
                  <div id="captcha" style="float: left"></div>
                  <input
                    type="hidden"
                    name="hmToken"
                    class="J-hmToken"
                  />
                  <input
                    type="hidden"
                    class="J-hmCaptchaId"
                  />
                </div>
                <input
                  type="hidden"
                  id="sourceReqType"
                  name="sourceReqType"
                  value="GLP"
                />
                <input
                  type="hidden"
                  name="showRoomQuickInquireFlag"
                  value="1"
                />
                <input type="hidden" name="showRoomId" value="" />
                <input
                  type="hidden"
                  name="compareFromPage"
                  id="compareFromPage"
                  value="1"
                />
                <button
                  fun-inquiry-supplier=""
                  type="submit"
                  class="btn btn-main btn-large"
                  id="sideInquirySend"
                  ads-data="st:5,pdid:,pcid:IMRmDLvcafHV"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="18" class="rightSider">
      <div class="J-spotlight-show">
        <div class="sr-layout-block">
          <div class="sr-txt-title">
            <h2 class="sr-txt-h2">Product Showcase</h2>
          </div>
          <div class="sr-layout-content">
            <ul class="sr-layout-row">
              <li
                class="sr-layout-col-4 sr-proList"
                v-for="(item, index) in props.productShowcase"
              >
                <div class="sr-proList-pic-wrap">
                  <div class="sr-proList-pic">
                    <div class="prod-image">
                      <a
                        @click="clickProduct(item.pid,item)"
                        :title="item.productname"
                      >
                        <img
                          :src="item.picPath"
                          :alt="item.productname"
                          :title="item.productname"
                          style="display: block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sr-proList-txt">
                  <div class="sr-proList-name">
                    <a
                      @click="clickProduct(item.pid, item)"
                      :title="item.productname"
                    >
                      {{ item.productname }}
                    </a>
                  </div>
                  <div class="sr-proList-price">
                    <span class="sr-proList-unit">Price: </span>
                    <span class="sr-proList-num"
                      >{{ item.m_Currency }} ${{ item.m_FobPrice }}
                    </span>
                    <span class="">/ Piece</span>
                  </div>
                  <div class="sr-proList-price">
                    <span class="sr-proList-unit">Min. Order: </span>
                    {{ item.m_Minimum_Order }} {{ item.minOrderUnit }}
                  </div>
                </div>
                <!-- href="https://www.made-in-china.com/sendInquiry/prod_GvDxWsrYvEtX_IMRmDLvcafHV.html?from=shrom&amp;page=home_spot&amp;plant=en" -->
                <a
                  target="_blank"
                  class="btn"
                  style="margin-top: 13px; width: 100%"
                  @click="SendMessage(item.pid, item)"
                  >Contact Now</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="sr-layout-block">
          <div class="sr-txt-title">
            <h2 class="sr-txt-h2">New products</h2>
          </div>
          <div class="sr-layout-content">
            <ul class="sr-layout-row">
              <li
                class="sr-layout-col-4 sr-proList"
                v-for="(item, index) in props.newProducts"
              >
                <div class="sr-proList-pic-wrap">
                  <div class="sr-proList-pic">
                    <div class="prod-image">
                      <a
                        @click="clickProduct(item.pid, item)"
                        :title="item.productname"
                      >
                        <img
                          :src="item.picPath"
                          :alt="item.productname"
                          :title="item.productname"
                          style="display: block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sr-proList-txt">
                  <div class="sr-proList-name">
                    <a
                      @click="clickProduct(item.pid, item)"
                      :title="item.productname"
                    >
                      {{ item.productname }}
                    </a>
                  </div>
                  <div
                    class="sr-proList-price"
                    title="FOB Price: US $29.8-30.55 / Piece"
                  >
                    <span class="sr-proList-unit">Price: </span>
                    <span class="sr-proList-num"
                      >{{ item.m_Currency }} ${{ item.m_FobPrice }}
                    </span>
                    <span class="">/ Piece</span>
                  </div>
                  <div class="sr-proList-price">
                    <span class="sr-proList-unit">Min. Order: </span>
                    {{ item.m_Minimum_Order }} {{ item.minOrderUnit }}
                  </div>
                </div>
                <a
                  @click="SendMessage(item.pid, item)"
                  class="btn"
                  style="margin-top: 13px; width: 100%"
                  >Contact Now</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="sr-layout-block">
          <div class="sr-txt-title">
            <h2 class="sr-txt-h2">Product Categories List</h2>
          </div>
          <div class="sr-layout-content">
            <ul class="sr-layout-row">
              <li
                class="sr-layout-col-4 sr-proList"
                v-for="(i, index) in productGroup"
              >
                <div class="sr-proList-pic-wrap">
                  <div class="sr-proList-pic">
                    <div class="prod-image">
                      <a @click="clickProduct(i.pid, i)" :title="i.productname">
                        <img
                          :src="i.picPath"
                          :alt="i.productname"
                          :title="i.productname"
                          style="display: block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sr-proList-txt">
                  <div class="sr-proList-name">
                    <a @click="clickProduct(i.pid, i)" :title="i.productname">
                      {{ i.productname }}
                    </a>
                  </div>
                  <div
                    class="sr-proList-price"
                    title="FOB Price: US $29.8-30.55 / Piece"
                  >
                    <span class="sr-proList-unit">Price: </span>
                    <span class="sr-proList-num"
                      >{{ i.m_Currency }} ${{ i.m_FobPrice }}
                    </span>
                    <span class="">/ Piece</span>
                  </div>
                  <div class="sr-proList-price">
                    <span class="sr-proList-unit">Min. Order: </span>
                    {{ i.m_Minimum_Order }} {{ i.minOrderUnit }}
                  </div>
                </div>
                <a
                  @click="SendMessage(i.pid, i)"
                  class="btn"
                  style="margin-top: 13px; width: 100%"
                  >Contact Now</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="sr-layout-block">
          <div class="sr-txt-title">
            <h2 class="sr-txt-h2">You May Like</h2>
          </div>
          <div class="sr-layout-content">
            <ul class="sr-layout-row">
              <li
                class="sr-layout-col-4 sr-proList"
                v-for="(item, index) in itemList"
                :key="item.productID"
              >
                <div class="sr-proList-pic-wrap">
                  <div class="sr-proList-pic">
                    <div class="prod-image">
                      <a :href="item.href">
                        <img
                          :src="item.src"
                          :title="item.title"
                          :alt="item.title"
                          style="display: block"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sr-proList-txt">
                  <div class="sr-proList-name">
                    <a :href="item.href" :title="item.title"
                      >{{ item.text }}
                    </a>
                  </div>
                </div>
                <a
                  :href="item.href"
                  target="_blank"
                  class="btn"
                  style="margin-top: 13px; width: 100%"
                  >Contact Now</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FormInquire :companyname="props.companyname" :visible="visible"/>
    </el-col>
  </el-row>
</template>
<style lang="less" scoped>
#produceModule {
  margin: 2% auto;
  width: 73%;
  display: flex;
  justify-content: space-between;
  a {
    cursor: pointer;
  }
  .leftSider {
    .sr-layout-nav {
      margin-right: 20px;
      min-height: 1px;
      width: 300px;
      .sr-layout-block {
        padding: 30px 29px;
        margin-bottom: 20px;
        background: #fff;
        border: 1px solid #e9eef4;
        .sr-layout-subblock:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }
        .sr-layout-subblock:first-child {
          padding-top: 0;
        }
        .sr-layout-subblock {
          border-bottom: 1px solid #e6ecf2;
          padding: 30px;
          padding-left: 0;
          padding-right: 0;
        }
        .sr-txt-title {
          margin-bottom: 20px;
          .sr-txt-h2 {
            font-size: 18px;
            font-weight: bold;
            display: inline-block;
            vertical-align: middle;
            word-break: break-word;
          }
        }
        .sr-side-proGroup-list {
          margin-top: -10px;
          margin-bottom: -10px;
          margin-left: -30px;
          margin-right: -30px;
          padding: 0;
          li {
            position: relative;
            a {
              line-height: 21px;
              padding: 10px 30px;
              color: #222;
              font-size: 14px;
              text-decoration: none;
              display: block;
              overflow-wrap: break-word;
              word-wrap: break-word;
            }
            .sr-side-proGroup-sublist {
              display: none;
              position: absolute;
              left: 100%;
              top: 0;
              margin-top: -11px;
              border: 1px solid #ced3d9;
              background: #fff;
              z-index: 99;
              padding: 10px 0;
              box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

              li a {
                padding: 10px 20px;
                white-space: nowrap;
              }
            }
          }
          li.sr-side-proGroup-rightSpace > a {
            padding-right: 56px;
            i {
              position: absolute;
              right: 30px;
              top: 50%;
              transform: translateY(-50%);
              -ms-transform: translateY(-50%);
              -moz-transform: translateY(-50%);
              -webkit-transform: translateY(-50%);
              -o-transform: translateY(-50%);
            }
            .ob-icon,
            .micon {
              font-family: "FontAwesome";
              font-weight: normal;
              font-style: normal;
              text-decoration: inherit;
              -webkit-font-smoothing: antialiased;
              display: inline-block;
              *display: inline;
              *zoom: 1;
              font-size: 16px;
              line-height: 1;
              vertical-align: middle;
              text-decoration: none !important;
            }
            .ob-icon.icon-right:before {
              content: "\f054";
            }
          }
          li.sr-side-proGroup-rightSpace:hover {
            .sr-side-proGroup-sublist {
              display: block;
            }
          }
        }
        .sr-side-contSupplier-pic {
          font-size: 0;
          float: left;
          margin-right: 15px;
          a {
            cursor: default;
          }
          img {
            max-width: 70px;
            max-height: 70px;
            border-radius: 3px;
          }
        }
        .sr-side-contSupplier-txt {
          overflow: hidden;
          .sr-side-contSupplier-name {
            color: #222;
            font-size: 14px;
          }
          .sr-side-contSupplier-position {
            color: #888;
            font-size: 14px;
            margin-bottom: 5px;
          }
          .sr-side-contSupplier-chat {
            color: #1470cc;
            font-size: 14px;
            text-decoration: none;
            word-wrap: break-word;
            word-break: break-word;
          }
          .sr-side-contSupplier-chat .tm-status-on,
          .sr-side-contSupplier-chat .tm-status-off {
            background-position: 0 0;
            white-space: pre-wrap;
          }
          .tm-status-on {
            background: url(https://www.micstatic.com/common/img/logo/tm_on_16_8a9a2d8a.png)
              no-repeat 0 center;
          }
          .tm-status-off,
          .tm-status-on {
            display: inline-block !important;
            *display: inline !important;
            zoom: 1;
            padding-left: 20px;
            line-height: 16px;
            white-space: nowrap;
            text-align: left;
          }
          .sr-side-contSupplier-startMeeting {
            margin-top: 5px;
            b {
              font-weight: bold;
            }
          }
        }
        .sr-side-contSupplier-info:before,
        .sr-side-contSupplier-info:after {
          content: "";
          display: table;
        }
        .sr-side-contSupplier-info:after {
          clear: both;
        }
        .sr-side-contSupplier-field {
          margin-bottom: 10px;
          textarea.input-textarea {
            resize: none;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 6px;
            padding-bottom: 6px;
            border-width: 1px;
            border-style: solid;
            border-color: #ced3d9;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            -ms-border-radius: 3px;
            -o-border-radius: 3px;
            border-radius: 3px;
            resize: vertical;
            outline: 0;
            overflow: auto;
            vertical-align: top;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            box-sizing: border-box;
          }
          .feedback-block {
            clear: left;
          }
          .error {
            margin-top: 5px;
            font-size: 12px;
            color: #e64545;
            display: inline-block;
          }
        }
        .obelisk-form .input-text,
        .ob-form .input-text {
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 6px;
          padding-bottom: 6px;
          border: 1px solid #ced3d9;
          border-radius: 3px;
          vertical-align: middle;
          line-height: 16px;
          font-size: 12px;
          background-color: #fff;
          margin-right: 10px;
          height: 30px;
          *height: 16px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          -ms-box-sizing: border-box;
          -o-box-sizing: border-box;
          box-sizing: border-box;
        }
        .sr-side-contSupplier-btn .btn {
          width: 100%;
          margin-bottom: 10px;
        }
        .btn-main {
          color: #fff;
          border: solid 1px #e64545;
          background-color: #e64545;
        }
        .btn {
          height: 36px;
          line-height: 34px;
          font-size: 14px;
          display: inline-block;
          vertical-align: middle;
          *display: inline;
          *zoom: 1;
          text-align: center;
          color: #222;
          border: solid 1px #ced3d9;
          background-color: #f5f7fa;
          padding: 0 15px;
          border-radius: 3px;
          cursor: pointer;
          box-sizing: border-box;
        }
        .sr-side-contSupplier-message {
          width: 100%;
          font-size: 12px;
        }
        .sr-side-contSupplier-field {
          margin-bottom: 10px;
        }
        .sr-side-contSupplier-btn {
          font-size: 12px;
        }
      }
      //   .sr-layout-block {
      //     // border: 0;
      //   }
    }
  }

  .rightSider {
    .sr-layout-block {
      border: 0;
      padding: 30px 29px;
      margin-bottom: 20px;
      background: #fff;
      border: 1px solid #e9eef4;
      .sr-txt-title {
        margin-bottom: 20px;
        .sr-txt-h2 {
          font-size: 18px;
          font-weight: bold;
          display: inline-block;
          vertical-align: middle;
          word-break: break-word;
        }
      }
      .sr-layout-row {
        margin-left: -10px;
        margin-right: -10px;
        margin-bottom: -20px;
        display: flex;
        flex-wrap: wrap;
        .sr-proList {
          position: relative;
          .btn {
            height: 36px;
            line-height: 34px;
            font-size: 14px;
            display: inline-block;
            vertical-align: middle;
            *display: inline;
            *zoom: 1;
            text-align: center;
            color: #222;
            border: solid 1px #ced3d9;
            background-color: #f5f7fa;
            padding: 0 15px;
            border-radius: 3px;
            cursor: pointer;
            box-sizing: border-box;
          }
          .btn:hover {
            color: #222;
            background-color: #e6ecf2;
          }
        }
        .sr-layout-col-4 {
          width: 25%;
          padding: 0 9px;
          margin-bottom: 20px;
          .sr-proList-pic-wrap {
            max-width: 500px;
            margin: 0 auto;
            .sr-proList-pic {
              position: relative;
              width: 100%;
              font-size: 0;
              .prod-image {
                width: 200px;
                height: 200px;
                img {
                  transition: all 0.3s ease-in;
                  position: absolute;
                  left: 0;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  max-width: 100%;
                  max-height: 100%;
                }
              }
              .prod-video-mark,
              .prod-gif-mark {
                position: absolute;
                bottom: 0;
                left: 0;
                color: #fff;
                background: #7f7f7f;
                padding: 2px 5px;
                z-index: 2;
                font-size: 12px;
              }
            }
          }
          .sr-proList-txt {
            margin-top: 10px;
            .sr-proList-name {
              line-height: 21px;
              height: 42px;
              overflow: hidden;
              margin-bottom: 5px;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              a {
                color: #222;
                text-decoration: none;
              }
            }
            .sr-proList-price {
              height: 21px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #888;
              .sr-proList-unit {
                font-size: 14px;
                line-height: 21px;
              }
              .sr-proList-num {
                color: #e64545;
                line-height: 21px;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
}
</style>
