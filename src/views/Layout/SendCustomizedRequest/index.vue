<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";

// const emit = defineEmits(["reloadTable"]);
const dialogTableVisible = ref(false);
const ifFiles = ref(false);
const ifImages = ref(false);
const ruleForm = ref<any>({
  productNumber: 1000,
});
const ruleFormRef = ref();
// 展开
const handleImages = () => {
  ifImages.value = !ifImages.value;
};
const handleFiles = () => {
  ifFiles.value = !ifFiles.value;
};
// 响应头 headerObj
// const headerObj = { Authorization: props.ProductDataInfo.token }

//获取url中的参数
function getUrlParam(name: any) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}

// 提交表单验证
const submitFrom = () => {
  if (ruleForm.value.productNumber < 1000) {
    ElMessage.error("Minimum order quantity must be greater than 1000");
    return false;
  }
  if (ruleForm.value.BuyerName == "") {
    ElMessage.error("Please Enter Name");
    return false;
  }
  if (ruleForm.value.BuyerEmail == "") {
    ElMessage.error("Please Enter Email");
    return false;
  }
  var re = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  if (!re.test(ruleForm.value.BuyerEmail)) {
    ElMessage.error("Please enter the correct email format");
    return false;
  }
  if (ruleForm.value.BuyerTel == "") {
    ElMessage.error("Please Enter Mobile/Telephone");
    return false;
  }
  if (ruleForm.value.BuyerCountry == "") {
    ElMessage.error("Please Select Country");
    return false;
  }
  if (ruleForm.value.productNumber == "") {
    ElMessage.error("Please Enter Quantity");
    return false;
  }

  if (ruleForm.value.unit == "") {
    ElMessage.error("Please Select Unit");
    return false;
  }

  if (ruleForm.value.deliveryTime == "") {
    ElMessage.error("Please Select Delivery Time");
    return false;
  }
  const year = new Date(ruleForm.value.deliveryTime).getFullYear();
  let month: number | string = 0;
  if (new Date(ruleForm.value.deliveryTime).getMonth() + 1 >= 10) {
    month = new Date(ruleForm.value.deliveryTime).getMonth() + 1;
  } else {
    month = "0" + (new Date(ruleForm.value.deliveryTime).getMonth() + 1);
  }
  const date = new Date(ruleForm.value.deliveryTime).getDate();

  var ipjson =
    '{ "PONO":"","Platform":2,"Ip":"219.133.106.59","Country":"中国"}';
  var data = {
    order: {
      source: 2,
      totalAmount: {
        currency: "USD",
        unit: "元",
        value: ruleForm.value.totalPrice,
      },
      firstPayAmount: {
        currency: "USD",
        unit: "元",
        value: ruleForm.value.totalPrice,
      },
      tailPayAmount: {
        currency: "USD",
        unit: "元",
        value: "0.00",
      },
      insuranceAmount: {
        currency: "USD",
        unit: "元",
        value: "0.00",
      },
      freightAmount: {
        currency: "USD",
        unit: "元",
        value: "0.00",
      },
      serviceChargeAmount: {
        currency: "USD",
        unit: "元",
        value: "0.00",
      },
      transport: {
        carrier: 1,
        shippingType: 1,
        fuYunType: 0,
        deliveryTime: year + "-" + month + "-" + date + "T00:00:00.000Z",
        placeOrigin: "",
        packagingMethod: "1PC/Gift box, 60PCS/CTN",
        shippingMarks: "",
        shipmentPort: "",
        destinationPort: "",
      },
      payTypeStr: "1",
      loanNode: 0,
      buyerInfo: {
        name: ruleForm.value.BuyerName,
        country: ruleForm.value.BuyerCountry,
        mobile: ruleForm.value.BuyerTel,
        email: ruleForm.value.BuyerEmail,
        addressDesc: "",
      },
      agentInfo: {},
      supplierInfo: {},
      enclosureUrlStr: "",
      remarks: ruleForm.value.treaProcurementDescribes,
      extensionData: ipjson,
      orderItems: [
        {
          productName:
            "ECVV Miniature Circuit Breaker TGB1N-125 2PTGB1N-1252P-D-80A 6KA TENGEN MCB",
          productTotalPrice: {
            currency: "USD",
            unit: "元",
            value: ruleForm.value.totalPrice,
          },
          productUnitPrice: "9.59",
          deliveryTime: year + "-" + month + "-" + date + "T00:00:00.000Z",
          productSpecs: getUrlParam("dvSkuDetail")
            ? getUrlParam("dvSkuDetail")
            : "",
          productUnit: ruleForm.value.unit,
          productBrand: "TENGEN",
          productQunatity: ruleForm.value.productNumber,
          image: {
            mainSrcs: ruleForm.value.mainSrcs,
            attachedSrcs: ruleForm.value.attachedSrcs,
          },
          enclosureUrlStr: ruleForm.value.OrderEnclosureUrlStr,
          externalDetailsUrl: "5038589",
          extensionData: "",
        },
      ],
    },
  };
  import.meta.env.VITE_API_URL = "http://safebuy.ecvv.com";
  const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 50000,
    headers: { "Content-Type": "application/json" },
  });
  service({
    url: "/api/services/app/Order/CreateOrUpdate",
    method: "post",
    data: JSON.stringify(data),
    headers: { Authorization: props.ProductDataInfo.token },
  })
    .then((res) => {
      if (res.data.success === "true") {
        window.location.href =
          "//safebuy.ecvv.com/successfully.html?NewReg=true";
      } else {
        window.location.href = "//safebuy.ecvv.com/successfully.html";
      }
    })
    .catch((res) => {
      ElMessage.error(res.message);
    });
};

