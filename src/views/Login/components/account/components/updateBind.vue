<script setup lang="ts">
import { h, ref, watch } from 'vue'
import { ElMessage, ElMessageBox, ElForm, ElFormItem, ElButton } from 'element-plus'
import { sendCode } from '@/api/modular/register.ts'

const props = defineProps(['phoneNumber'])
const ifTrue = ref(false)
const outerVisible = ref(false)
const ifBind = ref(false)
const paramsForm = ref<any>({ code :''})
const ifhandleCode = ref(false)
const ifqueryCode = ref('')
const timer = ref<any>()
const num = ref(60)
const handleQuery = () => {
    if (ifqueryCode.value === paramsForm.value.code) {
        // ok
        console.log('ok');
        
        ifTrue.value = true
    } else {
        ElMessage.error('验证码输入错误')
    }
}


// 打开弹窗
const openDialog = async () => {
    outerVisible.value = true;
    paramsForm.value = {}
};
// 关闭弹窗
const closeDialog = () => {
    outerVisible.value = false;
    paramsForm.value = {}
};
const submit = () => {
    if (ifTrue) {
         ElMessage({
            type: 'success',
            message: '绑定成功！',
        })
        outerVisible.value = false;
    }
}

const open = () => {
    ElMessageBox.confirm('确定解绑吗？', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
    }).then(() => {
        ElMessage({
            type: 'success',
            message: '解绑成功！',
        })
    })
}

const timers = () => {
    const code = document.getElementById('codeId') as any
    if (num.value <= 0) {
        clearTimeout(timer.value)
        ifhandleCode.value = false
        num.value = 60
        code.children[0].innerHTML = '获取验证码'
    } else {
        if (ifhandleCode.value) {
            num.value = num.value - 1
            code.children[0].innerHTML = num.value + 's'
            timer.value = setTimeout(() => {
                timers()
            }, 1000)
        }
    }
}

const handleCode = async () => {
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



const bind = () => {
    ElMessageBox({
        title: '验证安全手机',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        dangerouslyUseHTMLString: true,
        message: h('div', null, [
            h('div', null, `验证码将发送到手机 ${props.phoneNumber}`),
            h('div', { style: 'color:#ccc;margin-bottom:20px;' }, `如果长时间未收到验证码，请检查是否将运营商拉黑`),
            h(ElForm, { modelValue: paramsForm.value }, [
                h(ElFormItem, { label: '填写验证码：', prop: 'code' }, [
                    h('div', { style: "display:flex" }, [
                        h("input", {
                            attrs: { value: paramsForm.value.code, id: "hinput" },
                            on: {
                                input: paramsForm.value.code
                            },
                            placeholder: "验证码六位",
                        }),
                        h(ElButton, { onClick: handleCode, id: 'codeId' }, '获取验证码')
                    ])
                ])
            ])
        ])
    }).then(() => {
       handleQuery()
    }).catch(() => {
        paramsForm.value = {}
    })
}



//将属性或者函数暴露给父组件
defineExpose({ openDialog });
</script>

<template>
    <div id="transferModel">
        <el-dialog v-model="outerVisible" title="账号关联" width="30%" @close="closeDialog">
            <template #default>
                <ul class="bind_list">
                    <li data-v-7f7d303e="" class="item_cont">
                        <div>
                            <img data-v-7f7d303e="" src="https://i.csdn.net/static/img/bind_weixin.png" alt="微信"
                                class="icon_img" />
                            <span data-v-7f7d303e="" class="method_name">微信</span>
                        </div>
                        <span data-v-7f7d303e="" class="user_name">晨</span>
                        <template v-if="!ifBind">
                            <el-button type="primary" @click="bind" class="handle_text remove_text">绑定</el-button>
                        </template>
                        <template v-else>
                            <el-button type="danger" @click="open" class="handle_text remove_text">解绑</el-button>
                        </template>
                    </li>
                </ul>
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
.bind_list{
    padding: 0;
}
.bind_list .item_cont {
    height: 68px;
    line-height: 68px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon_img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .method_name {
        font-size: 16px;
        color: #4d4d4d;
        margin-left: 12px;
        width: 179px;
    }

    .user_name {
        font-size: 14px;
        color: #ccc;
    }

    .handle_text {
        font-size: 14px;
        cursor: pointer;
    }
}
</style>