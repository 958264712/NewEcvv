<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import type { UploadProps } from "element-plus";
import { Session } from "@/utils/storage";
import { postSendMsg } from "@/api/modular/company.ts";

const sendCompanyInfo = Session.get("sendCompanyInfo");
const productInfo = Session.get("productInfo");
const companyInfo = Session.get("companyInfo");
const router = useRouter();
const transferModels = ref();
const CateList = ref("");
const checkbox = ref(true);
const extra_list = ref<any>([]);
const location =
  router.options.history.location
    .split("?")[1]
    ?.replaceAll("&", " ")
    .split(" ") ?? [];

const queryParams = ref<any>({
  txtSubject: "",
  txtFullName: "",
  txtMessage: sendCompanyInfo.message,
  verificationCode: "",
  txtCompanyName: "",
  txtEmail: sendCompanyInfo.form,
  deliveryTime: 0,
  selSex: "",
  txtQuant: 1000,
  multipleQuotes: true,
  selCountry: "",
  txtUnit: "Piece(s)",
  txtCountryCode: "",
  txtAreaCode: "",
  txtTel: "",
  txtFaxCountryCode: "",
  txtFaxAreaCode: "",
  txtFax: "",
  chkIDs: "",
  hdCountryId: "",
  extraRequest: "",
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
const countryList = ref([
  { label: "Afghanistan", value: "3" },
  { label: "China", value: "46" },
  { label: "Australia", value: "14" },
  { label: "Austria", value: "13" },
  { label: "Belgium", value: "20" },
  { label: "Brazil", value: "29" },
  { label: "Canada", value: "36" },
  { label: "Denmark", value: "56" },
  { label: "Finland", value: "67" },
  { label: "France", value: "72" },
  { label: "Germany", value: "75" },
  { label: "China Hong Kong", value: "90" },
  { label: "Italy", value: "104" },
  { label: "Japan", value: "107" },
  { label: "Netherlands", value: "157" },
  { label: "Norway", value: "158" },
  { label: "Portugal", value: "176" },
  { label: "Singapore", value: "189" },
  { label: "South Korea", value: "115" },
  { label: "Spain", value: "65" },
  { label: "Sweden", value: "188" },
  { label: "China Taiwan", value: "217" },
  { label: "United Kingdom", value: "221" },
  { label: "United States", value: "223" },
  { label: "Albania", value: "6" },
  { label: "Algeria", value: "59" },
  { label: "American Samoa", value: "12" },
  { label: "Andorra", value: "1" },
  { label: "Angola", value: "9" },
  { label: "Anguilla", value: "5" },
  { label: "Antarctica", value: "10" },
  { label: "Antigua and Barbuda", value: "4" },
  { label: "Argentina", value: "11" },
  { label: "Armenia", value: "7" },
  { label: "Aruba", value: "15" },
  { label: "Australia", value: "14" },
  { label: "Austria", value: "13" },
  { label: "Azerbaijan", value: "16" },
  { label: "AfghBahamasanistan", value: "30" },
  { label: "Bahrain", value: "23" },
  { label: "Bangladesh", value: "19" },
  { label: "Barbados", value: "18" },
  { label: "Belarus", value: "34" },
  { label: "Belgium", value: "20" },
  { label: "Belize", value: "35" },
  { label: "Benin", value: "25" },
  { label: "Bermuda", value: "26" },
  { label: "Bhutan", value: "31" },
  { label: "Bolivia", value: "28" },
  { label: "Bosnia and Herzegovina", value: "17" },
  { label: "Botswana", value: "33" },
  { label: "Bouvet Island", value: "32" },
  { label: "Brazil", value: "29" },
  { label: "British Indian Ocean Territory", value: "100" },
  { label: "Brunei Darussalam", value: "27" },
  { label: "Bulgaria", value: "22" },
  { label: "Burkina Faso", value: "21" },
  { label: "Burundi", value: "24" },
  { label: "Cambodia", value: "110" },
  { label: "Cameroon", value: "45" },
  { label: "Canada", value: "36" },
  { label: "Cape Verde", value: "50" },
  { label: "Cayman Islands", value: "117" },
  { label: "Central African Republic", value: "39" },
  { label: "Chad", value: "204" },
  { label: "Channel Island", value: "38" },
  { label: "Chile", value: "44" },
  { label: "China", value: "46" },
  { label: "Christmas Island", value: "51" },
  { label: "Cocos (Keeling) Islands", value: "37" },
  { label: "Colombia", value: "47" },
  { label: "Comoros", value: "112" },
  { label: "Congo", value: "40" },
  { label: "Congo, The Democratic Republic Of The", value: "240" },
  { label: "Cook Islands", value: "43" },
  { label: "Costa Rica", value: "48" },
  { label: "Cote DIvoire", value: "42" },
  { label: "Croatia (local name: Hrvatska)", value: "93" },
  { label: "Cuba", value: "49" },
  { label: "Cyprus", value: "52" },
  { label: "Czech Republic", value: "53" },
  { label: "Denmark", value: "56" },
  { label: "Djibouti", value: "55" },
  { label: "Dominica", value: "57" },
  { label: "Dominican Republic", value: "58" },
  { label: "East Timor", value: "213" },
  { label: "Ecuador", value: "60" },
  { label: "Egypt", value: "62" },
  { label: "El Salvador", value: "200" },
  { label: "Equatorial Guinea", value: "84" },
  { label: "Eritrea", value: "64" },
  { label: "Estonia", value: "61" },
  { label: "Ethiopia", value: "66" },
  { label: "Falkland Islands (Malvinas)", value: "69" },
  { label: "Faroe Islands", value: "71" },
  { label: "Fiji", value: "68" },
  { label: "Finland", value: "67" },
  { label: "France", value: "72" },
  { label: "France Metropolitan", value: "73" },
  { label: "French Guiana", value: "77" },
  { label: "French Polynesia", value: "167" },
  { label: "French Southern Territories", value: "205" },
  { label: "Gabon", value: "74" },
  { label: "Gambia", value: "81" },
  { label: "Georgia", value: "76" },
  { label: "Germany", value: "54" },
  { label: "Ghana", value: "78" },
  { label: "Gibraltar", value: "79" },
  { label: "Greece", value: "85" },
  { label: "Greenland", value: "80" },
  { label: "Grenada", value: "75" },
  { label: "Guadeloupe", value: "83" },
  { label: "Guam", value: "87" },
  { label: "Guatemala", value: "86" },
  { label: "Guinea", value: "82" },
  { label: "Guinea-Bissau", value: "88" },
  { label: "Guyana", value: "89" },
  { label: "Haiti", value: "94" },
  { label: "Heard and Mc Donald Islands", value: "91" },
  { label: "Honduras", value: "92" },
  { label: "Hungary", value: "95" },
  { label: "Iceland", value: "103" },
  { label: "India", value: "99" },
  { label: "Indonesia", value: "96" },
  { label: "Iran (Islamic Republic of)", value: "102" },
  { label: "Iraq", value: "101" },
  { label: "Ireland", value: "97" },
  { label: "Israel", value: "98" },
  { label: "Italy", value: "104" },
  { label: "Jamaica", value: "105" },
  { label: "Jordan", value: "106" },
  { label: "Kazakhstan", value: "118" },
  { label: "Kenya", value: "108" },
  { label: "Kiribati", value: "111" },
  { label: "Kuwait", value: "116" },
  { label: "Kyrgyzstan", value: "109" },
  { label: "Lao Peoples Democratic Republic", value: "119" },
  { label: "Latvia", value: "128" },
  { label: "Lebanon", value: "120" },
  { label: "Lesotho", value: "125" },
  { label: "Liberia", value: "124" },
  { label: "Libyan Arab Jamahiriya", value: "129" },
  { label: "AfghLiechtensteinanistan", value: "122" },
  { label: "Lithuania", value: "126" },
  { label: "Luxembourg", value: "127" },
  { label: "Macau", value: "139" },
  { label: "Macedonia", value: "135" },
  { label: "Madagascar", value: "133" },
  { label: "Malawi", value: "147" },
  { label: "Malaysia", value: "149" },
  { label: "Maldives", value: "146" },
  { label: "Mali", value: "136" },
  { label: "Malta", value: "144" },
  { label: "Marshall Islands", value: "134" },
  { label: "Martinique", value: "141" },
  { label: "Mauritania", value: "142" },
  { label: "Mauritius", value: "145" },
  { label: "Mayotte", value: "236" },
  { label: "Mexico", value: "148" },
  { label: "Micronesia", value: "70" },
  { label: "Moldova", value: "132" },
  { label: "Monaco", value: "131" },
  { label: "Mongolia", value: "138" },
  { label: "Montserrat", value: "143" },
  { label: "Morocco", value: "130" },
  { label: "Mozambique", value: "150" },
  { label: "Myanmar", value: "137" },
  { label: "Namibia", value: "151" },
  { label: "Nauru", value: "160" },
  { label: "Nepal", value: "159" },
  { label: "Netherlands", value: "157" },
  { label: "Netherlands Antilles", value: "8" },
  { label: "New Caledonia", value: "152" },
  { label: "New Zealand", value: "162" },
  { label: "Nicaragua", value: "156" },
  { label: "Niger", value: "153" },
  { label: "Nigeria", value: "155" },
  { label: "Niue", value: "161" },
  { label: "Norfolk Island", value: "154" },
  { label: "North Korea", value: "114" },
  { label: "Northern Mariana Islands", value: "140" },
  { label: "Norway", value: "158" },
  { label: "Oman", value: "163" },
  { label: "Other Country", value: "164" },
  { label: "Pakistan", value: "170" },
  { label: "Palau", value: "177" },
  { label: "Palestine", value: "175" },
  { label: "Panama", value: "165" },
  { label: "Papua New Guinea", value: "168" },
  { label: "Paraguay", value: "178" },
  { label: "Peru", value: "166" },
  { label: "Philippines", value: "169" },
  { label: "Pitcairn", value: "173" },
  { label: "Poland", value: "171" },
  { label: "Portugal", value: "176" },
  { label: "Puerto Rico", value: "174" },
  { label: "Qatar", value: "179" },
  { label: "Reunion", value: "180" },
  { label: "Romania", value: "181" },
  { label: "Russian Federation", value: "182" },
  { label: "Rwanda", value: "183" },
  { label: "Saint Kitts and Nevis", value: "113" },
  { label: "Saint Lucia", value: "121" },
  { label: "Saint Vincent and the Grenadines", value: "227" },
  { label: "Samoa", value: "234" },
  { label: "San Marino", value: "195" },
  { label: "Sao Tome and Principe", value: "199" },
  { label: "Saudi Arabia", value: "184" },
  { label: "Senegal", value: "196" },
  { label: "Seychelles", value: "186" },
  { label: "Sierra Leone", value: "194" },
  { label: "Singapore", value: "189" },
  { label: "Slovakia (Slovak Republic)", value: "193" },
  { label: "Slovenia", value: "191" },
  { label: "Solomon Islands", value: "185" },
  { label: "Somalia", value: "197" },
  { label: "South Africa", value: "238" },
  { label: "South Korea", value: "115" },
  { label: "Spain", value: "65" },
  { label: "Sri Lanka", value: "123" },
  { label: "St. Helena", value: "190" },
  { label: "St. Pierre and Miquelon", value: "172" },
  { label: "Sudan", value: "187" },
  { label: "Suriname", value: "198" },
  { label: "Svalbard and Jan Mayen Islands", value: "192" },
  { label: "Swaziland", value: "202" },
  { label: "Sweden", value: "188" },
  { label: "Switzerland", value: "41" },
  { label: "Syrian Arab Republic", value: "201" },
  { label: "Tajikistan", value: "208" },
  { label: "Tanzania", value: "218" },
  { label: "Thailand", value: "207" },
  { label: "Togo", value: "206" },
  { label: "Tokelau", value: "209" },
  { label: "Tonga", value: "212" },
  { label: "Trinidad and Tobago", value: "215" },
  { label: "Tunisia", value: "211" },
  { label: "Turkey", value: "214" },
  { label: "Turkmenistan", value: "210" },
  { label: "Turks and Caicos Islands", value: "203" },
  { label: "Tuvalu", value: "216" },
  { label: "Uganda", value: "220" },
  { label: "Ukraine", value: "219" },
  { label: "United Arab Emirates", value: "2" },
  { label: "United Kingdom", value: "221" },
  { label: "United States", value: "223" },
  { label: "United States Minor Outlying Islands", value: "222" },
  { label: "Uruguay", value: "224" },
  { label: "Uzbekistan", value: "225" },
  { label: "Vanuatu", value: "232" },
  { label: "Vatican City State (Holy See)", value: "226" },
  { label: "Venezuela", value: "228" },
  { label: "AfghaniVietnamstan", value: "231" },
  { label: "Virgin Islands (British)", value: "229" },
  { label: "Virgin Islands (U.S.)", value: "230" },
  { label: "Wallis And Futuna Islands", value: "233" },
  { label: "Western Sahara", value: "63" },
  { label: "Yemen", value: "235" },
  { label: "Yugoslavia", value: "237" },
  { label: "Zambia", value: "239" },
  { label: "Zimbabwe", value: "241" },
]);
const sexList = ref([
  { label: "Male", value: 1 },
  { label: "FaMale", value: 0 },
]);
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
      data: { inqcode: queryParams.value.verificationCode },
    }).then((res) => {
      if (res && res == "1") {
        submitFrom();
      } else {
        ElMessage.error("Your Input Is Error Verification Code!");
        return;
      }
    });
  } else {
    // 不验证验证码直接验证表单
    submitFrom();
  }
};
// 提交
const submitFrom = async () => {
  if (checkbox.value) {
    if (!sendCompanyInfo.product) {
      queryParams.value.chkIDs = "C|" + companyInfo.cid;
    } else {
      queryParams.value.chkIDs = "P|" + productInfo.pid;
    }
    if(queryParams.value.selSex){
      switch(queryParams.value.selSex){
        case 'Male':
          queryParams.value.selSex = 1;
          break;
        case 'FaMale':
          queryParams.value.selSex = 0;
          break;
      }
    }
    await postSendMsg(Object.assign(queryParams.value)).then((res) => {
      if (res.data.type === "success") {
        ElMessage.success("You submit success!");
        // 提交成功后清空列表数据
        queryParams.value.txtSubject = "";
        queryParams.value.selCountry = "";
        queryParams.value.txtFullName = "";
        queryParams.value.txtMessage = "";
        queryParams.value.verificationCode = "";
        queryParams.value.txtCompanyName = "";
        queryParams.value.txtCountryCode = "";
        queryParams.value.txtAreaCode = "";
        queryParams.value.txtTel = "";
        queryParams.value.txtFaxCountryCode = "";
        queryParams.value.txtFaxAreaCode = "";
        queryParams.value.txtFax = "";
        queryParams.value.hdCountryId = "";
        queryParams.value.txtQuant = 1000;
        queryParams.value.deliveryTime = 0;
        queryParams.value.extraRequest = "";
        extra_list.value = []
        queryParams.value.multipleQuotes = true;
        queryParams.value.txtUnit = "Piece(s)";
        queryParams.value.selSex = "";
      } else {
        ElMessage.success("You submit error!");
      }
    });
  } else {
    ElMessage.error("Please check the Agree Agreement box");
  }
};
// 改变unit
const change = (val) => {
  queryParams.value.txtUnit = val;
};

