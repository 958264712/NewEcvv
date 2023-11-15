<script setup lang="ts">
import { ref } from "vue";

const isShow = ref(false);
const title = ref("");
const handlemouseOver = (val) => {
  isShow.value = val;
};
const calTime = (e) => {
  if (String(e) == "undefined") return;
let d = new Date()
let utc = d.getTime() + d.getTimezoneOffset() * 6e4;
let nd = new Date(utc + 36e5 * e);
var t = nd.toString()
let n = t.split(" ")
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

  title.value = "Local Time:"+ r + (" " + n[0] + " " + n[1] + " " + n[2]);
  
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
        <strong title="Yancheng Really Houseware Corp., Ltd.">
          Yancheng Really Houseware Corp., Ltd.</strong
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
            <h3>Yancheng Really Houseware Corp., Ltd.</h3>
            <div class="meta">
              [ Jiangsu, China ]
              <span
                class="location-icon"
                :title="title"
                @mouseover="calTime(8)"
              >
              </span>
            </div>

            <div class="meta" id="BussinessTypeValueStr">
              Business Type: <strong> Sourcing Services</strong>
            </div>

            <div class="meta" id="BrandName">
              Brand(s): <strong> betty</strong>
            </div>

            <div class="meta" id="MainMarketValueStr">
              Main Markets:
              <strong>
                North America, South America, Eastern Europe, Southeast Asia,
                Africa, Oceania, Mid East, Eastern Asia, Western Europe</strong
              >
            </div>

            <div class="meta" id="MainCustomer">
              Main Customer: <strong> USA, Germany, UK, Hongkong, UAE</strong>
            </div>

            <div class="meta" id="MainProduct1">
              Main Product:
              <strong>
                Glass Dome Vase, Laboratory Glassware, Glass Terrarium Vase,
                Glass Jewelry, Christmas Glass Pendant, Glass Angel, Solar Lamp,
                Solar Water Heater</strong
              >
            </div>

            <div class="meta" id="Foundtime">
              Year Established: <strong> 2000</strong>
            </div>

            <div class="meta" id="LegalRepresentative">
              Legal Representative: <strong> Hongdi He</strong>
            </div>

            <div class="meta" id="FactoryLocation">
              Factory Location: <strong> Yancheng, Jiangsu Province</strong>
            </div>

            <div class="meta" id="YearsOEMExperience">
              Years OEM Experience: <strong> 20</strong>
            </div>

            <div class="meta" id="ProductionLineNum">
              Production Line Count: <strong> 8</strong>
            </div>

            <div class="meta" id="OwnershipType">
              Ownership Type: <strong> LLC (Ltd Liability Corp)</strong>
            </div>

            <div class="meta" id="EmployeesCount">
              Employ Number: <strong> 101 - 500 People</strong>
            </div>

            <div class="meta" id="AnnualSalesVolume">
              Annual Sales Volume:
              <strong> US$5 Million - US$10 Million</strong>
            </div>

            <div class="meta" id="RegisteredCapital">
              Registered Capital:
              <strong> US$101 Thousand - US$500 Thousand</strong>
            </div>

            <div class="meta" id="ExportPercentage">
              Export Percentage: <strong> 81% - 90%</strong>
            </div>

            <div class="meta" id="FactorySize">
              Factory Size: <strong> 3,000-5,000 square meters</strong>
            </div>

            <div class="meta" id="QA_QC">QA/QC: <strong> In House</strong></div>

            <div class="meta" id="RDStaffCountNum">
              Number of R&amp;D Staff: <strong> 21 - 30 People</strong>
            </div>

            <div class="meta" id="QCStaffCountNum">
              Number of QC Staff: <strong> 11 - 20 People</strong>
            </div>
          </div>
        </div>
        <ul id="trustworthy-icons">
          <li
            class=""
            title="The company's premises has been checked by ecvv.com. The legality of the company has been confirmed by China Industrial and Commercial Bureau."
          >
            <a
              href="https://www.ecvv.com/services/China_Premium_Supplier.html#LicenseVerified"
              rel="nofollow"
              class="sesame-click-target"
              ><i class="lice-logo"></i></a
            >Onsite operations checked and legal status confirmed
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
<style lang="less" setup>
.app-companyTopBar {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  #company-topbar .ct-icon-onsite a {
    display: block;
    height: 16px;
    line-height: 16px;
    vertical-align: text-top;
    padding-left: 20px;
    margin: 0 10px 5px 0;
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
