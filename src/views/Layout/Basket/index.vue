<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { getProductInfo,getProductOrder } from "@/api/modular/search";
import { useProductStore } from "@/stores/productStore";
import pinia from "@/stores/index";
import { Local,Session } from "@/utils/storage";
import { ElTable } from "element-plus";
import { ElMessage } from 'element-plus';

const stores = useProductStore(pinia);
const router = useRouter();
const ifShow = ref(false);
const checked = ref(false); // 是否全选
const len = ref(Local.get("productItemList"));
const basketList = ref<any>(Local.get("basketList"));
const multipleSelection = ref<User[]>([]);
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const ProductInfo = ref<any>({})
const ProductDataInfo = ref<any>({})
const paramsInfo = ref<any>({
  pid:'',
  skuId:''
})
const params = ref({
    pid:''
})
const style = ref({
  height: "34px",
  overflow: "hidden",
  bottom: "0px",
});
const handleShow = (val: boolean) => {
  ifShow.value = val;
};

// 点击全选
const clickAllCheck = () => {
  multipleTableRef.value.map((i) => {
    i.toggleAllSelection();
    multipleSelection.value.push(i)
  });
};

// 勾选
const handleSelectionChange = (val)=>{
   multipleSelection.value = val
}
// 删除列表
const deleteItem = (id,name) => {
 stores.delProductItem(id,name)
};

const clickProduct = (id) => {
  let routeUrl = router.resolve({ path: `/product/${id}` });
  window.open(routeUrl.href, "_blank");
};

const SendMessage = () => {
  if(multipleSelection.value.length>0){
    multipleSelection.value.map((i=>{
      Session.set("productInfo", i);
      paramsInfo.value.pid = '4868524'
      params.value.pid = '4868524'
      pDInfo()
      pInfo()
      Session.set('sendCompanyInfo',{
        product:true
      })
      let routeUrl = router.resolve({ path: `/sendMsg` });
      window.open(routeUrl.href, i.pid);
    }))
  }else{
    ElMessage.error('You need to select the product!');
  }
};


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
watch(
  () => ifShow.value,
  (val) => {
    if (val) {
      style.value = {
        height: "auto",
        overflow: "hidden",
        bottom: "0px",
      };
    } else {
      style.value = {
        height: "34px",
        overflow: "hidden",
        bottom: "0px",
      };
    }
  }
);
watch(
  () => stores.productItemList,
  () => {
    len.value = Local.get("productItemList");
    basketList.value = Local.get("basketList")
  }
);
watch(()=>multipleSelection.value,
()=>{
  if(multipleSelection.value.length !== len.value.length){
    checked.value = false
  }else{
    checked.value = true
  }
})
</script>
<template>
  <div v-show="len !== null && len.length !== 0" id="in-basket" :style="style">
    <div
      class="in-basket-main-info"
      id="J-inquiryControl"
      @click="handleShow(!ifShow)"
    >
      <span class="in-basket-main-info-txt">
        <ShoppingCartFull style="width: 16px; margin-right: 5px" />
        Inquiry Basket (<em>{{
          len === null ? stores.productItemList : len.length
        }}</em
        >)
      </span>
    </div>
    <div class="in-basket-wrap obelisk-form">
      <div class="in-basket-con J-productContent" style="display: block">
        <ul style="height: auto; overflow: hidden">
          <template v-for="(i, key, index) in basketList">
            <li class="in-basket-supplier J-companyName">
              <div class="in-basket-name" :title="key">
                {{ key }}
              </div>
            </li>

            <el-table
              ref="multipleTableRef"
              style="width: 100%"
              :show-header="false"
              :data="i"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="26" />
              <el-table-column width="53">
                <template #default="scope">
                  <a @click="clickProduct(scope.row.pid)">
                    <img width="53" height="53" :src="scope.row.picPath" />
                  </a>
                </template>
              </el-table-column>
              <el-table-column width="180">
                <template #default="scope">
                  <div class="in-basket-text">
                    <a
                      class="in-basket-title"
                      style="font-size: 12px"
                      @click="clickProduct(scope.row.pid)"
                      :title="scope.row.productname"
                      :alt="scope.row.productname"
                      >{{ scope.row.productname }}</a
                    >
                  </div>
                </template>
              </el-table-column>
              <el-table-column width="30">
                <template #default="scope">
                  <a @click="deleteItem(scope.row.pid,key)" class="in-basket-delete"
                    ><el-icon><Close /></el-icon
                  ></a>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </ul>
        <div class="in-basket-tips J-inquiryError" style="display: none"></div>
        <div class="in-basket-fun">
          <div class="input-checkbox">
            <label class="input-wrap" @click="clickAllCheck()">
              <el-checkbox
                type="checkbox"
                class="J-inquiryCheckedAll"
                v-model="checked"
              />
              <span class="input-ctnr"></span> Select All
            </label>
          </div>
          <div class="in-basket-btn-group">
            <a
              @click="SendMessage()"
              class="btn btn-main btn-send J-sendInquiry"
              >Send Inquiry</a
            >
            <!-- <a
              href="javascript:void(0);"
              class="btn btn-compare J-compare"
              >Compare</a
            > -->
          </div>
        </div>
      </div>
    </div>
    <ul class="in-basket-tab">
      <li class="in-basket-tab-item in-basket-tab-2 J-productCount ibselected">
        Products
        <span class="tab-count" style="margin-left: 5px">
          (<em>{{ len === null ? 0 : len.length }}</em
          >)
        </span>
      </li>
      <!-- <li
        class="in-basket-tab-item in-basket-tab-2 J-supplierCount"
        data-type="supplier"
      >
        Suppliers
        <span class="tab-count" style="margin-left: 5px">
          (<em>0</em>)
      </span>
      </li> -->
      <li
        class="in-basket-tab-item in-basket-tab-2 J-o2oProductCount"
        data-type="o2oProduct"
        style="display: none"
      >
        Exhibition
        <span class="tab-count" style="margin-left: 5px"> (<em>0</em>) </span>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
