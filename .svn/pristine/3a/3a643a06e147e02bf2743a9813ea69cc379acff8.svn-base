<script lang="ts" setup>
import {ref} from 'vue'

const props = defineProps(["companyCateGroup","companyProfile","subDomainName "])
const isShow = ref(false)
const isShow1 = ref(false)
const handleShow = (item,val) => {
    if(item === 'isShow'){
        isShow.value = val
    }else{
        isShow1.value = val
    }
}
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
</script>
<template>
  <div class="nav-warp">
    <div class="nav">
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
            @mouseover="handleShow('isShow',true)"
            @mouseleave="handleShow('isShow',false)"
            >Product Categories<b class="triangle"></b
          ></a>
          <ul class="dropdown-menu2" v-show="isShow" @mouseover="handleShow('isShow',true)"
            @mouseleave="handleShow('isShow',false)">
            <li v-for="(item,index) in props.companyCateGroup" :key="item">
                <a
                  :title="item.name"
                  :href="item.url"
                  >{{item.name}}</a
                >
              </li>
          </ul>
        </li>
        <li class="tab dropdown">
          <a
            class="tab-link"
            @click="clickProfile"
            @mouseover="handleShow('isShow1',true)"
            @mouseleave="handleShow('isShow1',false)"
          >
            Company Profile<b class="triangle"></b
          ></a>
          <ul class="dropdown-menu2" v-show="isShow1" @mouseover="handleShow('isShow1',true)"
            @mouseleave="handleShow('isShow1',false)">
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
    </div>
  </div>
</template>
<style lang="less" scoped>
    .nav-tabs2 {
      margin: 0;
      padding: 0 20px;
      display: flex;
      height: 33px;
      line-height: 33px;
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
      font: bold 14px/33px arial;
      padding: 0 15px;
      position: relative;
      text-decoration: none;
      height: 33px;
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
      margin-top: 15px;
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
    .nav-tabs2 li:hover  a.tab-link .triangle {
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
</style>
