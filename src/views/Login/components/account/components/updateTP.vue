<script setup lang="ts">
import { ref } from 'vue'
import { registerEmember, sendCode } from '@/api/modular/register.ts'
import { ElMessage } from 'element-plus'

const props = defineProps(['phoneNumber'])
const outerVisible = ref(false)
const paramsForm = ref<any>({ phoneHead: '+86' })
const ifhandleCode = ref(false)
const ifqueryCode = ref('')
const timer = ref<any>()
const num = ref(60)
const ifCode = ref(true)

const timers = () => {
    if (num.value <= 0) {
        clearTimeout(timer.value)
        ifhandleCode.value = false
        num.value = 60
    } else {
        if (ifhandleCode.value) {
            num.value = num.value - 1
            timer.value = setTimeout(() => {
                timers()
            }, 1000)
        }
    }
}
const handleCode = async () => {
    if (!ifCode) {
        if (paramsForm.phoneNumber) {
            await sendCode(paramsForm.phoneNumber).then((res) => {
                if (res.data.type === "success") {
                    ifhandleCode.value = true
                    const object = JSON.parse(res.data.result)
                    ifqueryCode.value = object.obj
                    timers()
                }
            })
        }
    } else {
        if (props.phoneNumber) {
            await sendCode(props.phoneNumber).then((res) => {
                if (res.data.type === "success") {
                    ifhandleCode.value = true
                    const object = JSON.parse(res.data.result)
                    ifqueryCode.value = object.obj
                    timers()
                }
            })
        }
    }
}

// 打开弹窗
const openDialog = async () => {
    outerVisible.value = true;
};
// 关闭弹窗
const closeDialog = () => {
    outerVisible.value = false;
    paramsForm.value = {}

};
const submit = () => {
    if (paramsForm.code === ifqueryCode.value) {
        const regPhone = /^[1][3,4,5,7,8][0-9]{9}$/
        if (regPhone.test(paramsForm.phoneNumber)) {
            registerEmember(Object.assign(paramsForm)).then(res => {
                if (res.data.type === "success") {
                    ElMessage.success('修改成功！')
                    paramsForm.value = {}
                    ifhandleCode.value = false
                }
            })
        } else {
            ElMessage.error('请输入正确的手机号')
        }

    } else {
        ElMessage.error('您输入的验证码错误！')
    }
    outerVisible.value = false;
}

// 监听code值变化
const handleNext = () => {
    // 如果填正确了验证码
    if (paramsForm.value.code === ifqueryCode.value) {
        ifCode.value = false
    } else {
        ElMessage.error('验证码输入错误，请重新输入')
    }

}

//将属性或者函数暴露给父组件
defineExpose({ openDialog });
</script>

<template>
    <div id="transferModel">
        <el-dialog v-model="outerVisible" title="修改手机" width="30%" @close="closeDialog">
            <template #default>
                <template v-if="ifCode">
                    <p>验证码将发送到手机{{ props.phoneNumber }}</p>
                    <i>如果长时间未收到验证码，请检查是否将运营商拉黑</i>
                    <el-form ref="ruleFormRef" :model="paramsForm" class="demo-ruleForm" status-icon>
                        <el-form-item label="填写验证码：" prop="code">
                            <div style="display:flex">
                                <el-input v-model="paramsForm.code" placeholder=" " clearable />
                                <template v-if="ifhandleCode">
                                    <span
                                        style="display:inline-block;width:62px; padding:0 4px ; border:1px solid #ccc; borderRadius:5px">{{
                                            num }} s</span>
                                </template>
                                <template v-else>
                                    <el-button @click="handleCode">获取验证码</el-button>
                                </template>
                            </div>
                        </el-form-item>
                    </el-form>
                    <div class="Codebtn">
                        <template v-if="ifhandleCode">
                            <el-button type="primary" @click="handleNext">
                                下一步
                            </el-button></template>
                        <template v-else>
                            <el-button type="primary" disabled>
                                下一步
                            </el-button>
                        </template>
                    </div>
                </template>
                <template v-else>
                    <el-form ref="ruleFormRef" :model="paramsForm" class="demo-ruleForm" status-icon>
                        <el-form-item label="输入新手机：" prop="phoneNumber">
                            <div style="display:flex">
                                <el-select v-model="paramsForm.phoneHead" style="width:220px" placeholder="请选择电话头">
                                    <el-option value="+86" label="+86" />
                                    <el-option value="+852" label="+852" />
                                    <el-option value="+853" label="+853" />
                                    <el-option value="+886" label="+886" />
                                </el-select>
                                <el-input v-model="paramsForm.phoneNumber" placeholder="请您确认您的手机号" style="margin:0 10px"
                                    clearable />
                                <template v-if="ifhandleCode">
                                    <span
                                        style="display:inline-block;width:62px; padding:0 4px ; border:1px solid #ccc; borderRadius:5px">{{
                                            num }} s</span>
                                </template>
                                <template v-else>
                                    <el-button @click="handleCode">获取验证码</el-button>
                                </template>
                            </div>
                        </el-form-item>
                        <el-form-item label="填写验证码：" prop="code">
                            <el-input v-model="paramsForm.code" placeholder="请您确认您的验证码" clearable />
                        </el-form-item>
                    </el-form>

                </template>

            </template>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submit">
                        确认
                    </el-button>
                    <el-button @click="outerVisible = false; paramsForm.value = {}">取消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped lang="less">
i {
    font-style: normal;
    color: #ccc;
}

:deep(.el-form) {
    margin-top: 20px;
}

.Codebtn {
    button {
        margin: 0 calc(50% - 170px);
    }
}
</style>