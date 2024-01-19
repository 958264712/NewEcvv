<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { Session } from "@/utils/storage";
import { ElMessage } from "element-plus";
import { customizedRequest } from "@/api/modular/company.ts";
import { fileDelete } from '@/api/modular/sourcingRequest'
import type { UploadProps } from 'element-plus'

const dialogTableVisible = ref(false);
const ifImages = ref(false);
const pInfo = Session.get("productInfo");
const productDataInfo = Session.get("pDInfo");
const add = ref("");
const uploadRef = ref();
const fileUrl_list = ref<any>([])
const ruleForm = ref<any>({
  chkIDs: "P|" + pInfo.pid,
  productName: "",
  productDescription: "",
  quant: '',
  unit: "",
  files: "",
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
const ruleFormRef = ref();
// 展开
const handleImages = () => {
  ifImages.value = !ifImages.value;
};

const clickAdd = () => {
  piecesList.value.push({ label: add.value });
  add.value = "";
};

// 提交表单验证
const submit = async () => {
  ruleForm.value.files = fileUrl_list.value.join(',')
  if (ruleForm.value.quant < 1) {
    ElMessage.error("Minimum order quantity must be greater than 1");
    return false;
  }
  if (ruleForm.value.productName == "") {
    ElMessage.error("Please Enter Product Name");
    return false;
  }
  if (ruleForm.value.productDescription == "") {
    ElMessage.error("Please Enter Product Description");
    return false;
  }
  
  if (ruleForm.value.quant == "") {
    ElMessage.error("Please Enter Quantity");
    return false;
  }

  if (ruleForm.value.unit == "") {
    ElMessage.error("Please Select Unit");
    return false;
  }

  
  await customizedRequest(Object.assign(ruleForm.value)).then((res)=>{
    if(res.data.result==='OK'){
      ElMessage.success('You Submit Success!')
      ruleForm.value={}
      uploadRef.value.clearFiles()
      ifImages.value = false
    }

  })
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
            <el-input v-model="ruleForm.chkIDs" />
          </el-form-item>
          <el-form-item prop="productName" label="Product Name:">
            <el-input
              v-model="ruleForm.productName"
              placeholder="Please Enter Product Name"
              clearable
            />
          </el-form-item>
          <el-form-item prop="productDescription" label="Product Description:">
            <el-tooltip class="box-item" effect="light" placement="right-end">
              <template #content>
                <p style="width: 150px">
                  Tell us your customizedrequests such as.Product
                  Features.Materials, DimensionsLogos you want to print.other
                  items you care about.
                </p>
              </template>
              <el-input
                placeholder="Please enter detailed product description, especially your customized request"
                clearable
                v-model="ruleForm.productDescription"
                type="textarea"
                show-word-limit
                rows="5"
                minlength="0"
                maxlength="4000"
              />
            </el-tooltip>
          </el-form-item>

          <el-form-item prop="unit" label="Purchase Quantity:">
            <el-input
              v-model="ruleForm.quant"
              placeholder="Quantity"
              style="width: 100px"
              clearable
            />
            <el-select
              v-model="ruleForm.unit"
              placeholder="Please Select Unit"
              clearable
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
          </el-form-item>

          <el-form-item
            prop="treaProcurementDescribes"
            label="Files:"
            class="imgModel"
          >
            <el-button @click="handleImages" v-show="!ifImages">Add Files</el-button>
            <template v-if="ifImages">
              <div id="collapseThree" class="accordion-body collapse">
                <div class="accordion-inner">
                  <div class="popups-list">
                    <el-upload
                      class="upload-demo"
                      drag
                      ref="uploadRef"
                      :headers="headerObj"
                      :on-remove="removeFile"
                      :on-success="successUpload"
                      :limit="5"
                      action="http://newsiteapi.ecvv.com/api/sourcingRequest/fileUpload"
                      multiple
                    >
                      <div class="el-upload__text">
                        Drag & drop files here ...
                      </div>
                      <template #tip>
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
