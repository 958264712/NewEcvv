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
      <h2>Request Sample</h2>
    </div>
    <div class="form">
      <div class="companyName">company Nmae</div>
      <div class="productInfo">
        <div class="prod-detail-l">
          <div class="prod-img img-thumb">
            <div class="img-thumb-inner">
              <img
                alt="LED Sky Ceiling Panel Light 40W LED Panel Lights"
                title="LED Sky Ceiling Panel Light 40W LED Panel Lights"
                src="//image.made-in-china.com/2f1j00RjVtpyADCuGd/LED-Sky-Ceiling-Panel-Light-40W-LED-Panel-Lights.jpg"
              />
            </div>
          </div>
        </div>
        <div class="prod-detail-r">
          <a
            href="//luminlighting.en.made-in-china.com/product/GvDxWsrYvEtX/China-LED-Sky-Ceiling-Panel-Light-40W-LED-Panel-Lights.html"
            target="_blank"
            class="prod-name"
            >LED Sky Ceiling Panel Light 40W LED Panel Lights</a
          >
          <div class="prod-quantity cf">
            <div class="quantity-item it-qua">
              <span class="item-title">Quantity</span>
              <el-form-item prop="productNumber">
                <el-input-number
                  v-model="ruleForm.productNumber"
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
              <span class="item-txt">Piece(s)</span>
            </div>
            <input type="hidden" name="samplePriceSingle" value="33.55" />
            <div class="quantity-item it-price">
              <span class="item-title">Sample Price</span>
              <span class="item-txt J-sample" cz-price="33.55">US $ 33.55</span>
            </div>
            <div class="quantity-item it-total">
              <span class="item-title">Total</span>
              <span class="item-txt total J-total">US ${{33.55 * ruleForm.productNumber }}</span>
            </div>
          </div>
          <div>
            <el-form-item prop="treaProcurementDescribes" label="Remark:">
              <el-input
                v-model="ruleForm.treaProcurementDescribes"
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
            <el-input v-model="ruleForm.id" />
          </el-form-item>
          <el-form-item prop="BuyerName" label="Full Name:">
            <el-input
              v-model="ruleForm.BuyerName"
              placeholder="Name"
              clearable
            />
          </el-form-item>
          <el-form-item prop="BuyerEmail" label="Email Address:">
            <el-input
              v-model="ruleForm.BuyerEmail"
              placeholder="Email"
              clearable
            />
          </el-form-item>
          <el-form-item prop="BuyerTel" label="Contact Number:">
            <el-input
              v-model="ruleForm.BuyerTel"
              placeholder="Mobile/Telephone"
              clearable
            />
          </el-form-item>
          <el-form-item prop="BuyerCountry" label="Country/Region:">
            <el-select
              v-model="ruleForm.BuyerCountry"
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
              <el-option value="Antigua and Barbuda"
                >Antigua and Barbuda</el-option
              >
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
              <el-option value="Trinidad and Tobago"
                >Trinidad and Tobago</el-option
              >
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
          <el-form-item prop="unit" label="Unit:">
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
          <el-form-item prop="textVcode" label="Delivery Time:">
            <el-date-picker
              v-model="ruleForm.deliveryTime"
              type="date"
              placeholder="Delivery Time"
              size="16"
            />
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
        /deep/ .el-form-item__content {
          display: block;
        }
      }

      .FilesModel {
        /deep/ .el-form-item__content {
          display: block;
        }
      }
      .submit {
        margin: 30px 100px;
        width: 200px;
        /deep/ .el-input__wrapper {
          background-color: #4ec401;
        }

        /deep/ .el-input__inner {
          color: #fff;
        }
      }
    }
  }
}
</style>
