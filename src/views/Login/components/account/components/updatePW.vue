<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const props = defineProps(['password'])
const outerVisible = ref(false)
const paramsForm = ref<any>({})
const handleQuery = async () => {

}


// 打开弹窗
const openDialog = async () => {
    outerVisible.value = true;
    handleQuery()
};
// 关闭弹窗
const closeDialog = () => {
    outerVisible.value = false;
    paramsForm.value= {}
};
const submit = () => {
    if (props.password === paramsForm.value.OldpassWord) {
        if (paramsForm.value.newpassWord === paramsForm.value.queryNewpassWord) {
            ElMessage.success('修改密码成功！')
            paramsForm.value = {}
            outerVisible.value = false;
        } else {
            paramsForm.value.newpassWord = ''
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
                    <el-form-item label="输入旧密码：" prop="OldpassWord">
                        <el-input v-model="paramsForm.OldpassWord" placeholder="请输入旧密码" clearable />
                    </el-form-item>
                    <el-form-item label="输入新密码：" prop="newpassWord">
                        <el-input v-model="paramsForm.newpassWord" placeholder="请输入新密码" clearable />
                    </el-form-item>
                    <el-form-item label="确认新密码：" prop="queryNewpassWord">
                        <el-input v-model="paramsForm.queryNewpassWord" placeholder="确认新密码：" clearable />
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