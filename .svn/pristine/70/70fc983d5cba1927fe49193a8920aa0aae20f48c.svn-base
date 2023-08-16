<script setup lang="ts">
import { ref } from 'vue'
import { getCategoryList } from '@/api/modular/sourcingRequest'

const emit = defineEmits(['CategoryList','eCategoryParentID'])
const outerVisible = ref(false)
const innerVisible = ref(false)
const eCategoryParentID = ref('')
const CategoryList = ref<any>([])
const ECateforyList = ref<any>([])
// 存入CategoryList id
const CategoryListID = ref<any>([])

const handleQuery = async (eCategoryParentID: string) => {
    await getCategoryList(Object.assign({ eCategoryParentID: eCategoryParentID })).then(res => {
        if (res.data.type === 'success') {
            const list = ref<any>([])
            ECateforyList.value.push(res.data.result)
            res.data.result.map((item: any) => {
                list.value.push(item.ECategoryID)
            })
            CategoryListID.value.push(list.value)
        }
    })
}

// 添加dom元素
const active = async (e: any) => {
    const ecategoryid = e.target.getAttribute('ecategoryid')
    const list = e.target.parentElement.children
    for (let i of list) {
        i.removeAttribute("class", 'transferModelactive')
    }
    e.target.setAttribute("class", 'transferModelactive')

    // 判断listId中是否存在list列表含有的id，判断是否为同一列表
    const ifadd = ref(false)
    CategoryListID.value.map((item: any) => {
        ifadd.value = item.some((ite: any) => {
            return ite === ecategoryid
        })
    })

    // 大于两个ul时判断当前id是否存在于最后一个ul，如果不存在则进行删除前一个ul
    if (e.target.parentElement.parentElement.children.length >= 2 && !ifadd.value) {
        CategoryList.value.pop()
        ECateforyList.value.pop()
    }
    CategoryList.value.push(e.target.innerHTML)
    if (e.target.parentElement.parentElement.className.split(' ')[0] === 'wareSort') {
        await getCategoryList(Object.assign({ eCategoryParentID: ecategoryid })).then(res => {
            if (res.data.type === 'success' && res.data.result.length) {
                const list = ref<any>([])
                res.data.result.map((item: any) => {
                    list.value.push(item.ECategoryID)
                })
                ECateforyList.value.push(res.data.result)
                eCategoryParentID.value = ecategoryid
                CategoryListID.value.push(list.value)
            }
        })
    }
}
// 打开弹窗
const openDialog = async () => {
    outerVisible.value = true;
    handleQuery('0')
};
// 关闭弹窗
const closeDialog = () => {
    outerVisible.value = false;
    ECateforyList.value = []
    CategoryList.value = []
};
const submit = () => {
    outerVisible.value = false;
    innerVisible.value = true
    emit('CategoryList',CategoryList.value)
    emit('eCategoryParentID',eCategoryParentID.value)
    ECateforyList.value = []
    CategoryList.value = []
}

//将属性或者函数暴露给父组件
defineExpose({ openDialog });
</script>

<template>
    <div id="transferModel">
        <el-dialog v-model="outerVisible" title="Selct Category" @close="closeDialog">
            <template #default>
                <div class="wareSort clearfix">
                    <ul class="ul" v-for="(item, index) in ECateforyList">
                        <li @click="(e) => { active(e) }" :ECategoryID="i.ECategoryID" :IsLeaf="i.IsLeaf"
                            v-for="(i, index) in item" :key="index" i.disabled>{{
                                i.ECategoryName }}</li>
                    </ul>
                </div>
            </template>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submit">
                        Select
                    </el-button>
                    <el-button @click="outerVisible = false">Cancel</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<style scoped lang="less">
#transferModel {
    /deep/.el-dialog {
        width: 600px;

        .el-dialog__header {
            border-bottom: 1px solid #ccc;
            margin-left: 16px;
        }

        .el-dialog__footer {
            border-top: 1px solid #ccc;
            margin: 0 16px;
        }
    }

    .wareSort {
        padding: 15px 8px 15px 7px;
        border: 1px solid #ddd;
        background-color: #f6f6f6;
        min-width: 550px;
        max-width: 1000px;
        display: flex;
        // height: 308px;

        // overflow: hidden;
        overflow: auto;

        .ul {
            display: inline-block;
            width: 260px;
            height: 290px;
            overflow: auto;
            padding: 10px;
            border: 1px solid #ddd;
            margin-right: 7px;
            margin-left: 8px;
            background-color: #fff;
        }

        li {
            cursor: pointer;
            width: 100%;
            height: 30px;
            line-height: 30px;
            border: 1px solid #fff;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
</style>
<style lang="less">
li.transferModelactive {
    border-color: #52bea6;
    background: #cefff4 no-repeat right center;
    background-image: url('https://myecvv.ecvv.com/layui/SelectCategory/arrow.png');
    color: #52bea6;
}
</style>