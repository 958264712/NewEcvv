<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps(["companyname", "description"]);
</script>
<template>
  <div class="header-warp">
    <div class="header">
      <table>
        <tbody>
          <tr>
            <td class="company-logo">
              <a
                href="https://www.ecvv.com/company/betty-glass/index.html"
                rel="nofollow"
              >
                <img
                  src="https://upload.ecvv.com/upload/UserImage/20200528/YanchengForeignTradeCoLtd_a597be45-e29a-4339-a3cb-1a4d0d0365b5.png"
                  alt="Yancheng Really Houseware Corp., Ltd."
                  class="examp"
                  onerror="this.style.display='none'"
                />
              </a>
            </td>

            <td class="company-name">
              <a
                class="examp"
                href="https://www.ecvv.com/company/betty-glass/index.html"
              >
                {{ props.companyname }}</a
              >

              <h3>
                {{ props.description }}
              </h3>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="supplier-badge gold">
        <div class="supplier-badge-num">
          <span class="y">17</span><span class="t">th</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header-warp {
  .header {
    position: relative;
    overflow: hidden;
    width: 100%;
    table {
      height: 100%;
      margin-left: 50px;
      word-break: keep-all;
      word-wrap: break-word;
      border-collapse: collapse;
      table-layout: auto;
      td {
        vertical-align: middle;
      }
    }
    .company-logo .examp {
      max-height: 100px;
      max-width: 100px;
    }
    .company-name {
      padding-left: 15px;
      max-width: 610px;
      width: 610px;
      padding-bottom: 15px;
      .examp {
        font-family: Tahoma;
        font-size: 32px;
        line-height: 36px;
        margin-bottom: 5px;
        display: block;
        & > span {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      h3 {
        font-size: 12px;
        font-weight: 500;
      }
    }
    .supplier-badge {
      height: 37px;
      width: 210px;
      position: absolute;
      top: 10px;
      right: -1px;
      display: block;
    }
    .supplier-badge-verified {
      height: 37px;
      width: 210px;
      position: absolute;
      top: 50px;
      right: -1px;
      display: block;
    }
    .verified {
      background-position: -13px -530px;
    }

    .supplier-badge-num {
      display: inline-block;
      margin-left: 112px;
      font-weight: 700;
      position: relative;
    }
    .supplier-badge-num span {
      float: left;
    }
    .supplier-badge-num .y {
      font-size: 22px;
      position: relative;
    }
    .supplier-badge-num .t {
      margin-top: 3px;
      margin-left: 3px;
      font-size: 14px;
    }
    .diamond .supplier-badge-num {
      color: #2d35f3;
    }
    .platinum .supplier-badge-num {
      color: #333;
    }
    .gold .supplier-badge-num {
      color: #d26d00;
    }
    .header .supplier-badge-num {
      display: inline-block;
      margin-left: 112px;
      font-weight: 700;
      position: relative;
      .y {
        font-size: 22px;
        position: relative;
      }
      span {
        float: left;
      }
    }
    .diamond {
      background-position: -13px -43px;
    }
    .platinum {
      background-position: -13px -80px;
    }
    .gold {
      background-position: -13px -117px;
    }
    .verified .verified-type {
      margin-left: 47px;
      width: 58px;
      height: 28px;
      font-size: 12px;
      color: #e00020;
      font-weight: 600;
      float: left;
      line-height: 12px;
      margin-top: 9px;
    }
    .verified .verified-org {
      margin-left: 6px;
      font-size: 11px;
      height: 37px;
      float: left;
      color: #e00020;
      font-weight: 700;
      vertical-align: middle;
      line-height: 37px;
      overflow: hidden;
    }
  }
}
</style>
