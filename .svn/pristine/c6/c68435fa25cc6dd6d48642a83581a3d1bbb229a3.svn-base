<script setup lang="ts">
import { ref } from "vue";
import { Session } from '@/utils/storage';


  const companyInfo = ref<any>(Session.get('companyInfo'))
</script>
<template>
  <div class="cws-wrap" id="skypeInnerborder">
    <div class="cws">
      <h3>Communicate with Supplier</h3>
      <div class="name">
        <a :href="companyInfo.companyContactUrl"><span>{{companyInfo?.companyContactPerson}} </span></a>
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
              style="border: none; overflow: hidden; width: 50px; height: 20px"
              allowtransparency="false"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cws-wrap {
  margin: 0 0 10px 7px;
  width: 182px;
  position: fixed;
  top: 215px;
  .cws .mail-feedback,
  .cws .chat-feedback {
    background-color: #f3f3f3;
    padding-left: 10px;
    margin-bottom: 1px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .cws .mail-feedback a,
  .cws .chat-feedback a {
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
  .cws {
    background-color: #fff;
    border: 1px solid #f1f1f1;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.13);
    padding: 5px;
    position: relative;
    width: 170px;
    margin-top: 73px;

    h3 {
      // background-color: #004b91;
      color: #ffffff;
      font-size: 12px;
      font-weight: 400;
      height: 25px;
      line-height: 25px;
      margin-bottom: 2px;
      padding-left: 5px;
    }
    .name {
      background-color: #ffffff;
      line-height: 1.2;
      padding: 10px 4px;
      text-align: center;
      
    }
    .chat-feedback span {
      width: 19px;
      height: 18px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>
