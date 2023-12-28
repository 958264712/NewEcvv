<script setup lang="ts">
import { ref } from "vue";
import {getLatestProduct} from '@/api/modular/search'
import { Session } from "@/utils/storage";

const companyInfo = Session.get('companyInfo')
const itemList = ref([]);

// 获取最新产品
const handleQuery = async () => {
    await getLatestProduct(Object.assign({ keyword: companyInfo.companyCateGroup.catalog_id })).then(res => {
        if (res.data.type === 'success') {
            itemList.value = res.data.result.list
        }
    })
}
handleQuery()
</script>
<template>
  <div id="EcvvCompanyHomeshopifyProduct">
    <div class="yml-block">
      <div class="you-may-like" faw-module="YML">
        <div class="yml-header">
          <h3 class="medium-size-bold">You May Like</h3>
        </div>
        <ul class="yml-content">
          <li class="item" v-for="i in itemList" :key="i">
            <a :href="i.href"  target="_blank"
              ><div class="yml-img-wrap">
                <img :src="i.src" :alt="i.title" />
              </div>
              <div class="yml-text-wrap">
                <span class="span_text" :title="i.title">{{ i.title }}</span>
              </div></a
            >
          </li>
        </ul>
        <div class="rfq-wrap">
          <span>No desirable products?</span>
          <a
            id="viewMore"
            target="_blank"
            href="https://rcep.ecvv.cn"
            rel="nofollow"
            >View More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#EcvvCompanyHomeshopifyProduct {
  border: 1px solid #f1f1f1;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 13%);
  display: block;
  position: fixed;
  max-width: 260px;
  top: 215px;
  padding: 10px 0px;
  right: 0px;
  left: 168.5px;
  background-color: white;
  z-index: 1;
}
a{
  color:var(--primaryColor)
}
.you-may-like {
  padding-left: 10px;
  font: 12px/1.5 "Roboto", Arial, "Microsoft YaHei", sans-serif;
  .yml-header {
    margin-bottom: 10px;
    font-size: 18px;
  }
  .yml-content::-webkit-scrollbar {
    width: 4px;
    height: 100%;
    border-radius: 4px;
    background-color: #aaa;
  }
  .yml-content::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--primaryColor);
  }
  .yml-content {
    max-height: 410px;
    overflow: hidden;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
    .item {
      height: 60px;
      margin: 10px 0;
      & > a {
        display: flex;
        justify-content: space-between;
      }
      .yml-img-wrap {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-right: 10px;
        img {
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
          display: inline;
        }
      }
      .yml-text-wrap {
        padding-top: 5px;
        max-width: 175px;
        .span_text {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
  .rfq-wrap {
    margin-top: 10px;
    font-size: 14px;
    color: #888;
  }
}
#viewMore {
  border-color: #e64d45;
  border-radius: 3px;
  background: #fff;
  color: #e64d45;
  margin-top: 5px;
  width: 90%;
  height: 36px;
  line-height: 34px;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  border: solid 1px #e64d45;
  padding: 0 15px;
  cursor: pointer;
  box-sizing: border-box;
}
a,
a:link {
  // color: #004b91;
  text-decoration: none;
}
a:hover {
  color: #23527c;
}
</style>
