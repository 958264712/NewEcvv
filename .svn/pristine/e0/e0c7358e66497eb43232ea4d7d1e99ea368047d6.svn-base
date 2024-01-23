<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["subDomainName","companyCateGroup","companyProfile"])
const isShow = ref(false);
const isShow1 = ref(false);
const handleShow = (item, val) => {
  if (item === "isShow") {
    isShow.value = val;
  } else {
    isShow1.value = val;
  }
};
const isSearch = ref(false);
const queryParams = ref<any>({});
// 获取当前屏幕高度，判断是否固定高度
const ifFixed = ref<boolean>(false);
const style = ref<object>({});
const width = ref(document.body.clientWidth);
if (width.value < 1400) {
  style.value = {
    padding: "0",
    position: "fixed",
    zIndex: 1000,
    // backgroundColor: '#fff',
    width: "100%",
    boxShadow: "1px 2px 3px #dcdcdc",
    top: 0,
  };
} else {
  style.value = {
    position: "fixed",
    top: 0,
    zIndex: 1000,
    // backgroundColor: '#fff',
    width: "100%",
    boxShadow: "1px 2px 3px #dcdcdc",
    // padding: "0 13%",
  };
}
const ValidateInput = (e, userName) => {
  isSearch.value = false;
  var key = e.keyCode;

  if (key == 13) {
    if (userName != "") {
      searchProduct(userName);
      isSearch.value = true;
    } else {
      SearchECVVTradeLeads();
    }
  }
};
const GE = (id) => {
  return document.getElementById(id);
};
const searchProduct = (userName) => {
  if (
    GE("KeyWord").value == "" ||
    GE("KeyWord").value == "Search our products"
  ) {
    alert("Please enter a keyword for search.");
  } else if (GE("KeyWord").value.length > 50) {
    alert("Key word for search must be less than 50 characters.");
  } else if (GE("KeyWord").value.length < 2) {
    alert("Keyword for search must at least 2 characters.");
  } else {
    router.push({path:"/company/" + userName + "/products.html?keyword=" + GE("KeyWord").value})  
  }
};
const SearchECVVTradeLeads = () => {
  if (isSearch.value == false) {
    if (
      ReplaceUrl(GE("ECVVKeyWord").value) == "" ||
      GE("ECVVKeyWord").value == "Enter your keywords"
    ) {
      alert("Please enter a keyword for search.");
    } else if (GE("ECVVKeyWord").value.length < 2) {
      alert("Keyword for search must at least 2 characters.");
    } else if (GE("ECVVKeyWord").value.length > 50) {
      alert("Key word for search must be less than 50 characters.");
    } else {
      window.location.href =  "//www.ecvv.com/product/Search.html?kw=" +ReplaceUrl(GE("ECVVKeyWord").value);
    }
  }
  if (isSearch) {
    isSearch.value = false;
    return false;
  }
};

const ReplaceUrl = (p_source) => {
  var res = p_source
    .replace(/[\W]/g, "-")
    .split("@")
    .join("-")
    .split("_")
    .join("-");
  ress = res.split("-");
  var result = "";
  for (var i = 0; i < ress.length; i++) {
    if (ress[i].length > 0) {
      result += ress[i] + "-";
    }
  }
  if (result.lastIndexOf("-") == result.length - 1) {
    result = result.substring(0, result.length - 1);
  }
  return result;
};
const clickIndex = ()=>{
  window.open(`https://www.ecvv.com/company/${props.subDomainName}/index.html`,'_blank')
}
const clickProducts = ()=>{
  window.open(`https://www.ecvv.com/company/${props.subDomainName}/products.html`,'_blank')
}
const clickProfile = ()=>{
  window.open(`https://www.ecvv.com/company/${props.subDomainName}/profile.html`,'_blank')
}
const clickContact= ()=>{
  window.open(`https://www.ecvv.com/company/${props.subDomainName}/contact.html`,'_blank')
}
const clickProductsMap = ()=>{
  window.open(`https://www.ecvv.com/company/${props.subDomainName}/products-map.html`,'_blank')
}
// 滚动条高度改变时
window.addEventListener("scroll", () => {
  width.value = document.body.clientWidth;
  if (document.documentElement.scrollTop > 220) {
    ifFixed.value = true;
    if (width.value < 1400) {
      style.value = {
        padding: "0",
        position: "fixed",
        zIndex: 1000,
        // backgroundColor: '#fff',
        width: "100vw",
        boxShadow: "1px 2px 3px #dcdcdc",
        top: 0,
      };
    } else {
      style.value = {
        position: "fixed",
        top: 0,
        zIndex: 1000,
        // backgroundColor: '#fff',
        width: "100vw",
        boxShadow: "1px 2px 3px #dcdcdc",
        // padding: "0 13%",
      };
    }
  }
  if (document.documentElement.scrollTop < 210) {
    ifFixed.value = false;
  }
});
// 浏览器改变时

