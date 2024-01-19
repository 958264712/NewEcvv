<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { ElMessage } from "element-plus";
import { Session } from "@/utils/storage";
import { useRouter } from "vue-router";
import { requestSample } from "@/api/modular/company.ts";
import { fileDelete } from '@/api/modular/sourcingRequest'
import type { UploadProps } from 'element-plus'

const router = useRouter();
const add = ref("");
const ruleFormRef = ref();
const uploadRef = ref();
const fileUrl_list = ref<any>([])
const dialogTableVisible = ref(false);
const ifImages = ref(false);
const productInfo = Session.get("pInfo");
const pInfo = Session.get("productInfo");
const productDataInfo = Session.get("pDInfo");
const companyInfo = Session.get("companyInfo");

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
// 展开
const handleImages = () => {
  ifImages.value = !ifImages.value;
};

//获取url中的参数
function getUrlParam(name: any) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}
const ruleForm = ref<any>({
  chkIDs: "P|" + pInfo.pid,
  txtQuant: 1,
  txtUnit: "",
  txtMessage: "",
  txtFullName: "",
  txtEmail: "",
  txtTel: "",
  selCountry: "",
  selCountryCode: "",
  deliveryTime: "",
  files: "",
});
// 提交表单验证
const submit = async () => {
  ruleForm.value.files = fileUrl_list.value.join(',')
  if (ruleForm.value.txtQuant < 1) {
    ElMessage.error("Minimum order quantity must be greater than 1");
    return false;
  }
  if (ruleForm.value.txtFullName == "") {
    ElMessage.error("Please Enter Full Name");
    return false;
  }
  if (ruleForm.value.txtEmail == "") {
    ElMessage.error("Please Enter Email");
    return false;
  }
  var re = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  if (!re.test(ruleForm.value.txtEmail)) {
    ElMessage.error("Please enter the correct email format");
    return false;
  }
  if (ruleForm.value.txtTel == "") {
    ElMessage.error("Please Enter Mobile/Telephone");
    return false;
  }
  if (ruleForm.value.selCountry == "") {
    ElMessage.error("Please Select Country");
    return false;
  }
  if (ruleForm.value.txtQuant == "") {
    ElMessage.error("Please Enter Quantity");
    return false;
  }

  if (ruleForm.value.txtUnit == "") {
    ElMessage.error("Please Select Unit");
    return false;
  }

  if (ruleForm.value.deliveryTime == "") {
    ElMessage.error("Please Select Delivery Time");
    return false;
  }
  await requestSample(Object.assign(ruleForm.value)).then((res)=>{
    if(res.data.result==='OK'){
      ElMessage.success('You Submit Success!')
      ruleForm.value={
        txtQuant:1
      }
      uploadRef.value.clearFiles()
      ifImages.value = false
    }
    
  })
};
const clickAdd = () => {
  piecesList.value.push({ label: add.value });
  add.value = "";
};
// 获取国家以及国家id
const change1 = (val) => {
  let obj = {};
  obj = countryList.value.find((item) => {
    // 是通过接口请求下来的区域列表
    return item.label == val; //筛选出匹配数据
  });
  ruleForm.value.selCountry = obj.label;
  ruleForm.value.selCountryCode = obj.value;
};

// 响应头 headerObj
const headerObj = { Authorization: productDataInfo.token }
// 文件上传成功后进行拼接
const successUpload: UploadProps['onSuccess'] = (response) => {
    const url = JSON.parse(response.result).split(',')
    const src = url[3].split(':')
    fileUrl_list.value.push(src[1] + ':' + src[2])
}
// 删除文件列表中的文件时
const removeFile: UploadProps['onRemove'] = async (uploadFile: any) => {
    const url = JSON.parse(uploadFile.response.result).split(',')
    const key = url[2].split(':')
    const src = url[3].split(':')
    await fileDelete(key[2]).then(res => {
        if (res.data.type === 'success') {
            fileUrl_list.value.map((item: any, index: number) => {
                if (item === src[1] + ':' + src[2]) {
                    fileUrl_list.value.splice(index, 1)
                }
            })
            ElMessage.success('You success delete it is files')
        } else {
            ElMessage.error('You did not delete the files')
        }
    })
}

