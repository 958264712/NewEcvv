<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const pieces = ref("");
const piecesList = ref([
  { label: "Pieces" },
  { label: "Bags" },
  { label: "Boxes" },
  { label: "Foot" },
  { label: "Meter" },
  { label: "Pairs" },
  { label: "Reams" },
  { label: "Rolls" },
  { label: "Sets" },
  { label: "Square Meters" },
  { label: "Square Feet" },
  { label: "Tons" },
  { label: "Yard" },
]);
const queryParams = ref({});
const change = (val) => {
  pieces.value = val;
};

const quantity = ref("");
const add = ref("");

const clickAdd = () => {
  piecesList.value.push({ label: add.value });
  add.value = "";
};

const rules = ref<FormRules>({
  contentText: [
    { required: true, message: "Please enter the content for your inquiry." },
  ],
  address: [
    { required: true, message: "Please enter your email address." },
  ],
  code: [
    { required: true, message: "Please enter a correct verification code." },
  ],
});

const onSubmit = () => {
  console.log('submit!')
}
</script>
<template>
  <div class="sendInquiry">
    <div class="product">
      <div class="companyName">company name</div>
      <div class="productInfo">
        <div class="img">
          <img src="../../../assets/images/16-Welding_Machine.jpg" />
          <div class="prod-name">
            <a href="" title="">product Name</a>
          </div>
        </div>
        <div class="productNum">
          <el-input
            placeholder="Quantity"
            v-model="quantity"
            style="width: 150px"
          />
          <div class="productPieces">
            <el-select
              v-model="pieces"
              placeholder="Pieces"
              style="width: 100px"
              @change="(val) => change(val)"
            >
              <el-option
                v-for="(item, index) in piecesList"
                :key="index"
                :label="item.label"
                :value="item.label"
              ></el-option>
              <div
                class="addPieces"
                style="
                  width: 170px;
                  display: flex;
                  justify-content: space-evenly;
                  align-items: center;
                  margin-top: 20px;
                "
              >
                <el-input
                  v-model="add"
                  placeholder="other"
                  style="width: 100px"
                />
                <a @click="clickAdd" style="cursor: pointer">+add</a>
              </div>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <el-form class="content" :model="queryParams" :rules="rules">
      <el-form-item prop="contentText">
        Content<span style="color: #fd2f3c">*</span>
        <el-input
          v-model="queryParams.contentText"
          type="textarea"
          class="form-textarea"
          placeholder="Please enter details such as material, size, application, specifications and other requirements to receive an accurate quote."
          show-word-limit
          clearable
          rows="8"
          minlength="0"
          maxlength="4000"
        />
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
          multiple
          :limit="5"
        >
          <template #trigger>
            <div class="uploadText">
              Attach Files maxLimit is five
              <el-tooltip
                class="box-item"
                effect="light"
                content="Supports jpg, jpeg, png, gif, pdf, doc, docx, xls, xlsx, txt, rar and zip.Max upload 5 files;Max. total size: 3MB"
                placement="bottom-start"
                ><QuestionFilled style='width:16px;height:16px;vertical-align:middle;' />
              </el-tooltip>
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item prop="address" >
          Email Address<span style="color: #fd2f3c">*</span>
          <el-input style='width:1000px;height:2px;visibility:hidden;' />
        <el-input
          v-model="queryParams.address"
          placeholder="Enter your email address"
          style='width:300px;height:40px;'
        />
      </el-form-item>
      <el-form-item prop="code" >
          Verification Code<span style="color: #fd2f3c">*</span>
          <el-input style='width:1000px;height:2px;visibility:hidden;' />
        <el-input
          v-model="queryParams.code"
          style='width:300px;height:40px;'
        />
      </el-form-item>
      <el-form-item>
         <el-button type="primary" style='height:40px;font-size:18px;' @click="onSubmit">Send inquiry Now</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less" scoped>
.sendInquiry {
  width: 52%;
  margin: 20px auto;
  margin-top:50px;
  .product {
    background-color: #fff;
    border: 1px solid #dae0e6;
    border-top: none;
    .companyName,
    .productInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .companyName {
      font-size: 14px;
      padding: 15px 40px 15px 20px;
    }
    .productInfo {
      padding: 20px;
      border-top: 1px solid #dae0e6;
      .img {
        display: flex;
        img {
          width: 70px;
          height: 70px;
        }
        .prod-name {
          margin-left: 20px;
          height: 48px;
          line-height: 24px;
          max-width: 500px;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          a {
            color: #1470cc;
          }
          a:hover {
            color: #e64545;
          }
        }
      }

      .productNum {
        margin-right: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .content {
    margin: 30px 0;
    .uploadText {
      padding: 8px 10px;
      background: #f5f7fa;
      border-width: 0 1px 1px 1px;
      border-style: solid;
      border-color: #ced3d9;
      border-radius: 0 0 3px 3px;
      font-size: 12px;
      height: 40px;
      line-height:24px;
      width:990px;
      color: #1470cc;
    }
  }
}
</style>
