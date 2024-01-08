<script lang="ts" setup>
import { reactive, ref ,onMounted} from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { Session } from "@/utils/storage";

const props = defineProps(["companyname"])
const router = useRouter();

const visible = ref(false);
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  id: "",
  message: "",
});
const rules = ref<FormRules>({
  message: [
    { required: true, message: "Please enter the content for your inquiry." },
  ],
  id: [{ required: true, message: "Please enter your email address." }],
 
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {  
      // 提交公司信息验证
      if (ruleForm.id == "") {
      ElMessage.error("Please Enter Email Address");
      return false;
    }
    if (ruleForm.message == "") {
      ElMessage.error("Please Enter Inquiry");
      return false;
    }
    var re = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!re.test(ruleForm.id)) {
      ElMessage.error("Please enter the correct email format");
      ruleForm.id = ''
      return false;
    }
    if (ruleForm.message.length < 20) {
      ElMessage.error("Please Enter Inquiry message must be more 20 characters");
      return false;
    }
    // 验证结束
    Session.set('sendCompanyInfo',{
      form:ruleForm.id,
      to:props.companyname,
      message:ruleForm.message,
      product:false
    })
    ruleForm.id = '' 
    ruleForm.message = ''
    let routeUrl = router.resolve({ path: `/sendMsg` });
    window.open(routeUrl.href, "_blank");
    } else {
      console.log("error submit!", fields);
    }
  });
};


const queryRFQ = () => {
  router.push({ path: `/RFQInquiry` });
};
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 3000) {
        visible.value = true
    } else {
        visible.value = false
    }
})
onMounted(()=>{
 window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 3000) {
        visible.value = true
    } else {
        visible.value = false
    }
})
})
</script>
<template>
  <div class="v3-email">
    <h3 class="title">Send your message to this supplier</h3>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :rules="rules"
    >
      <el-form-item label="From：" prop="id" style="margin-bottom: 10px">
        <el-input v-model="ruleForm.id" placeholder='Enter your email address' style="width: 400px" />
      </el-form-item>
      <p class="space wai">Enter email or Member ID.</p>
      <el-form-item label="To:" prop="name">
        <div>
          <span class="name"> {{props.companyname}}</span>
          <a
            class="main-icon ico-skype-on"
            rel="nofollow"
            href="javascript:void(0);"
            @click="
              ChatSkype(
                'betty-he552',
                '779973',
                '-1',
                'https://www.ecvv.com/company/betty-glass/index.html',
                '_detectEcvvSkypeClient'
              )
            "
            >Chat Now</a
          >
        </div>
      </el-form-item>
      <el-form-item label="Message：" prop="message" style="margin-bottom: 10px">
        <el-tooltip
          class="box-item"
          effect="light"
          placement="right"
          :visible="visible"
        >
          <template #content>
            <span>Enter your inquiry details such as:</span>
            <ul class="balloon-items" style="padding-left:20px">
              <li style="list-style-type: disc;">Self introduction</li>
              <li style="list-style-type: disc;">Required specifications</li>
              <li style="list-style-type: disc;">Inquire about price/MOQ</li>
            </ul>
          </template>
          <el-input
            v-model="ruleForm.message"
            type="textarea"
            show-word-limit
            style="width: 600px"
            rows="10"
            minlength="20"
            placeholder='Enter your inquiry details such as product name, color, size, quantity, material, etc.'
            maxlength="3000"
        /></el-tooltip>
      </el-form-item>
      <p class="space wai">Your message must be between 20-3000 characters</p>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Send
        </el-button>
        <p  class="space1">This is not what you are looking for?</p>
        <div class="payRequest" @click="queryRFQ">
        <i title="One request, multiple quotes" />
        <a title="Easy Sourcing More Convenient, More Efficient" target="_blank"
          >Post a Sourcing Request Now</a
        >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.v3-email {
  border-style: solid;
  border-width: 3px;
  margin:30px auto;
  width:950px;
  .title {
    color: #333;
    font-size: 16px;
    font-weight: 700;
    height: 16px;
    line-height: 16px;
    margin: 20px;
  }
  .wai {
    margin-left: 100px;
    padding-bottom: 10px;
  }
  .space {
    color: #999;
    font-family: tahoma;
    font-size: 11px;
    line-height: 20px;
  }
  .space1 {
    color: #999;
    font-family: tahoma;
    font-size: 14px;
    margin:0 20px;
  }
  .name {
    display: block;
    margin-right: 10px;
  }
  .main-icon {
    height: 15px;
    line-height: 16px;
    display: block;
  }
  .ico-skype-on {
    background-position: -208px -156px;
    padding-left: 23px;
  }
  .payRequest {
  background-color: #fff;
  display: flex;
  cursor: pointer;
}

.payRequest i:before {
  content: "";
  display: block;
  width: 32px;
  height: 32px;
  background: url("@/assets/images/Icon/targetBlue.png") no-repeat center center;
  background-size:75%
}

.payRequest a {
  color: #0f55ae;
  display: block;
  text-align: center;
}
}
</style>