// 获取国家以及国家id
const change1 = (val) => {
  let obj = {};
  obj = countryList.value.find((item) => {
    // 是通过接口请求下来的区域列表
    return item.label == val; //筛选出匹配数据
  });
  queryParams.value.selCountry = obj.label;
  queryParams.value.hdCountryId = obj.value;
};

// checkbox复用框数组 extraRequest
const change2 = (val) => {
  queryParams.value.extraRequest = val.join();
};

</script>

<template>
  <div class="content">
    <div class="block-title">Send Message</div>
    <el-form
      :model="queryParams"
      ref="queryForm"
      label-width="150px"
      :inline="true"
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item
            label="Inquiry Product:"
            :rules="[
              {
                required: true,
                message:
                  'Please fill in the required fields before submitting.',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              v-model="queryParams.txtSubject"
              clearable
              placeholder="Example:Inquiry for Metal Cutting Machine"
              style="width: 300px"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="To:">
            <template v-if="!sendCompanyInfo.product">
              {{ sendCompanyInfo.to }}
            </template>
            <template v-else>
              <div class="productInfo">
                <div class="img">
                  <img :src="productInfo.picPath" />
                  <div class="prod-name">
                    <a
                      :href="productInfo?.productUrl"
                      :title="productInfo?.productname"
                      >{{ productInfo?.productname }}</a
                    >
                  </div>
                </div>
                <div class="productNum">
                  <el-input
                    placeholder="Quantity"
                    v-model="queryParams.txtQuant"
                    style="width: 100px"
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
            </template>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item
            label="Message:"
            :rules="[
              {
                required: true,
                message: 'Your message must be between 20-3000 characters',
                trigger: 'blur',
              },
            ]"
          >
            <el-input
              v-model="queryParams.txtMessage"
              type="textarea"
              placeholder="The following information is for your reference.

