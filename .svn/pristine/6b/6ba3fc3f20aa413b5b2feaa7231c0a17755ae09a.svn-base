<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const queryParams = ref<any>({
    prodQuantityUnit:'Piece(s)'
})
const router = useRouter()
const queryRFQ = () => {
    router.push({ path: `/RFQInquiry`,query:{prodName:queryParams.value.prodName,prodDesc:queryParams.value.prodDesc,prodQuantity:queryParams.value.prodQuantity,prodQuantityUnit:queryParams.value.prodQuantityUnit} })
}
</script>
<template>
    <section id="demo-form-inline">
        <div class="sourcing-bg">
            <img class="theme-img-small" src="https://eresource.ecvv.com/PC_Ecvv/images/banner2.jpg"
                data-original="https://eresource.ecvv.com/PC_Ecvv/images/banner2.jpg" alt="EASY SOURCING">
            <div class="sourcing-form">
                <div class="form-title">
                    Want to get quotations?
                </div>
                <el-form :inline="true" size="large" :model="queryParams" class="demo-form-inline" >
                    <el-row >
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item  class="form-item" >
                                <el-input v-model="queryParams.prodName" class="form-text"
                                    placeholder="Product Name or Keywords" clearable style="width: 480px"/>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item class="form-item">
                                <el-input v-model="queryParams.prodDesc" type="textarea" class="form-textarea"
                                    placeholder="Product Description" rows="5" clearable style="width: 480px" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item class="form-item form-top">
                                <el-input v-model="queryParams.prodQuantity" class="form-text form-span-33"
                                    placeholder="Product Quantity" clearable />
                                <el-select v-model="queryParams.prodQuantityUnit"
                                    class="form-select form-span-33 J-quantityUnit">
                                    <el-option value="20' Container" id="20' Container">20' Container</el-option>
                                    <el-option value="40' Container" id="40' Container">40' Container</el-option>
                                    <el-option value="40' HQ Container" id="40' HQ Container">40' HQ Container</el-option>
                                    <el-option value="Piece(s)" id="Pieces">Piece(s)</el-option>
                                    <el-option value="Bag(s)" id="Bags">Bag(s)</el-option>
                                    <el-option value="Box(es)" id="Boxes">Box(es)</el-option>
                                    <el-option value="Foot(Feet)" id="Foot">Foot(Feet)</el-option>
                                    <el-option value="Meter(s)" id="Meter">Meter(s)</el-option>
                                    <el-option value="Pair(s)" id="Pairs">Pair(s)</el-option>
                                    <el-option value="Ream(s)" id="Reams">Ream(s)</el-option>
                                    <el-option value="Roll(s)" id="Rolls">Roll(s)</el-option>
                                    <el-option value="Set(s)" id="Sets">Set(s)</el-option>
                                    <el-option value="Square Meter(s)" id="SquareMeters">Square Meter(s)</el-option>
                                    <el-option value="Square Foot(Feet)" id="SquareFeet">Square Foot(Feet)</el-option>
                                    <el-option value="Ton(s)" id="Tons">Ton(s)</el-option>
                                    <el-option value="Yard(s)" id="Yard">Yard(s)</el-option>
                                    <el-option value="Other" id="Other">Other</el-option>
                                </el-select>
                                <el-input v-model="queryParams.prodQuantityUnitOther"
                                    class="form-text form-span-33 J-other-quantityUnit" placeholder=""
                                    style="display: none;" />
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item class="form-btn">
                                <el-button type="primary" @click="queryRFQ" >Post Your Request
                                    Now</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
    </section>
</template>
<style  lang="less">
#demo-form-inline {
    margin-top: 50px;

    .sourcing-bg {
        max-width: 1440px;
        margin: 0 auto;
        position: relative;

        .theme-img-small {
            width: 100%;
        }

        .sourcing-form {
            position: absolute;
            top: 35px;
            right: 30px;
            padding: 20px 25px;
            background: #fff;
            margin-left: 225px;
            width: 530px;

            .form-title {
                font-size: 24px;
                line-height: 30px;
                margin-bottom: 10px;
                font-weight: normal;
            }
            .form-top{
                margin-top: 30px;
            }
            .form-item {
                margin-bottom: 15px;

                .form-text,
                .form-select {
                    width: 100%;
                }

                .form-textarea {
                    resize: none;
                    width: 100%;
                    height: 86px;
                }

                .form-span-33 {
                    width: calc(33.33% - 7px);
                    margin-right: 10px;
                }

            }
        }
    }
}</style>