<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isSearch = ref(false);
const props = defineProps(["companyCateGroup", "subDomainName"]);

const clickHref = () => {
  window.open(
    `https://www.ecvv.com/company/${props.subDomainName}/products.html`,
    "_blank"
  );
};

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
    window.location =
      "/company/" + userName + "/products.html?keyword=" + GE("KeyWord").value;
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
      //window.location.href="/product/P1T1ICY0G0Z0K/"+ReplaceUrl(GE("ECVVKeyWord").value)+".html";
      window.location.href =
        "//www.ecvv.com/product/Search.html?kw=" +
        ReplaceUrl(GE("ECVVKeyWord").value);
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
</script>
<template>
  <div class="PCcols" id="divProductCategories">
    <div class="m-box-header mb10">
      <h3 title="">Product Categories</h3>
    </div>
    <div class="PCcol-right">
      <div class="content-wrap">
        <div class="content">
          <div class="products-container">
            <template v-for="(item,index) in props.companyCateGroup" :key="item">
            <div class="m-box-header small-class">
              <h3>{{ item.name }}</h3>
              <a
                class="more-sim"
                :href="item.url" :title="item.name"
              >
                View more &gt;&gt;</a
              >
            </div>
            <ul class="first-ptn">
              <li class="" v-for="(i,ind) in item.groupProList" :key="i.pid">
                <div class="list-item">
                  <div class="product-img abs-center">
                    <a
                     :href="i.productUrl" :title="i.productname"
                      target="_blank"
                    >
                      <img
                        :alt="i.productname"
                        :src="i.picPath"
                      />
                    </a>
                  </div>
                  <div class="product-title">
                    <a
                     :href="i.productUrl" :title="i.productname"
                      target="_blank"
                    >{{i.productname}}</a
                    >
                  </div>
                </div>
              </li>
            </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="col-left">
      <div class="search-box">
        <input
          class="products-key-words"
          type="text"
          placeholder="Search products here"
          id="KeyWord"
          name="SearchText"
          @keydown="(e)=>ValidateInput(e, `${props.subDomainName}`)"
        />
        <input
          class="submit"
          type="submit"
          value="Search"
          @click="searchProduct(`${props.subDomainName}`)"
        />
      </div>
      <div class="m-box-wrap app-product-group">
        <ul class="productgroup-list">
          <li v-for="(item, index) in props.companyCateGroup" :key="item">
            <a :href="item.url" :title="item.name">{{ item.name }}</a>
          </li>
          <li class="menu-footer">
            <a @click="clickHref()">See All Categories</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<style lang="less" scoped>
a {
  cursor: pointer;
}
.m-box-header {
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  height: 28px;
  line-height: 28px;
}
.m-box-header h3 {
  font-size: 16px;
  font-weight: 700;
  float: left;
  overflow: hidden;
  padding-left: 15px;
  word-wrap: normal;
  white-space: nowrap;
}
.PCcols:after,
.PCcol-left:after,
.select-products-main:after,
.small120-products:after {
  clear: both;
  content: " ";
  display: block;
  height: 0;
}
.PCcols {
  padding-bottom: 8px;
  zoom: 1;
}
/*PCcol-right*/
.PCcol-right {
  float: left;
  width: 100%;
  min-height: 1px;
}
.PCcol-right .content-wrap {
  margin-left: 198px;
  margin-top: 10px;
}
/*products-container*/
.products-container ul {
  padding-top: 15px;
  overflow: hidden;
}
.products-container ul li {
  float: left;
  width: 222px;
  height: 320px;
  margin-right: 35px;
  position: relative;
}
.products-container ul li.last-product {
  margin-right: 0;
}
.products-container ul li .list-item {
  position: relative;
  height: 320px;
}
.products-container .product-img {
  border: 1px solid #eee;
  height: 220px;
  width: 220px;
  line-height: 220px;
  overflow: hidden;
  position: relative;
}
.products-container .product-img a{
  display:flex;
  justify-content:center;
  align-items:center;
}
.products-container .product-img:hover {
  border: 1px solid #ccc;
}
.products-container .product-img img {
  max-width: 220px;
  max-height: 220px;
  overflow: hidden;
}
.products-container .product-title a {
  color: #666;
  display: block;
  line-height: 16px;
  margin: 15px 0 5px;
  width: 220px;
  text-overflow: ellipsis;
  height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-align:center
}
.products-container .product-title a:visited {
  color: #996699;
}
.products-container .product-title a:hover {
  color: #ee6600;
  text-decoration: underline;
}
.products-container .product-info {
  color: #666;
  font-family: tahoma;
}
.products-container .ico-add {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 36px;
  width: 36px;
}
.icon-product-item-add {
  background-position: -36px -449px;
  width: 36px;
  height: 36px;
}
.icon-product-item-checked {
  background-position: -108px -449px;
  width: 36px;
  height: 36px;
}
.icon-product-item-checked:hover {
  background-position: -72px -449px;
  width: 36px;
  height: 36px;
}
.list-item-hover .icon-product-item-add {
  background-position: 0 -449px;
}
.col-left {
  margin-left: -100%;
  width: 190px;
  float: left;
  margin-top: 10px;
}
.col-left .search-box {
  margin-bottom: 10px;
  height: 35px;
}
.col-left .search-box .products-key-words {
  border: 1px solid #ddd;
  float: left;
  width: 141px;
  height: 35px;
  margin: 0 0 10px;
  padding: 6px 4px;
  line-height: 12px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
}
.col-left .search-box .submit {
  float: left;
  width: 39px;
  height: 35px;
  text-indent: -9999px;
  border: none;
  background-position: -112px -256px;
  cursor: pointer;
}
.productgroup-list {
  padding: 0;
}
.productgroup-list li {
  display: block;
  float: none;
  border-bottom: 1px solid #eee;
  padding: 6px 0 6px 15px;
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;
}
.productgroup-list li a {
  color: #333;
  text-decoration: none;
  padding-right: 10px;
}
.productgroup-list li a:hover,
.productgroup-list li .current {
  color: #ee6600;
}
.productgroup-list li.menu-footer a,
.productgroup-list li.menu-footer a:link,
.productgroup-list li.menu-footer a:visited,
.productgroup-list li.menu-footer a:hover {
  color: #333;
  font-weight: 700;
}
/*左侧列表加数字*/

.productgroup-list li span {
  color: #999;
}
.small-class .more-sim {
  float: right;
  margin-right: 50px;
  font-size: 12px;
  font-weight: 300;
  color: #666;
}
</style>
