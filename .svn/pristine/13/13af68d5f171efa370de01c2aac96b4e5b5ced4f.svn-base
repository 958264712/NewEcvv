<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
interface RuleForm {
    name: string
    password1: string
    password2: string
    email: string
    phone: string
    checkbox: boolean
    code: string
    phoneHead: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    password1: '',
    password2: '',
    email: '',
    phone: '',
    checkbox: true,
    code: '',
    phoneHead: '+86'
})

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: '请填写用户名', trigger: 'blur' },
    ],
    password1: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
    password2: [
        { required: true, message: '请再次填写密码', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: '请输入11数字电话号码', trigger: 'blur' },
        { min: 11, max: 11, message: '请输入11数字电话号码', trigger: 'blur' },
    ],
    code: [
        { required: true, message: '请填写验证码', trigger: 'blur' },
    ],

})

const handleCode = () => {
    console.log('获取验证码');
}

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid && ruleForm.checkbox) {
            if (ruleForm.password1 === ruleForm.password2) {
                console.log('submit!')
            } else {
                ElMessage.error('您输入的密码错误，请重新确认！')
            }
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}


</script >
<template>
    <div class="content">
        <h2>用户注册</h2>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入您的用户名" clearable/>
            </el-form-item>
            <el-form-item label="密码" prop="password1">
                <el-input v-model="ruleForm.password1" type="password" placeholder="请输入您的密码" clearable/>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
                <el-input v-model="ruleForm.password2" type="password" placeholder="请您确认您的密码" clearable/>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" type="email" placeholder="请输入您的邮箱" clearable/>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <template #default="scope">
                    <div style="display:flex">
                        <el-select v-model="ruleForm.phoneHead" style="width:170px" placeholder="请选择电话头" clearable>
                            <el-option value="+86" label="+86" />
                            <el-option value="+852" label="+852" />
                            <el-option value="+853" label="+853" />
                            <el-option value="+886" label="+886" />
                        </el-select>
                        <el-input v-model="ruleForm.phone" placeholder="请您确认您的手机号" style="margin:0 10px" clearable/>
                        <el-button @click="handleCode">获取验证码</el-button>
                    </div>
                </template>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="ruleForm.code" placeholder="请您确认您的验证码" clearable/>
            </el-form-item>
            <el-form-item label=" ">
                <div style="display:flex;">
                    <el-checkbox v-model="ruleForm.checkbox" size="large" style="marginRight:20px" />
                    <span>我同意以下条款
                        <a href="https://www.ecvv.com/help/helpPage36.html" target="_blank" class="bule">使用协议</a> ,
                        <a href="https://www.ecvv.com/help/helpPage37.html" target="_blank" class="bule">隐私权协议</a>
                        和
                        <a href="https://www.ecvv.com/help/helpPage51.html" target="_blank" class="bule">服务协议.</a>
                        <br>&nbsp;<span id="chkAgreeError" style="display: none;"></span></span>
                </div>
            </el-form-item>
            <el-form-item>
                <div style="display:flex;justifyContent:space-evenly;width:100%">
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        注册
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">清空</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang="less">
.content {
    background-color: #fff;
    margin-bottom: 30px;

    h2 {
        margin: 20px;
        padding-top: 20px;
        line-height: 30px;
        text-align: center;
        font-weight: bold;
    }

    /deep/.el-form {
        width: 80%;
        padding-bottom: 30px;
    }
}

a {
    color: blue;
}
</style>
