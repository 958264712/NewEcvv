<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import PicZoom from "vue3-piczoom";
import { useRouter } from "vue-router";

const props = defineProps(['handleStartOrder',"title", 'ProductInfo']);
const router = useRouter();
const picPathList = ref<any>([
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb1wqogsvxxxxbaxfxxq6xxfxxxhadjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb1oitsvxxxxb2xvxxq6xxfxxxyadjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb1kpfrsvxxxxbmapxxq6xxfxxxeadjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb1t4ssvxxxxazapxxq6xxfxxx1adjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb1jfl2svxxxxbfaxxxq6xxfxxxtadjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb130psvxxxxbtxvxxq6xxfxxxcadjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb130psvxxxxbtxvxxq6xxfxxxcadjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
  "https://upload.ecvv.com/upload/SMT/0000466/32826457142-kfhtb130psvxxxxbtxvxxq6xxfxxxcadjustable-wall-lamp-modren-simple-6w-black-white-led-wall-lighting-for-study-room-living-room.jpg",
]);
const picUrl = ref(picPathList.value[0]);
// 判断移动距离
let num = 0;
const clickCarousel = (val) => {
  const hidden = document.getElementsByClassName("hidden");
  const itemNum = document.getElementsByClassName("carousel_item").length;
  if (val === "prev") {
    num++;
  } else {
    num--;
  }
  if (num <= 0 && itemNum + num !== 5) {
    hidden[0].style.left = `${num * 54}px`;
  } else if (itemNum + num === 5) {
    num = num + 1;
  } else if (num > 0 && itemNum + num !== 5) {
    num = 0;
  }
};
// 添加样式
const handleEnter = (e: any) => {
  if (e.target.src) {
    picUrl.value = e.target.src;
    const list = e.target.parentElement.parentElement.children;
    for (let i of list) {
      i.removeAttribute("class", "current-active");
      i.setAttribute("class", "carousel_item");
    }
    e.target.parentElement.setAttribute(
      "class",
      "current-active carousel_item"
    );
  }
};

const requestSample = (id) => {
  let routeUrl = router.resolve({ path: `/requestSample/${id}` });
  window.open(routeUrl.href, '_blank');
};

