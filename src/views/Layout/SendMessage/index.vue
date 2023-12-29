<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { Session } from "@/utils/storage";
import { ElMessage } from "element-plus";
import axios from 'axios';

const add = ref("");
const queryParams = ref({productNumber:1000});
const productInfo = Session.get("productInfo");
const companyInfo = Session.get("companyInfo");
const pInfo = Session.get("pInfo");
const pDInfo = Session.get("pDInfo");
const rules = ref<FormRules>({
  treaProcurementDescribes: [
    { required: true, message: "Please enter the content for your inquiry." },
  ],
  BuyerEmail: [{ required: true, message: "Please enter your email address." }],
  BuyerName: [{ required: true, message: "Please enter your buyer name." }],
  BuyerTel: [{ required: true, message: "Please enter your buyer tel." }],
  BuyerCountry: [{ required: true, message: "Please enter your buyer country." }],
  textVcode: [
    { required: true, message: "Please enter a correct verification code." },
  ],
});
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

const clickAdd = () => {
  piecesList.value.push({ label: add.value });
  add.value = "";
};
const change = (val) => {
  queryParams.value.unit = val;
};

// 响应头 headerObj
const headerObj = { Authorization: pDInfo.token };

const onSubmit = () => {
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
      data: { inqcode: queryParams.value.textVcode },
    }).then((res) => {
      console.log(res);
      submitFrom();
    });
  } else {
    // 不验证验证码直接验证表单
    submitFrom();
  }
};

