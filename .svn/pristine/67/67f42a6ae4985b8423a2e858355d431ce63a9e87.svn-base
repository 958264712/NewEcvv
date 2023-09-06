<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { getCookie } from '@/utils/cookie.ts'
import { updateMemberPasswordAction } from '@/api/modular/account.ts'

const outerVisible = ref(false)
const paramsForm = ref<any>({
    memberID:'',
    countryName: '',
    companyLevel: '',
    eCompanyID: ''
})
const handleQuery = async () => {
    // paramsForm.value.memberID= 'bGAyObFDels*'
    // paramsForm.value.countryName= 'pZoeVr/uVYY*'
    // paramsForm.value.companyLevel= 'oFgAAnESAbw*'
    // paramsForm.value.eCompanyID = 'fRpHexoTw1Y*'
    paramsForm.value.memberID = getCookie('EUserID')
    paramsForm.value.countryName = getCookie('ECountryName')
    paramsForm.value.companyLevel = getCookie('ECompanyLevel')
    paramsForm.value.eCompanyID = getCookie('ECompanyID')
    await updateMemberPasswordAction(Object.assign(paramsForm.value)).then((res: any) => {
        if (res.data.type === 'success') { ElMessage.success('修改密码成功！'); paramsForm.value = {} }
    })
}


// 打开弹窗
const openDialog = async () => {
    outerVisible.value = true;
    paramsForm.value = {}
};
// 关闭弹窗
const closeDialog = () => {
    outerVisible.value = false;
    paramsForm.value= {}
};
const submit = () => {
    if (paramsForm.value.oldPassword) {
        if (paramsForm.value.newPassword === paramsForm.value.queryNewpassWord) {
            handleQuery()
            outerVisible.value = false;
        } else {
            paramsForm.value.newPassword = ''
            paramsForm.value.queryNewpassWord = ''
            ElMessage.error('两次密码输入不相同！')
        }
    } else {
        paramsForm.value.OldpassWord = ''
        ElMessage.error('输入的旧密码错误！')
    }
}

//将属性或者函数暴露给父组件
defineExpose({ openDialog });
</script>

<template>
    <div id="transferModel">
        <el-dialog v-model="outerVisible" title="修改密码" width="30%" @close="closeDialog">
            <template #default>
                <el-form ref="ruleFormRef" :model="paramsForm" class="demo-ruleForm" status-icon>
                    <el-form-item label="输入旧密码：" prop="oldPassword">
                        <el-input v-model="paramsForm.oldPassword" type="password" placeholder="请输入旧密码" clearable />
                    </el-form-item>
                    <el-form-item label="输入新密码：" prop="newPassword">
                        <el-input v-model="paramsForm.newPassword" type="password" placeholder="请输入新密码" clearable />
                    </el-form-item>
                    <el-form-item label="确认新密码：" prop="queryNewpassWord">
                        <el-input v-model="paramsForm.queryNewpassWord" type="password" placeholder="确认新密码：" clearable />
                    </el-form-item>
                </el-form>
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