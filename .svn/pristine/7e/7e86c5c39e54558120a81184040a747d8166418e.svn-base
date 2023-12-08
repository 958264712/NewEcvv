<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["companyname", "companyCardInfo","companyarea","countryName"]);
const isShow = ref(false);
const title = ref('')
const handlemouseOver = (val) => {
  isShow.value = val;
};
const calTime = (e) => {
  if (String(e) == "undefined") return;
  let d = new Date();
  let utc = d.getTime() + d.getTimezoneOffset() * 6e4;
  let nd = new Date(utc + 36e5 * e);
  var t = nd.toString();
  let n = t.split(" ");
  let r = "";
  if (
    navigator.appName == "Microsoft Internet Explorer" &&
    parseInt(navigator.appVersion) >= 3
  ) {
    var i = n[3].split(":");
    r = i[0] + (":" + i[1]);
  } else {
    var i = n[4].split(":");
    r = i[0] + (":" + i[1]);
  }

  title.value = "Local Time:" + r + (" " + n[0] + " " + n[1] + " " + n[2]);
};

</script>
<template>
  <div class="app-companyTopBar">
    <div class="app-companyCard">
      <div
        id="company-card"
        @mouseover="handlemouseOver(true)"
        @mouseleave="handlemouseOver(false)"
      >
        <strong :title="props.companyname"> {{ props.companyname }}</strong
        ><span class="cc-interval">|</span> Sourcing Services
      </div>

      <div
        id="company-card-main"
        class="box-shadow"
        v-show="isShow"
        @mouseover="handlemouseOver(true)"
        @mouseleave="handlemouseOver(false)"
      >
        <div class="boxflex">
          <div id="container"></div>
          <div id="company-card-main-content" class="company-card">
            <h3>{{ props.companyname }}</h3>
            <div class="meta">
              [ {{ props.companyarea }},
              {{ props.countryName }} ]
              <span
                class="location-icon"
                :title="title"
                @mouseover="calTime(8)"
              >
              </span>
            </div>
            <div class="meta" :key="item" :id="item" v-show="item.length" v-for="(item,key,index) in props.companyCardInfo">
              {{key}}: <strong> {{item}}</strong>
            </div>
          </div>
        </div>
        <ul id="trustworthy-icons">
          <li
            class="ct-icon-onsite"
            title="The company's premises has been checked by ecvv.com. The legality of the company has been confirmed by China Industrial and Commercial Bureau."
          >
            <a
              href="https://www.ecvv.com/services/China_Premium_Supplier.html#LicenseVerified"
              rel="nofollow"
              class="sesame-click-target"
              ><i class="lice-logo"></i>Onsite operations checked and legal status confirmed</a
            >
          </li>
        </ul>
      </div>
    </div>
    <ul id="company-topbar">
      <li
        class="ct-icon-onsite"
        title="The company's premises has been checked by ecvv.com. The legality of the company has been confirmed by China Industrial and Commercial Bureau. "
      >
        <a
          href="https://www.ecvv.com/services/China_Premium_Supplier.html#LicenseVerified"
          rel="nofollow"
          class="sesame-click-target"
          ><i class="lice-logo"></i>Onsite Check</a
        >
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
ul{
  padding:0;
}
.app-companyTopBar {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  #company-topbar,#trustworthy-icons .ct-icon-onsite a {
    display: block;
    height: 16px;
    line-height: 16px;
    vertical-align: text-top;
    font-family: Tahoma;
    font-size: 11px;
    -webkit-text-size-adjust: none;
    color: #666;
    background-position: 0 -400px;
    .lice-logo {
      background-position: 0 -30px;
      height: 25px;
      width: 20px;
      margin-right: 5px;
      vertical-align: middle;
      background-image: url("@/assets/images/Content_images/sprites-small.png");
      background-repeat: no-repeat;
      display: inline-block;
    }
  }
  #company-card {
    height: 25px;
    border-bottom: none;
    padding-right: 15px;
    line-height: 25px;
    cursor: pointer;
    overflow: hidden;
    background-color: #f5f5f5;
    background-position: -1px 5px;
    position: absolute;
    border: 1px solid #fff;
    font-size: 12px;
    &::before {
      content: "";
      width: 14px;
      height: 14px;
      display: inline-block;
      background: url(//www.ecvv.com/newcompany/images/sprites-step.png)
        no-repeat 0 0;
    }
    strong {
      font-weight: 700;
      color: #f60;
    }
    .cc-interval {
      color: #ccc;
      padding: 0 10px;
    }
  }
  #company-card-main {
    border-top: none;
    margin-top: 25px;
    padding: 15px;
    font-size: 11px;
    font-family: Tahoma;
    z-index: 999;
    position: absolute;
    border: 1px solid #fff;
    #company-card-main-content {
      border-top: 1px dotted #ddd;
    }
    #company-card-main-content h3 {
      margin: 10px 0;
      font-size: 12px;
    }
    .company-card {
      color: #333;
    }
    .meta {
      color: #666;
      line-height: 1.5;
      font-family: Tahoma;
      margin-bottom: 8px;
      margin-left: 10px;
      strong {
        color: #000;
        font-weight: 400;
      }
      .location-icon {
        background: url(//www.ecvv.com/newcompany/images/sprites-step.png)
          no-repeat scroll 0 -257px;
        display: inline-block;
        height: 18px;
        vertical-align: middle;
        width: 18px;
      }
    }
  }
}
.box-shadow {
  background-color: #fff !important;
  border-color: #ddd !important;
  -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.13);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.13);
}
</style>