Company introduction:

Interested products:

Detailed requirements:

Other special requests:
"
              rows="10"
              style="width: 600px"
              minlength="20"
              maxlength="3000"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="Delivery Time:">
            Within&nbsp;&nbsp;
            <el-radio-group v-model="queryParams.deliveryTime">
              <el-radio :label="7">7 Days</el-radio>
              <el-radio :label="14">14 Days</el-radio>
              <el-radio :label="30">30 Days</el-radio>
              <el-radio :label="60">60 Days</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="Extra Request:">
            <el-checkbox-group
              v-model="extra_list"
              @change="(val) => change2(val)"
            >
              <el-checkbox label="Price" size="large" />
              <el-checkbox label="Product Specifications" size="large" />
              <el-checkbox label="Shipping & Payment" size="large" />
              <el-checkbox label="Company Profile" size="large" />
              <el-checkbox label="Inspection Certification" size="large" />
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div style="text-align: center; margin-bottom: 20px">
            <input
              type="checkbox"
              checked
              v-model="checkbox"
              style="margin-right: 20px"
            />
            <strong
              >Recommend matching suppliers if this supplier doesn’t contact me
              on Message Center within 24 hours.</strong
            >
          </div>
        </el-col>
        <div class="contact-information">
          <div class="block-title block-title-more">Your contact details</div>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item
              label="Business Email:"
              :rules="[
                {
                  required: true,
                  message:
                    'Please fill in the required fields before submitting.',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="queryParams.txtEmail"
                clearable
                placeholder="Gmail is recommended"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item
              label="Destination:"
              :rules="[
                {
                  required: true,
                  message:
                    'Please fill in the required fields before submitting.',
                  trigger: 'blur',
                },
              ]"
            >
              <el-select
                v-model="queryParams.selCountry"
                placeholder="Please Select Country"
                @change="(val) => change1(val)"
              >
                <el-option
                  v-for="(item, index) in countryList"
                  :key="index"
                  :label="item.label"
                  :value="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="Full Name:">
              <el-select
                v-model="queryParams.selSex"
                placeholder="Please Select Gender"
              >
                <el-option
                  v-for="(item, index) in sexList"
                  :key="index"
                  :label="item.label"
                  :value="item.label"
                />
              </el-select>
              <el-input
                v-model="queryParams.txtFullName"
                clearable
                placeholder="Please Input FullName"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item
              label="Company Name:"
              :rules="[
                {
                  required: true,
                  message:
                    'Please fill in the required fields before submitting.',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="queryParams.txtCompanyName"
                clearable
                placeholder="Please Input Company Name"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item
              label="Phone Number:"
              :rules="[
                {
                  required: true,
                  message:
                    'Please fill in the required fields before submitting.',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="queryParams.txtCountryCode"
                clearable
                style="width: 100px; margin-right: 10px"
                placeholder="Country"
              />
              <el-input
                v-model="queryParams.txtAreaCode"
                clearable
                style="width: 100px; margin-right: 10px"
                placeholder="Area"
              />
              <el-input
                v-model="queryParams.txtTel"
                clearable
                placeholder="Tel"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item
              label="Fax Number:"
              :rules="[
                {
                  required: true,
                  message:
                    'Please fill in the required fields before submitting.',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="queryParams.txtFaxCountryCode"
                clearable
                style="width: 100px; margin-right: 10px"
                placeholder="FaxCountry"
              />
              <el-input
                v-model="queryParams.txtFaxAreaCode"
                clearable
                style="width: 100px; margin-right: 10px"
                placeholder="FaxArea"
              />
              <el-input
                v-model="queryParams.txtFax"
                clearable
                placeholder="FaxTel"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item
              label="Verification Code:"
              :rules="[
                {
                  required: true,
                  message:
                    'Please fill in the required fields before submitting.',
                  trigger: 'blur',
                },
              ]"
            >
              <el-input
                v-model="queryParams.verificationCode"
                clearable
                placeholder="Please Input Verification Code"
              />
              <div class="layui-col-md1" style="margin-left: 10px">
                <img
                  title="Load new image"
                  src="https://www.ecvv.com/ecvvajax/checkcode.ashx"
                  @click="(e: any) => { e.target.src = e.target.src + '?' + Math.random(); }"
                  style="
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                  "
                />
              </div>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label=" ">
              <el-button type="primary" @click="onSubmit">Submit</el-button>
            </el-form-item>
          </el-col>
        </div>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.content {
  width: 883px;
  border: 1px solid #e4ecf3;
  /* overflow: hidden; */
  padding: 30px;
  background-color: #fff;

  .block-title {
    font-size: 20px;
    font-weight: bold;
    line-height: 34px;
    margin-bottom: 20px;
  }
  .productInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      display: flex;
      img {
        width: 70px;
        height: 70px;
      }
      .prod-name {
        margin-left: 20px;
        margin-right: 20px;
        height: 48px;
        line-height: 70px;
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
  .layui-form-item {
    margin-bottom: 15px;
    clear: both;
    zoom: 1;

    .layui-form-label {
      width: 145px;
    }

    .layui-form-label {
      float: left;
      display: block;
      padding: 9px 15px;
      width: 80px;
      font-weight: 400;
      line-height: 20px;
      text-align: right;
    }
  }

  .block-title-more {
    padding-top: 20px;
    border-top: 1px solid #e4ecf3;
  }

  .layui-row {
    display: flex;
  }
}
</style>
