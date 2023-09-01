<script setup lang="ts">
import { ref } from 'vue'
import { updateEmail, sendCode } from '@/api/modular/account.ts'
import { ElMessage } from 'element-plus'

const props = defineProps(['userInfo', 'ifCode'])
const emit = defineEmits(['ifCode'])

const outerVisible = ref(false)
const paramsForm = ref<any>({ phoneHead: '+86' })
const ifhandleCode = ref(false)
const ifqueryCode = ref('')
const timer = ref<any>()
const num = ref(60)

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
const handleCode = async (num:number) => {
    // if (props.ifCode) {
    //     if (paramsForm.value.email && num = 2) {
    //         await sendCode(paramsForm.email).then((res) => {
    //             if (res.data.type === "success") {
    //                 ifhandleCode.value = true
    //                 const object = JSON.parse(res.data.result)
    //                 ifqueryCode.value = object.obj
    //                 timers()
    //             }
    //         })
    //     }
    // } else {
    //     if (props.phoneEmail && num = 1) {
    //         await sendCode(props.phoneEmail).then((res) => {
    //             if (res.data.type === "success") {
    //                 ifhandleCode.value = true
    //                 const object = JSON.parse(res.data.result)
    //                 ifqueryCode.value = object.obj
    //                 timers()
    //             }
    //         })
    //     }
    // }
}

// 打开弹窗
const openDialog = () => {
    outerVisible.value = true;
};
// 关闭弹窗
const closeDialog = () => {
    outerVisible.value = false;
    paramsForm.value = {}
};
const submit = () => {
    if (paramsForm.value.code === ifqueryCode.value) {
        const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (regEmail.test(paramsForm.value.newEmail)) {
            updateEmail(Object.assign(paramsForm.value)).then(res => {
                if (res.data.type === "success") {
                    ElMessage.success('修改成功！')
                    paramsForm.value = {}
                    ifhandleCode.value = false
                }
            })
        } else {
            ElMessage.error('请输入正确的邮箱')
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
        emit('ifCode', true)
        num.value = 60
        paramsForm.value.code = ''
        ifhandleCode.value = false
    } else {
        ElMessage.error('验证码输入错误，请重新输入')
    }

}

//将属性或者函数暴露给父组件
defineExpose({ openDialog });
</script>

<template>
    <div id="transferModel">
        <el-dialog v-model="outerVisible" title="修改邮箱" width="30%" @close="closeDialog">
            <template #default>
                <template v-if="props.ifCode">
                    <p>验证码将发送到手机{{ props.userInfo.email }}</p>
                    <i>如果长时间未收到验证码，请检查垃圾箱</i>
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
                                    <el-button @click="handleCode(1)">获取验证码</el-button>
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
                        <el-form-item label="输入新手机" prop="phoneNumber">
                            <div style="display:flex">
                                <el-input v-model="paramsForm.newEmail" placeholder="请输入邮箱：" style="margin:0 10px" clearable />
                                <template v-if="ifhandleCode">
                                    <span
                                        style="display:inline-block;width:62px; padding:0 4px ; border:1px solid #ccc; borderRadius:5px">{{
                                            num }} s</span>
                                </template>
                                <template v-else>
                                    <el-button @click="handleCode(2)">获取验证码</el-button>
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