const SendCustomizedRequest = (id) => {
  let routeUrl = router.resolve({ path: `/send-customized-request/${id}` });
  window.open(routeUrl.href, '_blank');
};
</script>
<template>
  <div class="left">
    <div
      class="picModular"
      style="margin: 0px 30px; width: 378px; height: 378px"
    >
      <pic-zoom :url="picUrl" :scroll="true"></pic-zoom>
      <div id="carousel">
        <button
          type="button"
          class="arrow carousel__arrow--left"
          @click="clickCarousel('prev')"
        >
          <el-icon><ArrowLeft /></el-icon>
        </button>
        <button
          type="button"
          class="arrow carousel__arrow--right"
          @click="clickCarousel('next')"
        >
          <el-icon><ArrowRight /></el-icon>
        </button>
        <div class="item">
          <div class="hidden" @mouseover="(e) => handleEnter(e)">
            <div
              v-for="(item, index) in picPathList"
              :key="item"
              style="width: 45px; height: 45px"
              class="carousel_item"
            >
              <img
                :src="item"
                :alt="props.title"
                :title="props.title"
                style="width: 44px; height: 44px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productModular">
      <div class="baseInfo">
        <div class="baseInfo-name">
          <h1 class="baseInfoH1 J-baseInfo-name">
            {{ props.title }}
          </h1>
        </div>
        <div class="baseInfo-property">
          <div class="baseInfo-price-related">
            <div class="swiper-proMainInfo-baseInfo-propertyGetPrice-container">
              <div class="first-container">
                <div style="display: flex">
                  <div class="title-div">
                    Reference FOB Price / Purchase Qty.
                  </div>
                  <i id="pricePropIcon" class="ft-icon icon-info"></i>
                </div>
                <div class="inquiry-tools cf">
                  <a
                    rel="nofollow"
                    class="baseInfo-propertyGetPrice"
                    id="latestPriceInquiry"
                   @click="props.handleStartOrder"
                  >
                    Get Latest Price >
                  </a>
                </div>
              </div>

              <div class="baseInfo-propertyPrice">
                <div id="swiper-container" class="swiper-container-div">
                  <div class="swiper-wrapper-div">
                    <div class="swiper-slide-div">
                      <div class="swiper-money-container">US $29.80</div>
                      <div class="swiper-unit-container">
                        30-99 <span class="unit">Pieces</span>
                      </div>
                    </div>
                    <div class="swiper-slide-div">
                      <div class="swiper-money-container">US $30.55</div>
                      <div class="swiper-unit-container">
                        100+ <span class="unit">Pieces</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseInfo-propertyAttr">
            <div class="attr-line"></div>
            <table>
              <tbody>
                <tr>
                  <th width="160" class="th-label">Light Source:</th>
                  <td>LED</td>
                </tr>
                <tr>
                  <th width="160" class="th-label">Housing Material:</th>
                  <td>Aluminium</td>
                </tr>
                <tr>
                  <th width="160" class="th-label">Emitting Color:</th>
                  <td>Warm White, White, Cool White</td>
                </tr>
                <tr>
                  <th width="160" class="th-label">Dimmable:</th>
                  <td>Without Dimmable</td>
                </tr>
                <tr>
                  <th width="160" class="th-label">Appearance:</th>
                  <td>Square</td>
                </tr>
                <tr>
                  <th width="160" class="th-label">Type:</th>
                  <td>Recessed, Surface Mounted, Suspended</td>
                </tr>
              </tbody>
            </table>
            <div class="attr-line"></div>
            <table>
              <tbody>
                <tr>
                  <th width="160" class="th-label">Samples:</th>
                  <td>
                    <div class="sample-order-info">
                      <div class="info-text">
                        <strong class="red">US$ 33.55/Piece</strong>
                        <span title="1 Piece(Min.Order)"
                          >1 Piece(Min.Order)</span
                        >
                      </div>
                      <span class="gap">|</span>
                      <a
                        class=""
                        target="_blank"
                        @click="requestSample(123)"
                        rel="nofollow"
                        ><el-icon style="margin:3px 3px 0 0"><Box /></el-icon>Request Sample</a
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <th width="160" class="th-label">Customization:</th>
                  <td>
                    <div class="sample-order-info">
                      <div class="info-text">Available</div>
                      <span class="gap">|</span>
                      <a
                        target="_blank"
                        rel="nofollow"
                        @click="SendCustomizedRequest(123)"
                        ads-data="st:16,pdid:GvDxWsrYvEtX,pcid:IMRmDLvcafHV"
                      >
                        <el-icon><EditPen /></el-icon>Customized Request
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.left {
  width: calc(100% - 300px - 20px);
  padding-top: 30px;
  background: #fff;
  border: 1px solid #e9eef4;
  display: flex;
  a{
    cursor:pointer;
  }
  //   margin: 30px auto;
  #carousel {
    width: 378px;
    height: 60px;
    display: flex;
    position: relative;
    align-items: center;
    padding: 0 30px;
    margin: 0 auto;
    .carousel__arrow--left {
      left: 0px;
    }
    .carousel__arrow--right {
      right: 0px;
    }
    .hidden .current-active img {
      border: 2px solid #ff6600;
      margin-right: 10px;
    }
    .hidden {
      position: relative;
      display: flex;
    }
    .item {
      width: 320px;
      overflow: hidden;
    }
    .carousel_item {
      margin-right: 10px;
    }
    .arrow {
      border: none;
      height: 50px;
      width: 30px;
      cursor: pointer;
      color: #ccc;
      position: absolute;
      top: 50%;
      background-color: transparent;
      z-index: 10;
      transform: translateY(-50%);
      text-align: center;
      font-size: 22px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
  .productModular {
    .baseInfo-price-related {
      margin-bottom: 20px;
      background: #f5f7fa;
      .swiper-proMainInfo-baseInfo-propertyGetPrice-container {
        background: #f5f7fa !important;
        padding: 0 10px 20px 10px;
        .first-container {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          .title-div {
            height: 21px;
            font-size: 14px;
            font-weight: 500;
            text-align: left;
            color: #888;
            line-height: 21px;
            margin-right: 5px;
          }
          .inquiry-tools {
            background: #f5f7fa;
            padding: 0;
            padding-top: 0 !important;
            a {
              height: 21px;
              font-size: 14px;
              font-weight: 400;
              text-align: left;
              color: #2e8ae6;
              line-height: 21px;
            }
          }
        }
        .baseInfo-propertyPrice {
          height: auto;
          display: flex;
          align-items: center;
          background: #fff;
          margin-bottom: 0;
          .swiper-container-div {
            margin: 0;
            width: 100%;
            .swiper-wrapper-div {
              display: flex;
              flex-wrap: wrap;
              padding-top: 15px;
              .swiper-slide-div {
                padding: 0 15px;
                width: auto !important;
                height: 100%;
                border-right: 1px solid #e6ecf2;
                margin-bottom: 15px;
                .swiper-money-container {
                  height: 27px;
                  font-size: 18px;
                  font-weight: 700;
                  text-align: left;
                  color: #e64545;
                  line-height: 27px;
                }
                .swiper-unit-container {
                  height: 18px;
                  font-size: 12px;
                  font-weight: 400;
                  text-align: left;
                  color: #222;
                  line-height: 18px;
                  .unit {
                    color: #888;
                  }
                }
              }
            }
          }
        }
      }
    }
    .baseInfo-propertyAttr {
      margin-bottom: 10px;

      table {
        width: 100%;
        table-layout: fixed;
        word-break: break-word;
        font-size: 14px;
        line-height: 21px;
        th {
          color: #888;
          padding-bottom: 15px;
          padding-right: 20px;
          vertical-align: top;
          text-align: left;
        }
        td {
          padding: 0 10px;
        }
        td {
          color: #222;
          vertical-align: top;
          word-break: keep-all;
          word-wrap: break-word;
        }
      }
      .th-label {
        word-break: break-word;
      }
      .attr-line {
        border-bottom: 1px solid #e9eef4;
        margin: 0 0 15px 0;
      }
      .sample-order-info {
        justify-content: flex-start;
        display: flex;
        a {
          color: #2e8ae6;
          margin-left: 2px;
        }
        .info-text {
          padding-right: 6px;
          margin-right: 0 !important;
          .red {
            color: red;
          }
          .gap {
            color: #e6ecf2;
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
