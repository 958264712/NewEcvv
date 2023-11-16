<script lang="ts" setup>
import {ref} from 'vue'

const isShow = ref(false)
const isShow1 = ref(false)
const handleShow = (item,val) => {
    if(item === 'isShow'){
        isShow.value = val
    }else{
        isShow1.value = val
    }
}
</script>
<template>
  <div class="nav-warp">
    <div class="nav">
      <ul class="nav-tabs2">
        <li class="tab current">
          <a
            class="tab-link"
            href="https://www.ecvv.com/company/betty-glass/index.html"
          >
            Home<b class="no-triangle"></b
          ></a>
        </li>
        <li class="tab dropdown">
          <a
            class="tab-link"
            href="https://www.ecvv.com/company/betty-glass/products.html"
            @mouseover="handleShow('isShow',true)"
            @mouseleave="handleShow('isShow',false)"
            >Product Categories<b class="triangle"></b
          ></a>
          <ul class="dropdown-menu2" v-show="isShow">
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/42426.html"
                >Glass Dome Decoration</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/46223.html"
                >Glass Terrarium Vase</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/243899.html"
                >Metal Frame Glass Terrarium</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/46222.html"
                >Laboratory Glassware</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/46221.html"
                >Glass Cup and Teapot</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/197677.html"
                >Christmas Ornaments</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/42424.html"
                >Artificial Decorative Flower</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/42417.html"
                >Epidemic Mask</a
              >
            </li>
            <li>
              <a
                href="https://www.ecvv.com/company/betty-glass/catalog/84174.html"
                >Solar Products</a
              >
            </li>
          </ul>
        </li>
        <li class="tab dropdown">
          <a
            class="tab-link"
            href="https://www.ecvv.com/company/betty-glass/profile.html"
            @mouseover="handleShow('isShow1',true)"
            @mouseleave="handleShow('isShow1',false)"
          >
            Company Profile<b class="triangle"></b
          ></a>
          <ul class="dropdown-menu2" v-show="isShow1">
            <li class="">
              <a
                title="company introduction"
                href="https://www.ecvv.com/company/betty-glass/profile.html"
                >Company Introduction</a
              >
            </li>
            <li class="">
              <a
                title="License Verify"
                href="https://www.ecvv.com/company/betty-glass/license-verify.html"
                >License Verify</a
              >
            </li>
            <li>
              <a
                title="Payment Terms"
                href="https://www.ecvv.com/company/betty-glass/column/PayMent_Terms.html"
                rel="nofollow"
                >Payment Terms</a
              >
            </li>
            <li>
              <a
                title="Quality Control"
                href="https://www.ecvv.com/company/betty-glass/column/Quality_Control.html"
                rel="nofollow"
                >Quality Control</a
              >
            </li>
            <li>
              <a
                title="R&amp;D"
                href="https://www.ecvv.com/company/betty-glass/column/R_D.html"
                rel="nofollow"
                >R&amp;D</a
              >
            </li>
            <li>
              <a
                title="Trade Show"
                href="https://www.ecvv.com/company/betty-glass/column/Trade_Show.html"
                rel="nofollow"
                >Trade Show</a
              >
            </li>
            <li>
              <a
                title="Factory Tour"
                href="https://www.ecvv.com/company/betty-glass/column/Factory_Tour.html"
                rel="nofollow"
                >Factory Tour</a
              >
            </li>
          </ul>
        </li>
        <li class="tab">
          <a
            class="tab-link"
            href="https://www.ecvv.com/company/betty-glass/contact.html"
            >Contacts<b class="no-triangle"></b>
          </a>
        </li>
        <li class="tab">
          <a
            class="tab-link"
            href="https://www.ecvv.com/company/betty-glass/products-map.html"
            >Products Map<b class="no-triangle"></b>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" setup>
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