window.addEventListener("resize", () => {
  width.value = document.body.clientWidth;
  if (document.documentElement.scrollTop > 220) {
    ifFixed.value = true;
    if (width.value < 1400) {
      style.value = {
        padding: "0",
        position: "fixed",
        zIndex: 1000,
        // backgroundColor: '#fff',
        width: "100vw",
        boxShadow: "1px 2px 3px #dcdcdc",
        top: 0,
      };
    } else {
      style.value = {
        position: "fixed",
        top: 0,
        zIndex: 1000,
        // backgroundColor: '#fff',
        width: "100vw",
        boxShadow: "1px 2px 3px #dcdcdc",
        // padding: "0 13%",
      };
    }
  } else {
    ifFixed.value = false;
  }
});
</script>
<template>
  <div class="nav" :style="ifFixed === true ? style : ''">
    <el-row>
      <el-col :span="15">
        <ul class="nav-tabs2">
          <li class="tab current">
            <a
              class="tab-link"
              @click="clickIndex"
            >
              Home<b class="no-triangle"></b
            ></a>
          </li>
          <li class="tab dropdown">
            <a
              class="tab-link"
              @click="clickProducts"
              @mouseover="handleShow('isShow', true)"
              @mouseleave="handleShow('isShow', false)"
              >Product Categories<b class="triangle"></b
            ></a>
            <ul class="dropdown-menu2" v-show="isShow" @mouseover="handleShow('isShow', true)"
              @mouseleave="handleShow('isShow', false)">
              <li v-for="(item,index) in props.companyCateGroup" :key="item">
                <a
                  :href="item.url"
                  :title="item.name"
                  >{{item.name}}</a
                >
              </li>
            </ul>
          </li>
          <li class="tab dropdown">
            <a
              class="tab-link"
              @click="clickProfile"
              @mouseover="handleShow('isShow1', true)"
              @mouseleave="handleShow('isShow1', false)"
            >
              Company Profile<b class="triangle"></b
            ></a>
            <ul class="dropdown-menu2" v-show="isShow1" @mouseover="handleShow('isShow1', true)"
              @mouseleave="handleShow('isShow1', false)">
              <li v-for="(item, key, index) in props.companyProfile" :key="item">
                <a
                  :href="item"
                  :title="key"
                  >{{key}}</a
                >
              </li>
            </ul>
          </li>
          <li class="tab">
            <a
              class="tab-link"
               @click="clickContact"
              >Contacts<b class="no-triangle"></b>
            </a>
          </li>
          <li class="tab">
            <a
              class="tab-link"
              @click="clickProductsMap"
              >Products Map<b class="no-triangle"></b>
            </a>
          </li>
        </ul>
      </el-col>
      <el-col :span="3">
        <div class="sreach">
          <el-form :inline="true" :model="queryParams" class="demo-form-inline">
            <el-form-item class="form-item" label="In This Site">
              <el-input
                v-model="queryParams.word"
                class="form-text"
                placeholder="Sreach Producets"
                clearable
                id="KeyWord"
                style="width: 200px"
                @keydown="(e)=>ValidateInput(e, `${props.subDomainName}`)"
              />
              <Search style="width: 20px; height: 34px; font-size: 20px" @click="searchProduct(`${props.subDomainName}`)"/>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.nav {
  padding-left: 12%;
  .nav-tabs2 {
    display: flex;
    align-items: center;
    height: 50px;
  }
  .nav-tabs2:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
  }
  .nav-tabs2 li.tab {
    display: block;
    float: left;
    margin-right: 5px;
    padding: 0;
  }
  .nav-tabs2 a.tab-link {
    border: medium none;
    display: block;
    font: bold 14px/50px arial;
    padding: 0 15px;
    position: relative;
    text-decoration: none;
    height: 50px;
    cursor: pointer;
  }
  .nav-tabs2 a.tab-link .triangle {
    border-left: 5px solid rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 5px;
    border-right: 5px solid rgba(0, 0, 0, 0);
    content: "";
    display: inline-block;
    height: 0;
    margin-left: 5px;
    margin-top: 22px;
    vertical-align: top;
    width: 0;
  }
  .nav-tabs2 li.current a.tab-link,
  .nav-tabs2 li:hover > a {
    margin-top: -2px;
    border-top-width: 2px;
    border-top-style: solid;
  }
  .nav-tabs2 li:hover > a {
    color: #ee6600 !important;
    background-color: #fff !important;
    font-weight: 700;
  }
  .nav-tabs2 li:hover a.tab-link .triangle {
    border-bottom-color: #bfbfbf;
    border-top-color: #bfbfbf;
  }
  .dropdown {
    position: relative;
  }
  .dropdown .dropdown-menu2 {
    background: #fff;
    border-color: #ccc;
    border-style: none solid solid;
    border-width: medium 1px 1px;
    float: left;
    margin-top: -2px;
    padding: 5px 0;
    position: absolute;
    top: 100%;
    width: 190px;
    z-index: 1000;
  }
  .dropdown .dropdown-menu2 .menu-footer a {
    font-weight: 700;
  }
  .dropdown .dropdown-menu2 li a {
    color: #333;
    border-top: none;
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    cursor: pointer;
  }
  .dropdown .dropdown-menu2 li {
    display: block;
    float: none;
    height: 30px;
    margin: 0px;
    padding: 0px 10px 0px 15px;
  }
  .dropdown .dropdown-menu2 li a:hover {
    color: #ee6600;
  }
}
.nav .sreach {
  background: #fff;
  border: 1px solid #ced3d9;
  box-sizing: border-box;
  border-radius: 4px;
  height: 40px;
  padding-left: 4px;
  width: 320px;
  line-height: 40px;
  margin-top:5px;
}
:deep(.el-form-item)  {
  margin: 0;
}
:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
:deep(.el-input__wrappe) r {
  box-shadow: none;
  border-radius: 0;
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  margin-right: 10px;
}
:deep(.el-input__wrapper:hover)  {
  box-shadow: none;
  border-radius: 0;
  border-right: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
}
</style>
