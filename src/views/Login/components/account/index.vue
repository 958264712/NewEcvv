<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const updatePWModel = defineAsyncComponent(() => import('./components/updatePW.vue'));
const updateTPModel = defineAsyncComponent(() => import('./components/updateTP.vue'));
const updateEmModel = defineAsyncComponent(() => import('./components/updateEm.vue'));
const updateBindModel = defineAsyncComponent(() => import('./components/updateBind.vue'));

const updatePW = ref()
const updateTP = ref()
const updateEm = ref()
const updateBind = ref()
const ifCode = ref(true)
const ifEmail = ref(false)
const phoneNumber = ref('15179265779')
const password = ref('123456')
const phoneEmail = ref('lw958264712@163.com')

const handleUpdatePw = () => {
    updatePW.value.openDialog()
}
const handleUpdateTP = () => {
    updateTP.value.openDialog()
}
const handleUpdateEm = () => {
    updateEm.value.openDialog()
}
const handleBind = () => {
    updateBind.value.openDialog()
}
</script >
<template>
    <div class="content">
        <h2>账号设置</h2>
        <el-form ref="ruleFormRef" class="demo-ruleForm" status-icon>
            <el-form-item label="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：" prop="passWord">
                <p> &nbsp;</p>
                <a @click="handleUpdatePw">修改密码</a>
            </el-form-item>
            <el-form-item label="手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：" prop="telphone">
                <p>{{ phoneNumber }}</p>
                <a @click="handleUpdateTP">修改手机</a>
            </el-form-item>
            <el-form-item label="邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：" prop="email">
                <!-- 如果没有绑定邮箱的情况 -->
                <template v-if="ifEmail">
                    <p>存在风险，请绑定邮箱</p>
                    <a @click="() => { handleUpdateEm(); ifCode = true }">绑定邮箱</a>
                </template>
                <template v-else>
                    <p>{{ phoneEmail }}</p>
                    <a @click="handleUpdateEm">修改邮箱</a>
                </template>
            </el-form-item>
            <el-form-item label="三方账号：" prop="bind">
                <p>已绑定账号名称</p>
                <a @click="handleBind">绑定/解绑</a>
            </el-form-item>
        </el-form>
    </div>
    <updatePWModel ref="updatePW" :password="password" />
    <updateTPModel ref="updateTP" :phoneNumber="phoneNumber" />
    <updateEmModel ref="updateEm" :phoneEmail="phoneEmail" :ifCode="ifCode" />
    <updateBindModel ref="updateBind" :phoneNumber="phoneNumber" />
</template>
<style scoped lang="less">
.content {
    background-color: #fff;
    margin-bottom: 30px;

    h2 {
        margin: 20px;
        padding-top: 20px;
        line-height: 30px;
        font-weight: bold;
        margin-bottom: 50px;

    }

    /deep/.el-form {
        width: 95%;
        padding-bottom: 30px;
        margin: 0 auto;

        .el-form-item {
            border-bottom: 1px solid #ccc;
        }

    }

    /deep/.el-form :nth-last-child(1) {
        border-bottom: none;
    }

    :deep(.el-form-item__content) {
        justify-content: flex-end;

        a {
            margin-left: 50px;
            cursor: pointer;
        }
    }
}

a {
    color: blue;
}
</style>