const submitFrom = () => {
  if (queryParams.value.productNumber < 1000) {
    ElMessage.error("Minimum order quantity must be greater than 1000");
    return false;
  }
  if (queryParams.value.BuyerEmail == "") {
    ElMessage.error("Please Enter Email");
    return false;
  }
  var re = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  if (!re.test(queryParams.value.BuyerEmail)) {
    ElMessage.error("Please enter the correct email format");
    return false;
  }
  if (queryParams.value.productNumber == "") {
    ElMessage.error("Please Enter Quantity");
    return false;
  }
   if (queryParams.value.BuyerTel == "") {
        ElMessage.error('Please Enter Mobile/Telephone');
        return false;
    }
    if (queryParams.value.BuyerCountry == "") {
        ElMessage.error('Please Select Country');
        return false;
    }
    if (queryParams.value.productNumber == "") {
        ElMessage.error('Please Enter Quantity');
        return false;
    }
  if (queryParams.value.unit == "") {
    ElMessage.error("Please Select Unit");
    return false;
  }
  const year = new Date().getFullYear();
  let month: number | string = 0;
  if (new Date().getMonth() + 1 >= 10) {
    month = new Date().getMonth() + 1;
  } else {
    month = "0" + (new Date().getMonth() + 1);
  }
  const date = new Date().getDate();
  var ipjson =
    '{ "PONO":"","Platform":2,"Ip":"219.133.106.59","Country":"中国"}';
  var data = {
    order: {
      source: 2,
      totalAmount: {
        currency: "USD",
        unit: "元",
        value: pDInfo.price * queryParams.value.productNumber,
      },
      firstPayAmount: {
        currency: "USD",
        unit: "元",
        value: pDInfo.price * queryParams.value.productNumber,
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
        name: queryParams.value.BuyerName,
        country: queryParams.value.BuyerCountry,
        mobile: queryParams.value.BuyerTel,
        email: queryParams.value.BuyerEmail,
        addressDesc: "",
      },
      agentInfo: {},
      supplierInfo: {},
      enclosureUrlStr: "",
      remarks: queryParams.value.treaProcurementDescribes,
      extensionData: ipjson,
      orderItems: [
        {
          productName:
            "ECVV Miniature Circuit Breaker TGB1N-125 2PTGB1N-1252P-D-80A 6KA TENGEN MCB",
          productTotalPrice: {
            currency: "USD",
            unit: "元",
            value: pDInfo.price * queryParams.value.productNumber,
          },
          productUnitPrice: "9.59",
          deliveryTime: year + "-" + month + "-" + date + "T00:00:00.000Z",
          productSpecs: getUrlParam("dvSkuDetail")
            ? getUrlParam("dvSkuDetail")
            : "",
          productUnit: queryParams.value.unit,
          productBrand: "TENGEN",
          productQunatity: queryParams.value.productNumber,
          image: {
            mainSrcs: queryParams.value.mainSrcs,
            attachedSrcs: queryParams.value.attachedSrcs,
          },
          enclosureUrlStr: queryParams.value.OrderEnclosureUrlStr,
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
    headers: headerObj.value,
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

//获取url中的参数
function getUrlParam(name: any) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}
</script>
<template>
  <div class="sendInquiry">
    <div class="product">
      <div class="companyName">{{ companyInfo?.companyname }}</div>
      <div class="productInfo">
        <div class="img">
          <img :src="productInfo.picPath" />
          <div class="prod-name">
            <a :href="productInfo?.productUrl" :title="productInfo?.productname">{{ productInfo?.productname }}</a>
          </div>
        </div>
        <div class="productNum">
          <el-input
            placeholder="Quantity"
            v-model="queryParams.productNumber"
            style="width: 150px"
          />
          <div class="productPieces">
            <el-select
              v-model="unit"
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
      <el-form-item prop="treaProcurementDescribes">
        Content<span style="color: #fd2f3c">*</span>
        <el-input
          v-model="queryParams.treaProcurementDescribes"
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
          action="https://safebuy.ecvv.com/api/services/app/EDocument/UpFiles"
          :headers="headerObj"
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
                ><QuestionFilled
                  style="width: 16px; height: 16px; vertical-align: middle"
                />
              </el-tooltip>
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item prop="BuyerEmail">
        Email Address<span style="color: #fd2f3c">*</span>
        <el-input style="width: 1000px; height: 2px; visibility: hidden" />
        <el-input
          v-model="queryParams.BuyerEmail"
          placeholder="Enter your email address"
          style="width: 300px; height: 40px"
        />
      </el-form-item>
      <el-form-item prop="BuyerName">
        Buyer Name<span style="color: #fd2f3c">*</span>
        <el-input style="width: 1000px; height: 2px; visibility: hidden" />
        <el-input
          v-model="queryParams.BuyerName"
          placeholder="Enter your Name"
          clearable
          style="width: 300px; height: 40px"
        />
      </el-form-item>
      <el-form-item prop="BuyerTel">
        Buyer Tel<span style="color: #fd2f3c">*</span>
        <el-input style="width: 1000px; height: 2px; visibility: hidden" />
        <el-input
          v-model="queryParams.BuyerTel"
          placeholder="Enter your Mobile/Telephone"
          clearable
          style="width: 300px; height: 40px"
        />
      </el-form-item>
      <el-form-item prop="BuyerCountry">
        Buyer Country<span style="color: #fd2f3c">*</span>
        <el-input style="width: 1000px; height: 2px; visibility: hidden" />
        <el-select
          v-model="queryParams.BuyerCountry"
          placeholder="Please Select Country"
          clearable
        >
          <el-option value="" selected="">Please Select Country</el-option>
          <el-option value="Afghanistan">Afghanistan</el-option>
          <el-option value="China">China</el-option>
          <el-option value="Australia">Australia</el-option>
          <el-option value="Austria">Austria</el-option>
          <el-option value="Belgium">Belgium</el-option>
          <el-option value="Brazil">Brazil</el-option>
          <el-option value="Canada">Canada</el-option>
          <el-option value="Denmark">Denmark</el-option>
          <el-option value="Finland">Finland</el-option>
          <el-option value="France">France</el-option>
          <el-option value="Germany">Germany</el-option>
          <el-option value="Hong Kong">Hong Kong</el-option>
          <el-option value="Italy">Italy</el-option>
          <el-option value="Japan">Japan</el-option>
          <el-option value="Netherlands">Netherlands</el-option>
          <el-option value="Norway">Norway</el-option>
          <el-option value="Portugal">Portugal</el-option>
          <el-option value="Singapore">Singapore</el-option>
          <el-option value="South Korea">South Korea</el-option>
          <el-option value="Spain">Spain</el-option>
          <el-option value="Sweden">Sweden</el-option>
          <el-option value="Switzerland">Switzerland</el-option>
          <el-option value="Taiwan">Taiwan</el-option>
          <el-option value="United Kingdom">United Kingdom</el-option>
          <el-option value="United States">United States</el-option>
          <el-option value="Afghanistan">Afghanistan</el-option>
          <el-option value="Albania">Albania</el-option>
          <el-option value="Algeria">Algeria</el-option>
          <el-option value="American Samoa">American Samoa</el-option>
          <el-option value="Andorra">Andorra</el-option>
          <el-option value="Angola">Angola</el-option>
          <el-option value="Anguilla">Anguilla</el-option>
          <el-option value="Antarctica">Antarctica</el-option>
          <el-option value="Antigua and Barbuda">Antigua and Barbuda</el-option>
          <el-option value="Argentina">Argentina</el-option>
          <el-option value="Armenia">Armenia</el-option>
          <el-option value="Aruba">Aruba</el-option>
          <el-option value="Australia">Australia</el-option>
          <el-option value="Austria">Austria</el-option>
          <el-option value="Azerbaijan">Azerbaijan</el-option>
          <el-option value="Bahamas">Bahamas</el-option>
          <el-option value="Bahrain">Bahrain</el-option>
          <el-option value="Bangladesh">Bangladesh</el-option>
          <el-option value="Barbados">Barbados</el-option>
          <el-option value="Belarus">Belarus</el-option>
          <el-option value="Belgium">Belgium</el-option>
          <el-option value="Belize">Belize</el-option>
          <el-option value="Benin">Benin</el-option>
          <el-option value="Bermuda">Bermuda</el-option>
          <el-option value="Bhutan">Bhutan</el-option>
          <el-option value="Bolivia">Bolivia</el-option>
          <el-option value="Bosnia and Herzegovina"
            >Bosnia and Herzegovina</el-option
          >
          <el-option value="Botswana">Botswana</el-option>
          <el-option value="Bouvet Island">Bouvet Island</el-option>
          <el-option value="Brazil">Brazil</el-option>
          <el-option value="British Indian Ocean Territory"
            >British Indian Ocean Territory</el-option
          >
          <el-option value="Brunei Darussalam">Brunei Darussalam</el-option>
          <el-option value="Bulgaria">Bulgaria</el-option>
          <el-option value="Burkina">Burkina Faso</el-option>
          <el-option value="Burundi">Burundi</el-option>
          <el-option value="Cambodia">Cambodia</el-option>
          <el-option value="Cameroon">Cameroon</el-option>
          <el-option value="Canada">Canada</el-option>
          <el-option value="Cape Verde">Cape Verde</el-option>
          <el-option value="Cayman Islands">Cayman Islands</el-option>
          <el-option value="Central African Republic"
            >Central African Republic</el-option
          >
          <el-option value="Chad">Chad</el-option>
          <el-option value="Channel Island">Channel Island</el-option>
          <el-option value="Chile">Chile</el-option>
          <el-option value="China">China</el-option>
          <el-option value="Christmas Island">Christmas Island</el-option>
          <el-option value="Cocos (Keeling) Islands"
            >Cocos (Keeling) Islands</el-option
          >
          <el-option value="Colombia">Colombia</el-option>
          <el-option value="Comoros">Comoros</el-option>
          <el-option value="Congo">Congo</el-option>
          <el-option value="Congo, The Democratic Republic Of The"
            >Congo, The Democratic Republic Of The</el-option
          >
          <el-option value="Cook Islands">Cook Islands</el-option>
          <el-option value="Costa Rica">Costa Rica</el-option>
          <el-option value="Cote DIvoire">Cote DIvoire</el-option>
          <el-option value="Croatia (local name: Hrvatska)"
            >Croatia (local name: Hrvatska)</el-option
          >
          <el-option value="Cuba">Cuba</el-option>
          <el-option value="Cyprus">Cyprus</el-option>
          <el-option value="Czech Republic">Czech Republic</el-option>
          <el-option value="Denmark">Denmark</el-option>
          <el-option value="Djibouti">Djibouti</el-option>
          <el-option value="Dominica">Dominica</el-option>
          <el-option value="East Timor">East Timor</el-option>
          <el-option value="Ecuador">Ecuador </el-option>
          <el-option value="Egypt">Egypt</el-option>
          <el-option value="El Salvador">El Salvador </el-option>
          <el-option value="Eritrea">Eritrea</el-option>
          <el-option value="Estonia">Estonia </el-option>
          <el-option value="Ethiopia">Ethiopia</el-option>
          <el-option value="Falkland Islands (Malvinas)"
            >Falkland Islands (Malvinas)
          </el-option>
          <el-option value="Fiji">Fiji</el-option>
          <el-option value="Finland">Finland </el-option>
          <el-option value="France">France</el-option>
          <el-option value="France Metropolitan"
            >France Metropolitan
          </el-option>
          <el-option value="French Polynesia">French Polynesia</el-option>
          <el-option value="French Southern Territories"
            >French Southern Territories
          </el-option>
          <el-option value="Gabon">Gabon </el-option>
          <el-option value="Gambia">Gambia</el-option>
          <el-option value="Georgia">Georgia </el-option>
          <el-option value="Germany">Germany</el-option>
          <el-option value="Ghana">Ghana </el-option>
          <el-option value="Gibraltar">Gibraltar</el-option>
          <el-option value="Greece">Greece </el-option>
          <el-option value="Greenland">Greenland</el-option>
          <el-option value="Grenada">Grenada </el-option>
          <el-option value="Guadeloupe">Guadeloupe</el-option>
          <el-option value="Guam">Guam </el-option>
          <el-option value="Guatemala">Guatemala</el-option>
          <el-option value="Guinea">Guinea </el-option>
          <el-option value="Guinea-Bissau">Guinea-Bissau</el-option>
          <el-option value="Guyana">Guyana </el-option>
          <el-option value="Haiti">Haiti</el-option>
          <el-option value="Heard and Mc Donald Islands"
            >Heard and Mc Donald Islands
          </el-option>
          <el-option value="Honduras">Honduras </el-option>
          <el-option value="Hong Kong">Hong Kong</el-option>
          <el-option value="Hungary">Hungary </el-option>
          <el-option value="Iceland">Iceland</el-option>
          <el-option value="India">India </el-option>
          <el-option value="Indonesia">Indonesia</el-option>
          <el-option value="Iran (Islamic Republic of)"
            >Iran (Islamic Republic of)
          </el-option>
          <el-option value="Iraq">Iraq </el-option>
          <el-option value="Ireland">Ireland</el-option>
          <el-option value="Israel">Israel </el-option>
          <el-option value="Italy">Italy</el-option>
          <el-option value="Jamaica">Jamaica </el-option>
          <el-option value="Japan">Japan</el-option>
          <el-option value="Jordan">Jordan </el-option>
          <el-option value="Kazakhstan">Kazakhstan</el-option>
          <el-option value="Kenya">Kenya </el-option>
          <el-option value="Kiribati">Kiribati</el-option>
          <el-option value="Kuwait">Kuwait </el-option>
          <el-option value="Kyrgyzstan">Kyrgyzstan</el-option>
          <el-option value="Lao Peoples Democratic Republic"
            >Lao Peoples Democratic Republic
          </el-option>
          <el-option value="Latvia">Latvia </el-option>
          <el-option value="Lebanon">Lebanon</el-option>
          <el-option value="Lesotho">Lesotho </el-option>
          <el-option value="Liberia">Liberia</el-option>
          <el-option value="Libyan Arab Jamahiriya"
            >Libyan Arab Jamahiriya
          </el-option>
          <el-option value="Liechtenstein">Liechtenstein </el-option>
          <el-option value="Lithuania">Lithuania</el-option>
          <el-option value="Luxembourg">Luxembourg</el-option>
          <el-option value="Macau">Macau</el-option>
          <el-option value="Macedonia">Macedonia</el-option>
          <el-option value="Madagascar">Madagascar </el-option>
          <el-option value="Malawi">Malawi</el-option>
          <el-option value="Malaysia">Malaysia </el-option>
          <el-option value="Maldives">Maldives</el-option>
          <el-option value="Mali">Mali </el-option>
          <el-option value="Malta">Malta</el-option>
          <el-option value="Marshall Islands">Marshall Islands </el-option>
          <el-option value="Martinique">Martinique </el-option>
          <el-option value="Mauritania">Mauritania</el-option>
          <el-option value="Mauritius">Mauritius</el-option>
          <el-option value="Mayotte">Mayotte</el-option>
          <el-option value="Mexico">Mexico</el-option>
          <el-option value="Micronesia">Micronesia</el-option>
          <el-option value="Moldova">Moldova</el-option>
          <el-option value="Monaco">Monaco</el-option>
          <el-option value="Mongolia">Mongolia</el-option>
          <el-option value="Montserrat">Montserrat </el-option>
          <el-option value="Morocco">Morocco</el-option>
          <el-option value="Mozambique">Mozambique </el-option>
          <el-option value="Myanmar">Myanmar</el-option>
          <el-option value="Namibia">Namibia </el-option>
          <el-option value="Nauru">Nauru</el-option>
          <el-option value="Nepal">Nepal </el-option>
          <el-option value="Netherlands">Netherlands</el-option>
          <el-option value="Netherlands Antilles"
            >Netherlands Antilles
          </el-option>
          <el-option value="New Zealand">New Zealand</el-option>
          <el-option value="Nicaragua">Nicaragua </el-option>
          <el-option value="Niger">Niger</el-option>
          <el-option value="Nigeria">Nigeria </el-option>
          <el-option value="Niue">Niue</el-option>
          <el-option value="Norfolk Island">Norfolk Island </el-option>
          <el-option value="North Korea">North Korea</el-option>
          <el-option value="Northern Mariana Islands"
            >Northern Mariana Islands</el-option
          >
          <el-option value="Norway">Norway </el-option>
          <el-option value="Oman">Oman</el-option>
          <el-option value="Other Country">Other Country </el-option>
          <el-option value="Pakistan">Pakistan</el-option>
          <el-option value="Palau">Palau</el-option>
          <el-option value="Palestine">Palestine</el-option>
          <el-option value="Panama">Panama</el-option>
          <el-option value="Paraguay">Paraguay</el-option>
          <el-option value="Peru">Peru </el-option>
          <el-option value="Philippines">Philippines</el-option>
          <el-option value="Pitcairn">Pitcairn </el-option>
          <el-option value="Poland">Poland</el-option>
          <el-option value="Portugal">Portugal </el-option>
          <el-option value="Puerto Rico">Puerto Rico</el-option>
          <el-option value="Qatar">Qatar</el-option>
          <el-option value="Reunion">Reunion</el-option>
          <el-option value="Romania">Romania</el-option>
          <el-option value="Rwanda">Rwanda</el-option>
          <el-option value="Saint Kitts and Nevis"
            >Saint Kitts and Nevis
          </el-option>
          <el-option value="Samoa">Samoa</el-option>
          <el-option value="San Marino">San Marino </el-option>
          <el-option value="199">Sao Tome and Principe </el-option>
          <el-option value="Saudi Arabia">Saudi Arabia</el-option>
          <el-option value="Senegal">Senegal </el-option>
          <el-option value="Seychelles">Seychelles</el-option>
          <el-option value="Sierra Leone">Sierra Leone </el-option>
          <el-option value="Singapore">Singapore</el-option>
          <el-option value="Slovakia (Slovak Republic)"
            >Slovakia (Slovak Republic)</el-option
          >
          <el-option value="191">Slovenia </el-option>
          <el-option value="Solomon Islands">Solomon Islands</el-option>
          <el-option value="Somalia">Somalia</el-option>
          <el-option value="South Korea">South Korea</el-option>
          <el-option value="Spain">Spain </el-option>
          <el-option value="Sri Lanka">Sri Lanka</el-option>
          <el-option value="St. Helena">St. Helena </el-option>
          <el-option value="Sudan">Sudan</el-option>
          <el-option value="Suriname">Suriname </el-option>
          <el-option value="Swaziland">Swaziland</el-option>
          <el-option value="Sweden">Sweden </el-option>
          <el-option value="Switzerland">Switzerland</el-option>
          <el-option value="Syrian Arab Republic"
            >Syrian Arab Republic
          </el-option>
          <el-option value="Taiwan">Taiwan </el-option>
          <el-option value="Tajikistan">Tajikistan</el-option>
          <el-option value="Tanzania">Tanzania </el-option>
          <el-option value="Thailand">Thailand</el-option>
          <el-option value="Togo">Togo </el-option>
          <el-option value="Tokelau">Tokelau</el-option>
          <el-option value="Tonga">Tonga </el-option>
          <el-option value="Trinidad and Tobago">Trinidad and Tobago</el-option>
          <el-option value="Tunisia">Tunisia</el-option>
          <el-option value="Turkey">Turkey</el-option>
          <el-option value="Turkmenistan">Turkmenistan</el-option>
          <el-option value="Tuvalu">Tuvalu</el-option>
          <el-option value="Uganda">Uganda </el-option>
          <el-option value="Ukraine">Ukraine</el-option>
          <el-option value="United Arab Emirates"
            >United Arab Emirates
          </el-option>
          <el-option value="United States">United States</el-option>
          <el-option value="United States Minor Outlying Islands"
            >United States Minor Outlying Islands
          </el-option>
          <el-option value="Uruguay">Uruguay </el-option>
          <el-option value="Uzbekistan">Uzbekistan</el-option>
          <el-option value="Vanuatu">Vanuatu </el-option>
          <el-option
            value="Vatican City State (Holy
                                    See)"
            >Vatican City State (Holy See)
          </el-option>
          <el-option value="Venezuela">Venezuela</el-option>
          <el-option value="Vietnam">Vietnam </el-option>
          <el-option value="Virgin Islands (U.S.)"
            >Virgin Islands (U.S.)</el-option
          >
          <el-option value="Wallis And Futuna Islands"
            >Wallis And Futuna Islands</el-option
          >
          <el-option value="Western Sahara">Western Sahara </el-option>
          <el-option value="Yemen">Yemen</el-option>
          <el-option value="Yugoslavia">Yugoslavia</el-option>
          <el-option value="Zambia">Zambia</el-option>
          <el-option value="Zimbabwe">Zimbabwe</el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="textVcode">
        Verification Code<span style="color: #fd2f3c">*</span>
        <el-input style="width: 1000px; height: 2px; visibility: hidden" />
        <el-input
          v-model="queryParams.textVcode"
          style="width: 300px; height: 40px"
        />
        <img
          src="https://www.ecvv.com/ecvvajax/checkcode.ashx"
          @click="(e: any) => { e.target.src = e.target.src + '?' + Math.random(); }"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="height: 40px; font-size: 18px"
          @click="onSubmit"
          >Send inquiry Now</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less" scoped>
.sendInquiry {
  width: 52%;
  margin: 20px auto;
  margin-top: 50px;
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
      line-height: 24px;
      width: 990px;
      color: #1470cc;
    }
  }
}
</style>
