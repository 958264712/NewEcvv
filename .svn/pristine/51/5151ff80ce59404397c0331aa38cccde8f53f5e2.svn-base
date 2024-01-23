<script setup lang="ts">
import { ref } from "vue";
const styleTop = ref({});
const countriesList = ref([
  {
    href: "https://www.ecvv.sa",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/flags/sa.svg",
    title: "SA",
  },
  {
    href: "https://www.ecvv.qa",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/qa-flag.png",
    title: "QA",
  },
  {
    href: "https://www.ecvv.ma",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/mar-flag.png",
    title: "Mar",
  },
  {
    href: "https://www.ecvv.eg",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/flags/EGY.svg",
    title: "Egypt",
  },
  {
    href: "https://www.ecvv.com.kw",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/flags/KWT.svg",
    title: "Kuwait",
  },
  {
    href: "https://www.ecvv.com.tr",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/flags/tr.svg",
    title: "Turkey",
  },
  {
    href: "https://www.ecvv.co.in",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/flags/in.svg",
    title: "India",
  },
  {
    href: "https://www.ecvv.vn",
    src: "https://eresource.ecvv.com/PC_Ecvv/images/vn-flag.png",
    title: "Vietnam",
  },
]);
const boxList = ref([
    {
        span:7,
        href:'https://rcep.ecvv.cn',
        title:'MRO Products Mall',
        className:''
    },
    {
        span:8,
        href:'//www.ecvv.cn',
        title:'MRO Products Mall/China',
        className:''
    },
    {
        span:4,
        href:'https://www.ecvv.com/aboutus/Company_Overview.html',
        title:'About Us',
        className:'about'
    },
    {
        span:5,
        href:'https://www.ecvv.com/aboutus/Contact_Us.html',
        title:'Contact us',
        className:'about'
    },
])
// 浏览器改变时
// window.onresize = () => {
//   if (document.body.clientWidth < 1400) {
//     styleTop.value = {
//       padding: "0",
//     };
//   } else {
//     styleTop.value = {
//       // padding: "0 13%",
//     };
//   }
// };
</script>
<template>
  <!-- 开头 -->
  <section class="header-box auto-w" :style="styleTop">
    <el-row class="nav-top-box">
      <el-col :span="i.span" v-for="i in boxList" :class="i.className">
        <a :href="i.href" rel="nofollow" target="_blank">{{i.title}}</a>
      </el-col>
    </el-row>
    <!-- 实现各国地方切换跳转 -->
    <div class="header-top-r">
      <span>Countries:</span>
      <el-row class="header-top-r-ul">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="6" class="hoverShow">
          <a href="http://www.ecvv.ae">
            <img
              src="https://eresource.ecvv.com/PC_Ecvv/images/uae-flag.png"
              class="img"
            />
            UAE
            <em>
              <img
                style="width: 12px; margin-left: -1px"
                src="@/assets/images/Content_images/jt.png"
              />
            </em>
          </a>
          <ul class="header-top-r-min-ul">
            <li v-for="i in countriesList">
              <a :href="i.href">
                <img
                  :src="i.src"
                  class="img"
                  style="border: 1px solid #d7d5d5"
                />{{ i.title }}
              </a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<style scoped lang="scss">
.header-box {
  height: 50px;
  // padding: 0 13%;
  background-color: #fff;
  border-top: 1px solid #e6e7eb;
  border-bottom: 1px solid #dcdcdc;
  box-shadow: 1px 2px 3px #dcdcdc;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
}
.nav-top-box {
  display: flex;
  justify-content: space-between;
  align-items:center;
  font-size: 16px;
  margin-right: 50px;
  text-align: center;
}
.nav-top-box .el-col a:hover {
  color: #1e5eb5;
}
.nav-top-box .el-col {
  max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  &::after {
    content: "";
    display:inline-block;
    height: 15px;
    border-right: 1px solid #e6e7eb;
    margin-left: 20px;
  }
}
.nav-top-box .el-col:last-child {
  &::after {
    content: "";
    border-right: none;
  }
}
.header-top-r {
  z-index: 500;
  font-size: 14px;
  display: flex;
  justify-content: end;
  align-items: center;
}
.header-top-r span {
  display: inline-block;
  margin-right: 37px;
}
.header-top-r-ul {
  width: 330px;
  display: flex;
  justify-content: space-between;
  margin-left: -27px;
}
.header-top-r-ul .el-col {
  height: 35px;
  min-width: 25%;
  line-height: 35px;
  text-align: center;
}

.about a {
  color: #888;
}
.header-top-r-ul > .el-col:hover {
  box-shadow: 1px 1px 3px 0 #aaa;
  background: #fff;
}
.header-top-r a:hover {
  color: #ff6d18;
}
.nav-top-box,
.header-top-r {
  max-width: 50%;
}
.hoverShow {
  margin-right: 10px;
}
.hoverShow:hover .header-top-r-min-ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header-top-r-min-ul {
  text-align: left;
  display: none;
  padding: 0 3px;
  box-shadow: 1px 1px 3px 0 #aaa;
  background: #fff;
}
.hoverShow .img {
  width: 25px;
  height: 16px;
  text-indent: 30px;
}
</style>
