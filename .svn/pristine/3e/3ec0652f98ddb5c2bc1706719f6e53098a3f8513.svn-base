<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";

const props = defineProps([
  "companyname",
  "companyCardInfo",
  "companyarea",
  "countryName",
  "companyPic"
]);
const isShow = ref(false);
const title = ref("");
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
  <div class="company_header">
    <div class="sr-layout-wrap">
      <div class="sr-comInfo-logo">
        <a
          href="https://luminlighting.en.made-in-china.com"
          :title="props.companyname"
        >
          <img
            :src="props.companyPic[1]"
            :alt="props.companyname"
            style="display: inline"
          />
        </a>
      </div>
      <div class="sr-comInfo-r">
        <div
          class="sr-comInfo-title J-title-comName in-pc"
          @mouseover="handlemouseOver(true)"
          @mouseleave="handlemouseOver(false)"
        >
          <div class="title-txt">
            <a href="https://luminlighting.en.made-in-china.com">
              <h1>{{ props.companyname }}<i class="ob-icon icon-down"></i></h1>
            </a>
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
                  [ {{ props.companyarea }}, {{ props.countryName }} ]
                  <span
                    class="location-icon"
                    :title="title"
                    @mouseover="calTime(8)"
                  >
                  </span>
                </div>

                <div
                  class="meta"
                  :key="item"
                  :id="item"
                  v-show="item.length"
                  v-for="(item, key, index) in props.companyCardInfo"
                >
                  {{ key }}: <strong> {{ item }}</strong>
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
          <div class="sr-comInfo-details J-comInfo-details">
            <div class="details-cnt">
              <div class="cf">
                <div class="detail-col col-1">
                  <div class="detail-address">
                    <i class="ob-icon icon-coordinate"></i>
                    Guangdong, China
                  </div>
                  <div class="detail-address-map showLocation">
                    <div class="showLocation-content" style="display: block">
                      <div class="showLocation-map"></div>
                      <div
                        class="showLocation-arrow showLocation-arrow-top"
                      ></div>
                      <div
                        class="showLocation-mark animate-start showLocation-Guangdong"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="detail-col col-2">
                  <div class="detail-infos">
                    <div class="info-item">
                      <div class="info-label">
                        <i class="ob-icon icon-yes2"></i>Business Type:
                      </div>
                      <div class="info-fields">
                        Manufacturer/Factory &amp; Trading Company
                      </div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">
                        <i class="ob-icon icon-yes2"></i>Year of Establishment:
                      </div>
                      <div class="info-fields">2013-08-06</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">
                        <i class="ob-icon icon-yes2"></i>Registered Capital:
                      </div>
                      <div class="info-fields">1.48 Million USD</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">
                        <i class="ob-icon icon-yes2"></i>Plant Area:
                      </div>
                      <div class="info-fields">2100 square meters</div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">
                        <i class="ob-icon icon-yes2"></i>Average Lead Time:
                      </div>
                      <div class="info-fields">
                        Peak Season Lead Time: one month<br />
                        Off Season Lead Time: within 15 workdays
                      </div>
                    </div>
                    <div class="info-item">
                      <div class="info-label">
                        <i class="ob-icon icon-yes2"></i>OEM/ODM Availability:
                      </div>
                      <div class="info-fields">Yes</div>
                    </div>
                  </div>
                </div>
                <div class="detail-col col-1">
                  <div class="detail-infos">
                    <div class="info-item">
                      <i class="ob-icon icon-yes2"></i>OEM/ODM Service
                    </div>
                    <div class="info-item">
                      <i class="ob-icon icon-yes2"></i>Sample Available
                    </div>
                    <div class="info-item">
                      <i class="ob-icon icon-yes2"></i>Overseas Agent / Branch
                    </div>
                    <div class="info-item">
                      <a
                        href="https://www.made-in-china.com/BookFactoryTour/IMRmDLvcafHV"
                        target="_blank"
                        rel="nofollow"
                        ><i class="ob-icon icon-shop"></i>Visit My Factory</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <p class="detail-intro">
                LED Grow Light, LED High Bay Light, IP65 Linear Light
                manufacturer / supplier in China, offering Real 3D Vision Blue
                Sky LED Panel Artificial Skylight Panel Light, 6500K Ra&gt;90
                1200*300 SMD5050 RGB LED Panel Light, Ceiling Panel LED Skylight
                Artificial Circadian Rhythm Natural Daylight Sunshine Blue Sky
                and so on.
              </p>
            </div>
            <div class="details-footer">
              <a
                target="_blank"
                href="https://www.made-in-china.com/sendInquiry/shrom_IMRmDLvcafHV_IMRmDLvcafHV.html?plant=en&amp;from=shrom&amp;type=cs&amp;style=2&amp;page=home"
                class="option-item"
                rel="nofollow"
              >
                <i class="ob-icon icon-mail"></i>Contact Supplier
              </a>
              <b
                class="tm3_chat_status"
                lan="en"
                tmlan="en"
                dataid="IMRmDLvcafHV_IMRmDLvcafHV_3"
                inquiry="https://www.made-in-china.com/sendInquiry/shrom_IMRmDLvcafHV_IMRmDLvcafHV.html?plant=en&amp;from=shrom&amp;type=cs&amp;style=2&amp;page=home"
                processor="chat"
                cid="IMRmDLvcafHV"
                style="display: none"
                state="initialized"
              ></b
              ><a
                rel="nofollow"
                ads-data="st:13"
                class="tm-status-on"
                href="javascript:void('Chat Now')"
                title="Chat with supplier online now!"
                >Chat with Supplier</a
              >
            </div>
          </div>
        </div>
        <div class="sr-comInfo-sign">
          <div class="sign-item">
            <i class="item-icon icon-diamond"></i> Diamond Member
            <span class="txt-year">Since 2013</span>
            <div class="tip arrow-top tip-gold">
              <div class="tip-con">
                <p class="tip-para">
                  Suppliers with verified business licenses
                </p>
              </div>
              <span class="arrow arrow-out">
                <span class="arrow arrow-in"></span>
              </span>
            </div>
          </div>
          <div
            class="sign-item as-logo"
            data-title="Audited by an independent third-party inspection agency"
          >
            <img
              class="item-icon"
              src="https://www.micstatic.com/common/img/as/ico-as.png"
              alt=""
            />
            Audited Supplier
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
      </div>

      <div class="sr-comInfo-components">
        <div class="payRequest" @click="queryRFQ">
          <i title="One request, multiple quotes" />
          <a
            title="Easy Sourcing More Convenient, More Efficient"
            target="_blank"
            >Post Sourcing Request</a
          >
        </div>
        <div class="chat-feedback">
          <span class="spirits-small s21"></span
          ><a
            rel="nofollow"
            onclick="ChatSkype('betty-he552','779973','-1','https://www.ecvv.com/company/betty-glass/index.html','_detectEcvvSkypeClient');"
          >
            Chat Now</a
          >
        </div>
        <div style="text-align: center; padding: 5px 0 0 0">
          <div class="clearfix">Join ECVV community</div>
          <div style="height: 25px; line-height: 25px">
            <div id="fb-root1">
              <iframe
                src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fecvvchina&amp;width=50&amp;layout=button&amp;action=like&amp;show_faces=true&amp;share=false&amp;height=20"
                scrolling="no"
                frameborder="0"
                style="
                  border: none;
                  overflow: hidden;
                  width: 50px;
                  height: 20px;
                "
                allowtransparency="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.company_header {
  .sr-layout-wrap {
    max-width: 1480px;
    min-width: 768px;
    width: 100%;
    height: 100px;
    margin: 0 auto;
    padding: 0 20px;
    *zoom: 1;
    .sr-comInfo-components {
      width: 600px;
      height: 100%;
      padding-left: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .payRequest {
        background-color: #fff;
        width: 200px;
        display: flex;
        // flex-direction: column;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        align-items: center;
        padding: 5px 0;
        cursor: pointer;
      }

      .payRequest i:before {
        content: "";
        display: block;
        width: 32px;
        height: 32px;
        background: url("@/assets/images/Icon/targetBlue.png") no-repeat center
          center;
      }

      .payRequest a {
        color: #0f55ae;
        display: block;
        text-align: center;
      }
      .chat-feedback span {
        width: 19px;
        height: 18px;
        vertical-align: middle;
        margin-right: 5px;
      }
      .chat-feedback {
        padding-left: 10px;
        margin-bottom: 1px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
      }
      .chat-feedback a {
        color: #333;
        font-weight: 700;
        display: inline-block;
      }
      .s21 {
        background-position: -30px -60px;
      }
      .spirits-small {
        background-image: url("@/assets/images/Content_images/sprites-small.png");
        background-repeat: no-repeat;
        display: inline-block;
        background-position: -30px -60px;
      }
    }
    .sr-comInfo-logo {
      float: left;
      font-size: 0;
      margin-right: 15px;
      position: relative;
      height: 60px;
      line-height: 60px;
      img {
        max-width: 120px;
        max-height: 60px;
        vertical-align: middle;
      }
    }
    .sr-comInfo-r {
      float: left;
      width: calc(50% - 60px);
      .sr-comInfo-title {
        position: relative;
        display: inline-block;
        #company-card-main {
          border-top: none;
          padding: 15px;
          font-size: 11px;
          font-family: Tahoma;
          background-color: #fff;
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
        .title-txt {
          font-size: 18px;
          display: block;
          word-wrap: break-word;
          word-break: break-word;
          font-weight: bold;
          a {
            display: block;
            color: #222;
            .icon-down {
              display: inline-block;
            }
            .ob-icon {
              transition: transform 0.2s ease, -webkit-transform 0.2s ease;
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
            .ob-icon.icon-down:before {
              content: "\f078";
            }
          }
        }
        .sr-comInfo-details {
          border: 1px solid #e6ecf2;
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
          width: 1000px;
          position: absolute;
          background: #fff;
          display: none;
          z-index: 99;
          .details-cnt {
            padding: 30px 30px 0 30px;
            .detail-col.col-1 {
              width: 200px;
            }
            .detail-col.col-2 {
              width: 475px;
            }
            .detail-col {
              float: left;
              margin-right: 30px;
              min-height: 181px;
              .detail-address {
                margin-bottom: 10px;
              }
              .detail-address-map {
                position: relative;
                width: 200px;
                height: 176px;
              }
            }
            .detail-intro {
              margin: 10px 0 20px 0;
              color: #888;
            }
          }
          .details-footer {
            border-top: 1px solid #e6ecf2;
            padding: 20px 30px;
          }
        }
      }
      .sr-comInfo-sign {
        margin-top: 5px;
        .sr-comInfo-sign .sign-item .txt-year {
          color: #e64545;
        }
      }
      .sr-comInfo-sign .sign-item .icon-diamond {
        background: url("https://www.micstatic.com/athena/2017/img/common/icon-diamond_c1f4757f.png")
          no-repeat center;
      }
      .sr-comInfo-sign .sign-item .item-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 3px;
        vertical-align: -5px;
      }
      .sr-comInfo-sign .sign-item {
        float: left;
        margin-right: 15px;
        color: #555;
      }
      .sr-comInfo-sign .sign-item .txt-year {
        color: #e64545;
      }
      .sr-comInfo-sign .sign-item .tip-gold {
        z-index: 35;
        display: none;
        width: 271px;
        background: #fff;
        border: 1px solid #fff;
        padding: 10px 10px 5px;
        top: 32px;
        left: -9px;
        border-radius: 10px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12),
          0px 6px 10px rgba(0, 0, 0, 0.06), 0px 9px 16px rgba(0, 0, 0, 0.03);
      }
      .tip {
        position: absolute;
        padding: 10px 10px;
        border-radius: 3px;
        font-size: 12px;
        line-height: 1.5;
        color: #555;
        background: #fff;
        border: 1px solid #ced3d9;
        box-shadow: 2px 2px 3px rgba(0, 33, 66, 0.1);
      }
      .sr-comInfo-sign .sign-item .tip-gold .arrow-out {
        left: 10px;
        border-color: transparent;
      }
      .tip.arrow-top .arrow-out {
        border-bottom: 8px solid #ced3d9;
        left: 10px;
        top: -16px;
      }
      .tip .arrow {
        position: absolute;
        zoom: 1;
        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        border: 8px dashed transparent;
      }
      .tip .tip-con .tip-para:last-child,
      .tip .tip-con .tip-para.last-child {
        margin-bottom: 0;
      }
      .tip .tip-con .tip-para {
        margin: 0 0 10px 0;
      }
      .sr-comInfo-sign .sign-item .tip-gold .arrow-out {
        left: 10px;
        border-color: transparent;
      }
      .tip.arrow-top .arrow-out {
        border-bottom: 8px solid #ced3d9;
        left: 10px;
        top: -16px;
      }
      .tip.arrow-top .arrow-in {
        border-bottom: 8px solid #fff;
        margin: -7px 0 0 -8px;
      }
      .sr-comInfo-sign .sign-item .item-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 3px;
        vertical-align: -5px;
      }
    }
  }
  .sr-layout-wrap:before,
  .sr-layout-wrap:after {
    content: "";
    display: table;
  }
  #trustworthy-icons .sesame-click-target,
  #company-topbar .ct-icon-onsite a {
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
  #trustworthy-icons {
    padding: 0;
    li {
      display: flex;
    }
  }
}
</style>
