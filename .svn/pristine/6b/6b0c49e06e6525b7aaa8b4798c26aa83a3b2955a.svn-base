import { Session } from '@/utils/storage'
import { defineStore } from 'pinia'

interface ProductStore{
    productItemList: any[],
    idList:Array<Number>
}

export const useProductStore = defineStore('productStore',{
    state: (): ProductStore => ({
        productItemList: [],
        idList: []
    }),
    actions: {
        addProductItem(obj: any) {
            if (!this.idList.some((item => item === obj.pid))) {
                this.idList.push(obj.pid)
                this.productItemList.push(obj)
                Session.set('productItemList',this.productItemList)
            }
        }
    }
})