#in-basket {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  background: #fff;
  z-index: 9999;
  font-size: 12px;
  font-family: arial, sans-serif;
  a {
    cursor: pointer;
  }
  .in-basket-main-info {
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #5c7a99;
    color: #fff;
    font-size: 0;
    text-align: center;
    cursor: pointer;
    .in-basket-main-info-txt {
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .in-basket-tips {
    padding: 5px;
    background: #ffdbdb;
  }
  .in-basket-wrap {
    ul {
      padding: 0;
    }
    .in-basket-supplier {
      margin: 0 10px;
      height: auto;
      padding: 0 10px;
      border-top: 1px solid #dae0e5;
      position: relative;
      z-index: 1;
      .in-basket-name {
        margin: 20px 0 10px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        word-wrap: normal;
        text-overflow: ellipsis;
        color: #222;
        font-weight: bold;
        display: block;
      }
    }
    .in-basket-supplier:first-child {
      border-top: 0;
    }
    li {
      padding: 10px;
      height: 55px;
      position: relative;
    }
    li.in-basket-item {
      min-height: 50px;
      height: auto;
      display: flex;
      .in-basket-checker {
        flex-shrink: 0;
        .input-wrap {
          margin: 0;
          color: #222;
          display: inline-block;
          .input-ctnr {
            margin-right: 0;
          }
        }
      }
      .in-basket-pic-wrap {
        margin: 0 10px;
        width: 55px;
        height: 55px;
        border: 1px solid #e6ecf2;
        box-sizing: border-box;
        overflow: hidden;
        .in-basket-pic {
          width: 100%;
          height: 100%;
          a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }
      .in-basket-text {
        flex-grow: 1;
        overflow: hidden;
        zoom: 1;
        .in-basket-title {
          height: 32px;
          overflow: hidden;
          a {
            color: #555;
          }
        }
      }
    }
    .in-basket-fun {
      margin: 10px 10px 0;
      padding: 20px 0;
      // border-top: 1px solid #dae0e5;
      font-size: 0;
      display: flex;
      justify-content: space-between;
      .input-checkbox {
        font-size: 12px;
        flex-shrink: 0;
        .input-wrap {
          color: #888;
        }
      }
      .in-basket-btn-group {
        flex-shrink: 0;
        .btn-send,
        .btn-compare {
          padding: 5px 10px;
          font-size: 12px;
          line-height: 1em;
          height: 26px;
          display: inline-block;
        }
        .btn-compare {
          margin-left: 10px;
          color: #222;
          background-color: #f5f7fa;
        }
        .btn-compare:hover {
          color: #222;
          background-color: #f5f7fa;
        }
        .btn-main {
          color: #fff;
          border: solid 1px #e64545;
          background-color: #e64545;
        }
        .btn-main:hover {
          color: #fff;
          border: solid 1px #d92121;
          background-color: #d92121;
        }
      }
    }
  }

  .in-basket-tab {
    height: 36px;
    background: #f5f7fa;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      height: 36px;
      line-height: 36px;
      color: #888;
      text-align: center;
      cursor: pointer;
      .tab-count {
        color: #888;
      }
    }
    .in-basket-tab-item.in-basket-tab-2 {
      width: 100%;
    }
    .in-basket-tab-item + .in-basket-tab-item {
      border-left: 1px solid #dae0e5;
      box-sizing: border-box;
    }

    .ibselected {
      border-top: none;
      color: #222;
      font-weight: bold;
      background: #fff;
      cursor: default;
    }
  }
}
// el-table
:deep(.el-scrollbar__view) {
  padding: 0;
}
</style>