const clickProduct = (id) => {
  let routeUrl = router.resolve({ path: `/product/${id}` });
  window.open(routeUrl.href, "_blank");
};
</script>
<template>
  <div class="requestSample">
    <div class="title">
      <h2>Request Sample</h2>
    </div>
    <div class="form">
      <div class="companyName">{{ companyInfo.companyname }}</div>
      <div class="productInfo">
        <div class="prod-detail-l">
          <div class="prod-img img-thumb">
            <div class="img-thumb-inner">
              <img
                :alt="productInfo.productName"
                :title="productInfo.productName"
                :src="productInfo.picPathAll"
              />
            </div>
          </div>
        </div>
        <div class="prod-detail-r">
          <a @click="clickProduct(productInfo.productID)" class="prod-name">{{
            productInfo.productName
          }}</a>
          <div class="prod-quantity cf">
            <div class="quantity-item it-qua">
              <span class="item-title">Quantity</span>
              <el-form-item prop="productNumber">
                <el-input-number
                  v-model="ruleForm.txtQuant"
                  value="1"
                  placeholder="Quantity"
                  @keyup="(val: any) => { val = val.replace(/[^0-9.]+/, '') }"
                  clearable
                />
              </el-form-item>
              <div class="feedback-block" wrapfor="sampleQuantity"></div>
            </div>
            <div class="quantity-item it-unit">
              <span class="item-title">Unit</span>
              <el-select
                v-model="ruleForm.txtUnit"
                placeholder="Pieces"
                style="width: 90px"
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
            <input type="hidden" name="samplePriceSingle" value="33.55" />
            <div class="quantity-item it-price">
              <span class="item-title">Sample Price</span>
              <span class="item-txt J-sample" cz-price="33.55"
                >{{ productInfo.priceUnit }}
                {{ productInfo.productPrice }}</span
              >
            </div>
            <div class="quantity-item it-total">
              <span class="item-title">Total</span>
              <span class="item-txt total J-total"
                >{{ productInfo.priceUnit}}{{ productInfo.productPrice * ruleForm.txtQuant }}</span
              >
            </div>
          </div>
          <div>
            <el-form-item prop="txtMessage" label="Remark:">
              <el-input
                v-model="ruleForm.txtMessage"
                maxlength="2000"
                cols="30"
                rows="5"
                type="textarea"
                placeholder="I need a sample of this product, looking forward to your reply as soon as possible."
              />
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="productPrice">
        <h3>Contacts</h3>
        <el-form
          model="ruleForm"
          ref="ruleFormRef"
          size="default"
          label-width="200px"
        >
          <el-form-item v-show="false">
            <el-input v-model="ruleForm.chkIDs" />
          </el-form-item>
          <el-form-item prop="txtFullName" label="Full Name:">
            <el-input
              v-model="ruleForm.txtFullName"
              placeholder="Please Input Full Name"
              clearable
            />
          </el-form-item>
          <el-form-item prop="txtEmail" label="Email Address:">
            <el-input
              v-model="ruleForm.txtEmail"
              placeholder="Please Input Email"
              clearable
            />
          </el-form-item>
          <el-form-item prop="txtTel" label="Contact Number:">
            <el-input
              v-model="ruleForm.txtTel"
              placeholder="Mobile/Telephone"
              clearable
            />
          </el-form-item>
          <el-form-item prop="selCountry" label="Country/Region:">
            <el-select
                v-model="ruleForm.selCountry"
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
          <!-- <el-form-item prop="unit" label="Unit:">
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
          </el-form-item> -->
          <el-form-item prop="textVcode" label="Delivery Time:">
            <el-radio-group v-model="ruleForm.deliveryTime">
              <el-radio :label="7">7 Days</el-radio>
              <el-radio :label="14">14 Days</el-radio>
              <el-radio :label="30">30 Days</el-radio>
              <el-radio :label="60">60 Days</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            prop="treaProcurementDescribes"
            label="Files:"
            class="imgModel"
          >
            <el-button @click="handleImages" v-show="!ifImages"
              >Add Files</el-button
            >
            <template v-if="ifImages">
              <div id="collapseThree" class="accordion-body collapse">
                <div class="accordion-inner">
                  <div class="popups-list">
                    <el-upload
                      class="upload-demo"
                      drag
                      ref="uploadRef"
                      :headers="headerObj"
                      :on-remove="removeFile" :on-success="successUpload"
                      :limit="5"
                       action="http://newsiteapi.ecvv.com/api/sourcingRequest/fileUpload"
                      multiple
                    >
                      <div class="el-upload__text">
                        Drag & drop files here ...
                      </div>
                      <template #tip>
                        <!-- <el-upload
                          ref="uploadRef"
                          class="upload-demo"
                          action="http://newsiteapi.ecvv.com/api/sourcingRequest/fileUpload"
                        >
                        </el-upload> -->
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
    .companyName {
      padding: 30px;
      border-bottom: 1px solid #eee;
    }
    .productInfo {
      padding: 50px;
      border-bottom: 1px solid #eee;
      display: flex;

      .prod-detail-l {
        margin: 0 20px 0 0;
        width: 162px;

        .img-thumb {
          width: 160px;
          height: 160px;
          border: 1px solid #ced3d9;
          overflow: hidden;
          display: table;
          text-align: center;
          table-layout: fixed;
          .img-thumb-inner {
            display: table-cell;
            img {
              max-width: 160px;
              max-height: 160px;
            }
          }
        }
      }
      .prod-detail-r {
        overflow: hidden;
        .prod-name {
          font-size: 14px;
          font-weight: bold;
          display: block;
          margin-bottom: 15px;
        }
        .prod-quantity {
          margin-bottom: 15px;
          display: flex;
          .quantity-item {
            margin-right: 20px;
          }
          .quantity-item.it-qua {
            width: 140px;
          }
          .quantity-item.it-unit {
            width: 72px;
          }
          .item-title {
            display: block;
            color: #888;
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 5px;
          }
          .item-txt {
            width: 100px;
            word-wrap: break-word;
            font-size: 14px;
            display: inline-block;
            line-height: 18px;
            padding: 10px 10px 10px 0;
          }
          .quantity-item.it-price {
            width: 120px;
          }
          .quantity-item.it-total {
            width: 170px;

            .item-txt {
              width: 160px;
              word-wrap: break-word;
            }
          }
          .item-txt.total {
            font-size: 18px;
            color: #e64545;
            font-weight: bold;
          }
        }
        .quantity-item.last {
          float: none;
          width: 100%;
        }
      }
    }
    .productPrice {
      padding: 50px;
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
        :deep(.el-input__wrapper) {
          background-color: #4ec401;
        }

        :deep(.el-input__inner) {
          color: #fff;
        }
      }
    }
  }
}
</style>
