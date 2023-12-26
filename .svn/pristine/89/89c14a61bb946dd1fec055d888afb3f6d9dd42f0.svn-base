<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import type { UploadProps } from "element-plus";
import { Session } from "@/utils/storage";

const sendCompanyInfo = Session.get("sendCompanyInfo");
const router = useRouter();
const transferModels = ref();
const CateList = ref("");
const checkbox = ref(false);
const fileUrl_list = ref<any>([]);
const location =
  router.options.history.location
    .split("?")[1]
    ?.replaceAll("&", " ")
    .split(" ") ?? [];

const queryParams = ref<any>({
  prodName: "",
  destination_select: "China",
  fullName: "",
  detailsVal: sendCompanyInfo.message,
  verificationCode: "",
  phoneNumberVal: "",
  companyNameVal: "",
  businessEmailVal: sendCompanyInfo.form,
  cip: "",
  country: "",
  radio: 0,
  select: "Male",
});

// 获取电脑信息
const service = axios.create({
  baseURL: "https://ipapi.co",
  timeout: 50000,
  headers: { "Content-Type": "application/json" },
});
service({
  url: "/json/",
  method: "get",
}).then((res) => {
  if (res.status === 200) {
    queryParams.value.cip = res.data.ip;
    queryParams.value.country = res.data.country_name;
    location.map((item: any) => {
      const key = item.split("=");
      if (key[0] === "prodName") {
        queryParams.value.prodName = key[1];
      }
      if (key[0] === "prodDesc") {
        queryParams.value.detailsVal = key[1];
      }
    });
  }
});
// 提交
const onSubmit = async () => {
  if (checkbox.value) {
    // 获取世界时间格式
    const millseconds = new Date().getUTCMilliseconds();
    const date = new Date().getUTCDate();
    const utc = new Date().toUTCString().split(" ");
    if (new Date().getUTCMonth() + 1 >= 10) {
      const month = new Date().getUTCMonth() + 1;
      queryParams.value.inquiryLocalTime =
        utc[3] +
        "-" +
        month +
        "-" +
        date +
        "T" +
        utc[4] +
        "." +
        millseconds +
        "Z";
    } else {
      const month = "0" + (new Date().getUTCMonth() + 1);
      queryParams.value.inquiryLocalTime =
        utc[3] +
        "-" +
        month +
        "-" +
        date +
        "T" +
        utc[4] +
        "." +
        millseconds +
        "Z";
    }
    await saveCommInquiry(Object.assign(queryParams.value)).then((res) => {
      if (res.data.type === "success") {
        ElMessage.success("You submit success!");
        // 提交成功后清空列表数据
        queryParams.value.prodName = "";
        queryParams.value.destination_select = "China";
        queryParams.value.fullName = "";
        queryParams.value.detailsVal = "";
        queryParams.value.verificationCode = "";
        queryParams.value.phoneNumberVal = "";
        queryParams.value.companyNameVal = "";
        queryParams.value.businessEmailVal = "";
      } else {
        ElMessage.success("You submit error!");
      }
    });
  } else {
    ElMessage.error("Please check the Agree Agreement box");
  }
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
              v-model="queryParams.prodName"
              clearable
              placeholder="Example:Inquiry for Metal Cutting Machine"
              style="width: 300px"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="To:">
            {{ sendCompanyInfo.to }}
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
              v-model="queryParams.detailsVal"
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
            <el-radio-group v-model="queryParams.radio">
              <el-radio :label="7">7 Days</el-radio>
              <el-radio :label="14">14 Days</el-radio>
              <el-radio :label="30">30 Days</el-radio>
              <el-radio :label="60">60 Days</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-form-item label="Extra Request:">
            <el-checkbox
              v-model="queryParams.price"
              label="Price "
              size="large"
            />
            <el-checkbox
              v-model="queryParams.Specifications"
              label="Product Specifications "
              size="large"
            />
            <el-checkbox
              v-model="queryParams.Shipping"
              label="Shipping & Payment  "
              size="large"
            />
            <el-checkbox
              v-model="queryParams.Profile"
              label="Company Profile "
              size="large"
            />
            <el-checkbox
              v-model="queryParams.Certification"
              label="Inspection Certification "
              size="large"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div style="text-align: center; margin-bottom: 20px">
            <input type="checkbox" checked style="margin-right: 20px" />
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
                v-model="queryParams.businessEmailVal"
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
              <el-select v-model="queryParams.destination_select">
                <el-option value="Afghanistan">Afghanistan</el-option>
                <el-option value="Aland Islands">Aland Islands</el-option>
                <el-option value="Albania">Albania</el-option>
                <el-option value="Alderney">Alderney</el-option>
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
                <el-option value="Ascension Island">Ascension Island</el-option>
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
                <el-option value="Brunei Darussalam"
                  >Brunei Darussalam</el-option
                >
                <el-option value="Bulgaria">Bulgaria</el-option>
                <el-option value="Burkina Faso">Burkina Faso</el-option>
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
                <el-option value="Chile">Chile</el-option>
                <el-option selected="" value="China">China</el-option>
                <el-option value="Christmas Island">Christmas Island</el-option>
                <el-option value="Cocos (Keeling) Islands"
                  >Cocos (Keeling) Islands</el-option
                >
                <el-option value="Colombia">Colombia</el-option>
                <el-option value="Comoros">Comoros</el-option>
                <el-option value="Congo, The Democratic Republic Of The"
                  >Congo, The Democratic Republic Of The</el-option
                >
                <el-option value="Congo, The Republic of Congo"
                  >Congo, The Republic of Congo</el-option
                >
                <el-option value="Cook Islands">Cook Islands</el-option>
                <el-option value="Costa Rica">Costa Rica</el-option>
                <el-option value="Cote D'Ivoire">Cote D'Ivoire</el-option>
                <el-option value="Croatia (local name: Hrvatska)"
                  >Croatia (local name: Hrvatska)</el-option
                >
                <el-option value="Cuba">Cuba</el-option>
                <el-option value="Curacao">Curacao</el-option>
                <el-option value="Cyprus">Cyprus</el-option>
                <el-option value="Czech Republic">Czech Republic</el-option>
                <el-option value="Denmark">Denmark</el-option>
                <el-option value="Djibouti">Djibouti</el-option>
                <el-option value="Dominica">Dominica</el-option>
                <el-option value="Dominican Republic"
                  >Dominican Republic</el-option
                >
                <el-option value="East Timor">East Timor</el-option>
                <el-option value="Ecuador">Ecuador</el-option>
                <el-option value="Egypt">Egypt</el-option>
                <el-option value="El Salvador">El Salvador</el-option>
                <el-option value="Equatorial Guinea"
                  >Equatorial Guinea</el-option
                >
                <el-option value="Eritrea">Eritrea</el-option>
                <el-option value="Estonia">Estonia</el-option>
                <el-option value="Ethiopia">Ethiopia</el-option>
                <el-option value="Falkland Islands (Malvinas)"
                  >Falkland Islands (Malvinas)</el-option
                >
                <el-option value="Faroe Islands">Faroe Islands</el-option>
                <el-option value="Fiji">Fiji</el-option>
                <el-option value="Finland">Finland</el-option>
                <el-option value="France">France</el-option>
                <el-option value="France Metropolitan"
                  >France Metropolitan</el-option
                >
                <el-option value="French Guiana">French Guiana</el-option>
                <el-option value="French Polynesia">French Polynesia</el-option>
                <el-option value="French Southern Territories"
                  >French Southern Territories</el-option
                >
                <el-option value="Gabon">Gabon</el-option>
                <el-option value="Gambia">Gambia</el-option>
                <el-option value="Georgia">Georgia</el-option>
                <el-option value="Germany">Germany</el-option>
                <el-option value="Ghana">Ghana</el-option>
                <el-option value="Gibraltar">Gibraltar</el-option>
                <el-option value="Greece">Greece</el-option>
                <el-option value="Greenland">Greenland</el-option>
                <el-option value="Grenada">Grenada</el-option>
                <el-option value="Guadeloupe">Guadeloupe</el-option>
                <el-option value="Guam">Guam</el-option>
                <el-option value="Guatemala">Guatemala</el-option>
                <el-option value="Guernsey">Guernsey</el-option>
                <el-option value="Guinea">Guinea</el-option>
                <el-option value="Guinea-Bissau">Guinea-Bissau</el-option>
                <el-option value="Guyana">Guyana</el-option>
                <el-option value="Haiti">Haiti</el-option>
                <el-option value="Heard and Mc Donald Islands"
                  >Heard and Mc Donald Islands</el-option
                >
                <el-option value="Honduras">Honduras</el-option>
                <el-option value="Hong Kong S.A.R.">Hong Kong S.A.R.</el-option>
                <el-option value="Hungary">Hungary</el-option>
                <el-option value="Iceland">Iceland</el-option>
                <el-option value="India">India</el-option>
                <el-option value="Indonesia">Indonesia</el-option>
                <el-option value="Iran (Islamic Republic of)"
                  >Iran (Islamic Republic of)</el-option
                >
                <el-option value="Iraq">Iraq</el-option>
                <el-option value="Ireland">Ireland</el-option>
                <el-option value="Isle of Man">Isle of Man</el-option>
                <el-option value="Israel">Israel</el-option>
                <el-option value="Italy">Italy</el-option>
                <el-option value="Jamaica">Jamaica</el-option>
                <el-option value="Japan">Japan</el-option>
                <el-option value="Jersey">Jersey</el-option>
                <el-option value="Jordan">Jordan</el-option>
                <el-option value="Kazakhstan">Kazakhstan</el-option>
                <el-option value="Kenya">Kenya</el-option>
                <el-option value="Kiribati">Kiribati</el-option>
                <el-option value="Kosovo">Kosovo</el-option>
                <el-option value="Kuwait">Kuwait</el-option>
                <el-option value="Kyrgyzstan">Kyrgyzstan</el-option>
                <el-option value="Lao People's Democratic Republic"
                  >Lao People's Democratic Republic</el-option
                >
                <el-option value="Latvia">Latvia</el-option>
                <el-option value="Lebanon">Lebanon</el-option>
                <el-option value="Lesotho">Lesotho</el-option>
                <el-option value="Liberia">Liberia</el-option>
                <el-option value="Libya">Libya</el-option>
                <el-option value="Liechtenstein">Liechtenstein</el-option>
                <el-option value="Lithuania">Lithuania</el-option>
                <el-option value="Luxembourg">Luxembourg</el-option>
                <el-option value="Macao S.A.R.">Macao S.A.R.</el-option>
                <el-option value="Macedonia">Macedonia</el-option>
                <el-option value="Madagascar">Madagascar</el-option>
                <el-option value="Malawi">Malawi</el-option>
                <el-option value="Malaysia">Malaysia</el-option>
                <el-option value="Maldives">Maldives</el-option>
                <el-option value="Mali">Mali</el-option>
                <el-option value="Malta">Malta</el-option>
                <el-option value="Marshall Islands">Marshall Islands</el-option>
                <el-option value="Martinique">Martinique</el-option>
                <el-option value="Mauritania">Mauritania</el-option>
                <el-option value="Mauritius">Mauritius</el-option>
                <el-option value="Mayotte">Mayotte</el-option>
                <el-option value="Mexico">Mexico</el-option>
                <el-option value="Micronesia">Micronesia</el-option>
                <el-option value="Moldova">Moldova</el-option>
                <el-option value="Monaco">Monaco</el-option>
                <el-option value="Mongolia">Mongolia</el-option>
                <el-option value="Montenegro">Montenegro</el-option>
                <el-option value="Montserrat">Montserrat</el-option>
                <el-option value="Morocco">Morocco</el-option>
                <el-option value="Mozambique">Mozambique</el-option>
                <el-option value="Myanmar">Myanmar</el-option>
                <el-option value="Namibia">Namibia</el-option>
                <el-option value="Nauru">Nauru</el-option>
                <el-option value="Nepal">Nepal</el-option>
                <el-option value="Netherlands">Netherlands</el-option>
                <el-option value="Netherlands Antilles"
                  >Netherlands Antilles</el-option
                >
                <el-option value="New Caledonia">New Caledonia</el-option>
                <el-option value="New Zealand">New Zealand</el-option>
                <el-option value="Nicaragua">Nicaragua</el-option>
                <el-option value="Niger">Niger</el-option>
                <el-option value="Nigeria">Nigeria</el-option>
                <el-option value="Niue">Niue</el-option>
                <el-option value="Norfolk Island">Norfolk Island</el-option>
                <el-option value="North Korea">North Korea</el-option>
                <el-option value="Northern Mariana Islands"
                  >Northern Mariana Islands</el-option
                >
                <el-option value="Norway">Norway</el-option>
                <el-option value="Oman">Oman</el-option>
                <el-option value="Other Country">Other Country</el-option>
                <el-option value="Pakistan">Pakistan</el-option>
                <el-option value="Palau">Palau</el-option>
                <el-option value="Palestine">Palestine</el-option>
                <el-option value="Panama">Panama</el-option>
                <el-option value="Papua New Guinea">Papua New Guinea</el-option>
                <el-option value="Paraguay">Paraguay</el-option>
                <el-option value="Peru">Peru</el-option>
                <el-option value="Philippines">Philippines</el-option>
                <el-option value="Pitcairn">Pitcairn</el-option>
                <el-option value="Poland">Poland</el-option>
                <el-option value="Portugal">Portugal</el-option>
                <el-option value="Qatar">Qatar</el-option>
                <el-option value="Reunion">Reunion</el-option>
                <el-option value="Romania">Romania</el-option>
                <el-option value="Russian Federation"
                  >Russian Federation</el-option
                >
                <el-option value="Rwanda">Rwanda</el-option>
                <el-option value="Saint Barthelemy">Saint Barthelemy</el-option>
                <el-option value="Saint Kitts and Nevis"
                  >Saint Kitts and Nevis</el-option
                >
                <el-option value="Saint Lucia">Saint Lucia</el-option>
                <el-option value="Saint Martin">Saint Martin</el-option>
                <el-option value="Saint Vincent and the Grenadines"
                  >Saint Vincent and the Grenadines</el-option
                >
                <el-option value="Samoa">Samoa</el-option>
                <el-option value="San Marino">San Marino</el-option>
                <el-option value="Sao Tome and Principe"
                  >Sao Tome and Principe</el-option
                >
                <el-option value="Saudi Arabia">Saudi Arabia</el-option>
                <el-option value="Scotland">Scotland</el-option>
                <el-option value="Senegal">Senegal</el-option>
                <el-option value="Serbia">Serbia</el-option>
                <el-option value="Seychelles">Seychelles</el-option>
                <el-option value="Sierra Leone">Sierra Leone</el-option>
                <el-option value="Singapore">Singapore</el-option>
                <el-option value="Sint Maarten">Sint Maarten</el-option>
                <el-option value="Slovakia (Slovak Republic)"
                  >Slovakia (Slovak Republic)</el-option
                >
                <el-option value="Slovenia">Slovenia</el-option>
                <el-option value="Solomon Islands">Solomon Islands</el-option>
                <el-option value="Somalia">Somalia</el-option>
                <el-option value="South Africa">South Africa</el-option>
                <el-option value="South Georgia and the South Sandwich Islands"
                  >South Georgia and the South Sandwich Islands</el-option
                >
                <el-option value="South Korea">South Korea</el-option>
                <el-option value="South Sudan">South Sudan</el-option>
                <el-option value="Spain">Spain</el-option>
                <el-option value="Sri Lanka">Sri Lanka</el-option>
                <el-option value="St. Helena">St. Helena</el-option>
                <el-option value="St. Pierre and Miquelon"
                  >St. Pierre and Miquelon</el-option
                >
                <el-option value="Sudan">Sudan</el-option>
                <el-option value="Suriname">Suriname</el-option>
                <el-option value="Svalbard and Jan Mayen Islands"
                  >Svalbard and Jan Mayen Islands</el-option
                >
                <el-option value="Swaziland">Swaziland</el-option>
                <el-option value="Sweden">Sweden</el-option>
                <el-option value="Switzerland">Switzerland</el-option>
                <el-option value="Syrian Arab Republic"
                  >Syrian Arab Republic</el-option
                >
                <el-option value="Taiwan, China">Taiwan, China</el-option>
                <el-option value="Tajikistan">Tajikistan</el-option>
                <el-option value="Tanzania">Tanzania</el-option>
                <el-option value="Thailand">Thailand</el-option>
                <el-option value="Timor-Leste">Timor-Leste</el-option>
                <el-option value="Togo">Togo</el-option>
                <el-option value="Tokelau">Tokelau</el-option>
                <el-option value="Tonga">Tonga</el-option>
                <el-option value="Trinidad and Tobago"
                  >Trinidad and Tobago</el-option
                >
                <el-option value="Tunisia">Tunisia</el-option>
                <el-option value="Turkey">Turkey</el-option>
                <el-option value="Turkmenistan">Turkmenistan</el-option>
                <el-option value="Turks and Caicos Islands"
                  >Turks and Caicos Islands</el-option
                >
                <el-option value="Tuvalu">Tuvalu</el-option>
                <el-option value="Uganda">Uganda</el-option>
                <el-option value="Ukraine">Ukraine</el-option>
                <el-option value="United Arab Emirates"
                  >United Arab Emirates</el-option
                >
                <el-option value="United Kingdom">United Kingdom</el-option>
                <el-option value="United States">United States</el-option>
                <el-option value="United States Minor Outlying Islands"
                  >United States Minor Outlying Islands</el-option
                >
                <el-option value="Uruguay">Uruguay</el-option>
                <el-option value="Uzbekistan">Uzbekistan</el-option>
                <el-option value="Vanuatu">Vanuatu</el-option>
                <el-option value="Vatican City State (Holy See)"
                  >Vatican City State (Holy See)</el-option
                >
                <el-option value="Venezuela">Venezuela</el-option>
                <el-option value="Vietnam">Vietnam</el-option>
                <el-option value="Virgin Islands (British)"
                  >Virgin Islands (British)</el-option
                >
                <el-option value="Virgin Islands (U.S.)"
                  >Virgin Islands (U.S.)</el-option
                >
                <el-option value="Wallis And Futuna Islands"
                  >Wallis And Futuna Islands</el-option
                >
                <el-option value="Western Sahara">Western Sahara</el-option>
                <el-option value="Yemen">Yemen</el-option>
                <el-option value="Yugoslavia">Yugoslavia</el-option>
                <el-option value="Zambia">Zambia</el-option>
                <el-option value="Zanzibar">Zanzibar</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-form-item label="Full Name:">
              <el-select v-model="queryParams.select">
                <el-option label="Male" value="Male" />
                <el-option label="Famale" value="Famale" />
              </el-select>
              <el-input
                v-model="queryParams.fullName"
                clearable
                placeholder=""
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
                v-model="queryParams.companyNameVal"
                clearable
                placeholder=""
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
                v-model="queryParams.phoneNumberVal"
                clearable
                placeholder=""
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
                placeholder=""
              />
              <div class="layui-col-md1" style="margin-left: 10px">
                <img
                  id="imgValidateCode"
                  title="Load new image"
                  src="http://newsiteapi.ecvv.com/api/sourcingRequest/getValidateCode"
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
              <el-button type="defualt" @click="onSubmit">Submit</el-button>
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