// 提交
const submit = async () => {
  // 在本地情况下会出现跨域情况
  const url = window.location.origin;
  const domain = url.split("/");
  const localhost = domain[2].split(":")[0];
  if (localhost !== "localhost") {
    // 验证码是否正确
    const service = axios.create({
      baseURL: "http://www.ecvv.com",
      timeout: 50000,
      headers: { "Content-Type": "application/json" },
    });
    service({
      url: "/ecvvajax/checkcode.ashx",
      method: "post",
      data: { inqcode: ruleForm.value.textVcode },
    }).then((res) => {
      console.log(res);

      // if (res && res == "1") {
      submitFrom();
      // }
      // else {
      //     ElMessage.error('Verification code error!');
      //     return;
      // }
    });
  } else {
    // 不验证验证码直接验证表单
    submitFrom();
  }
};
</script>
<template>
  <div class="requestSample">
    <div class="title">
      <h2>Tell the supplier your customized request</h2>
    </div>
    <div class="form">
      <div class="productPrice">
        <el-form
          model="ruleForm"
          ref="ruleFormRef"
          size="default"
          label-width="200px"
        >
          <el-form-item v-show="false">
            <el-input v-model="ruleForm.id" />
          </el-form-item>
          <el-form-item prop="BuyerName" label="Product Name:">
            <el-input
              v-model="ruleForm.BuyerName"
              placeholder="Name"
              clearable
            />
          </el-form-item>
          <el-form-item prop="contentText" label="Product Description:">
            <el-tooltip
              class="box-item"
              effect="light"
              placement="right-end"
            >
              <template #content>
                <p style="width:150px;">
                  Tell us your customizedrequests such as.Product
                  Features.Materials, DimensionsLogos you want to print.other
                  items you care about.
                </p>
              </template>
              <el-input
                placeholder="Please enter detailed product description, especially your customized request"
                clearable
                v-model="ruleForm.contentText"
                type="textarea"
                show-word-limit
                rows="5"
                minlength="0"
                maxlength="4000"
              />
            </el-tooltip>
          </el-form-item>

          <el-form-item prop="unit" label="Purchase Quantity:">
            <el-input v-model="ruleForm.quantity"
              placeholder="Quantity"
              style="width:100px"
              clearable />
            <el-select
              v-model="ruleForm.unit"
              placeholder="Please Select Unit"
              clearable
            >
              <el-option value="" selected="">Please Select Unit</el-option>
              <el-option value="Acre(s)">Acre(s)</el-option>
              <el-option value="Ampere(s)">Ampere(s)</el-option>
              <el-option value="Bag(s)">Bag(s)</el-option>
              <el-option value="Barrel(s)">Barrel(s)</el-option>
              <el-option value="Cubic Meter">Cubic Meter</el-option>
              <el-option value="Box(es)">Box(es)</el-option>
              <el-option value="Bushel(s)">Bushel(s)</el-option>
              <el-option value="Carat(s)">Carat(s)</el-option>
              <el-option value="Carton(s)">Carton(s)</el-option>
              <el-option value="Case(s)">Case(s)</el-option>
              <el-option value="Centimeter(s)">Centimeter(s)</el-option>
              <el-option value="Chain(s)">Chain(s)</el-option>
              <el-option value="Cubic Centimeter(s)"
                >Cubic Centimeter(s)</el-option
              >
              <el-option value="Cubic Foot/Cubic Feet"
                >Cubic Foot/Cubic Feet</el-option
              >
              <el-option value="Cubic Inch(es)">Cubic Inch(es)</el-option>
              <el-option value="Cubic Meter(s)">Cubic Meter(s)</el-option>
              <el-option value="Cubic Yard(s)">Cubic Yard(s)</el-option>
              <el-option value="Degrees Celsius">Degrees Celsius</el-option>
              <el-option value="Degrees Fahrenheit"
                >Degrees Fahrenheit</el-option
              >
              <el-option value="Dozen(s)">Dozen(s)</el-option>
              <el-option value="Dram(s)">Dram(s)</el-option>
              <el-option value="Fluid Ounce(s)">Fluid Ounce(s)</el-option>
              <el-option value="Foot/Feet">Foot/Feet</el-option>
              <el-option value="Forty-Foot Container"
                >Forty-Foot Container</el-option
              >
              <el-option value="Furlong(s)">Furlong(s)</el-option>
              <el-option value="Gallon(s)">Gallon(s)</el-option>
              <el-option value="Gill(s)">Gill(s)</el-option>
              <el-option value="Grain(s)">Grain(s)</el-option>
              <el-option value="Gram(s)">Gram(s)</el-option>
              <el-option value="Gross">Gross</el-option>
              <el-option value="Hectare(s)">Hectare(s)</el-option>
              <el-option value="Hertz">Hertz</el-option>
              <el-option value="Inch(es)">Inch(es)</el-option>
              <el-option value="Kiloampere(s)">Kiloampere(s)</el-option>
              <el-option value="Kilogram(s)">Kilogram(s)</el-option>
              <el-option value="Kilohertz">Kilohertz</el-option>
              <el-option value="Kilometer(s)">Kilometer(s)</el-option>
              <el-option value="Kiloohm(s)">Kiloohm(s)</el-option>
              <el-option value="Kilovolt(s)">Kilovolt(s)</el-option>
              <el-option value="Kilowatt(s)">Kilowatt(s)</el-option>
              <el-option value="Liter(s)">Liter(s)</el-option>
              <el-option value="Long Ton(s)">Long Ton(s)</el-option>
              <el-option value="Metric Ton">Metric Ton</el-option>
              <el-option value="Megahertz">Megahertz</el-option>
              <el-option value="Meter(s)">Meter(s)</el-option>
              <el-option value="Mile(s)">Mile(s)</el-option>
              <el-option value="Milliampere(s)">Milliampere(s)</el-option>
              <el-option value="Milligram(s)">Milligram(s)</el-option>
              <el-option value="Millihertz">Millihertz</el-option>
              <el-option value="Milliliter(s)">Milliliter(s)</el-option>
              <el-option value="Millimeter(s)">Millimeter(s)</el-option>
              <el-option value="Milliohm(s)">Milliohm(s)</el-option>
              <el-option value="Millivolt(s)">Millivolt(s)</el-option>
              <el-option value="Milliwatt(s)">Milliwatt(s)</el-option>
              <el-option value="Nautical Mile(s)">Nautical Mile(s)</el-option>
              <el-option value="Ohm(s)">Ohm(s)</el-option>
              <el-option value="Ounce(s)">Ounce/Ounces</el-option>
              <el-option value="Pack(s)">Pack(s)</el-option>
              <el-option value="Pair(s)">Pair(s)</el-option>
              <el-option value="Pallet(s)">Pallet(s)</el-option>
              <el-option value="Parcel(s)">Parcel(s)</el-option>
              <el-option value="Perch(s)">Perch(s)</el-option>
              <el-option value="Piece(s)">Piece(s)</el-option>
              <el-option value="Pint(s)">Pint(s)</el-option>
              <el-option value="Plant(s)">Plant(s)</el-option>
              <el-option value="Pole(s)">Pole(s)</el-option>
              <el-option value="Pound(s)">Pound(s)</el-option>
              <el-option value="Quart(s)">Quart(s)</el-option>
              <el-option value="Quarter(s)">Quarter(s)</el-option>
              <el-option value="Rod(s)">Rod(s)</el-option>
              <el-option value="Roll(s)">Roll(s)</el-option>
              <el-option value="Set(s)">Set(s)</el-option>
              <el-option value="Sheet(s)">Sheet(s)</el-option>
              <el-option value="Short Ton(s)">Short Ton(s)</el-option>
              <el-option value="Square Centimeter(s)"
                >Square Centimeter(s)</el-option
              >
              <el-option value="Square Foot/Square Feet"
                >Square Foot/Square Feet</el-option
              >
              <el-option value="Square Inch(es)">Square Inch(es)</el-option>
              <el-option value="Square Meter(s)">Square Meter(s)</el-option>
              <el-option value="Square Mile(s)">Square Mile(s)</el-option>
              <el-option value="Square Yard(s)">Square Yard(s)</el-option>
              <el-option value="Stone(s)">Stone(s)</el-option>
              <el-option value="Strand(s)">Strand(s)</el-option>
              <el-option value="Ton(s)">Ton(s)</el-option>
              <el-option value="Tonne(s)">Tonne(s)</el-option>
              <el-option value="Tray(s)">Tray(s)</el-option>
              <el-option value="Twenty-Foot Container"
                >Twenty-Foot Container</el-option
              >
              <el-option value="Unit(s)">Unit(s)</el-option>
              <el-option value="Volt(s)">Volt(s)</el-option>
              <el-option value="Watt(s)">Watt(s)</el-option>
              <el-option value="Wp">Wp</el-option>
              <el-option value="Yard(s)">Yard(s)</el-option>
              <el-option value="Other">Other</el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            prop="treaProcurementDescribes"
            label="Images Files:"
            class="imgModel"
          >
            <el-button @click="handleImages">Add Images</el-button>
            <template v-if="ifImages">
              <div id="collapseThree" class="accordion-body collapse">
                <div class="accordion-inner">
                  <div class="popups-list">
                    <strong>Image:</strong>
                    <el-upload
                      class="upload-demo"
                      drag
                      action="https://safebuy.ecvv.com/api/services/app/EDocument/UpFiles"
                      :headers="headerObj"
                      multiple
                    >
                      <div class="el-upload__text">
                        Drag & drop files here ...
                      </div>
                      <template #tip>
                        <el-upload
                          ref="uploadRef"
                          class="upload-demo"
                          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                          :auto-upload="false"
                        >
                          <template #trigger>
                            <el-button class="el-upload__text" type="primary"
                              >Browse ...</el-button
                            >
                          </template>
                        </el-upload>
                        <div class="el-upload__tip">
                          Note: support 5 files at most, 5M for each file, jpg,
                          png, gif
                        </div>
                      </template>
                    </el-upload>
                  </div>
                </div>
              </div>
            </template>
          </el-form-item>
          <el-form-item
            prop="treaProcurementDescribes"
            label="Text Files:"
            class="FilesModel"
          >
            <el-button @click="handleFiles">Add Files</el-button>
            <div
              id="collapseThree"
              class="accordion-body collapse"
              v-show="ifFiles"
            >
              <div class="accordion-inner">
                <div class="popups-list">
                  <strong>Files:</strong>
                  <el-upload
                    class="upload-demo"
                    drag
                    action="https://safebuy.ecvv.com/api/services/app/EDocument/UpFiles"
                    :headers="headerObj"
                    multiple
                  >
                    <div class="el-upload__text">
                      Drag & drop files here ...
                    </div>
                    <template #tip>
                      <el-upload
                        ref="uploadRef"
                        class="upload-demo"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        :auto-upload="false"
                      >
                        <template #trigger>
                          <el-button class="el-upload__text" type="primary"
                            >Browse ...</el-button
                          >
                        </template>
                      </el-upload>
                    </template>
                  </el-upload>
                </div>
              </div>
            </div>
          </el-form-item>
          <el-form-item prop="btnSub" class="submit">
            <el-input
              type="button"
              id="btnSub"
              @click="submit"
              value="Submit Order"
            />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.requestSample {
  width: 50%;
  margin: 20px auto;
  margin-top: 50px;
  background-color: #fff;
  //   height: 100px;
  .title {
    margin: 30px;
    h2 {
      font-weight: 700;
    }
  }
  .form {
    .productPrice {
      padding: 0 50px;
      padding-right: 300px;
      border-bottom: 1px solid #eee;
      h3 {
        font-weight: 700;
        margin-bottom: 20px;
      }
      .imgModel {
        :deep(.el-form-item__conten) t {
          display: block;
        }
      }

      .FilesModel {
        :deep(.el-form-item__conten) t {
          display: block;
        }
      }
      .submit {
        margin: 30px 100px;
        width: 200px;
        :deep(.el-input__wrapper)  {
          background-color: #4ec401;
        }

        :deep(.el-input__inner)  {
          color: #fff;
        }
      }
    }
  }
}
</style>
