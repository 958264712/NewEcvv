import { Local } from '@/utils/storage'
import { defineStore } from 'pinia'

interface ProductStore{
    productItemList: any[],
    idList: Array<Number>,
    companyNameList: Array<String>,
    basketList:any
}

export const useProductStore = defineStore('productStore',{
    state: (): ProductStore => ({
        productItemList: [],
        idList: [],
        companyNameList: [],
        basketList:{}
    }),
    actions: {
        addProductItem(obj: any, name: string) {
            const len = Local.get('productItemList')
            if (len !== null) {
                this.companyNameList = Local.get('companyNameList')
                this.productItemList = Local.get('productItemList')
                this.basketList = Local.get('basketList')
                this.idList = Local.get('idList')
            }
            // 判断公司昵称是否存在，存在直接添加内容，不存在添加名字
            const result = this.companyNameList.some((item: string) => { 
                for (let i = 0; i < item.length; i++) {                    
                    return item[i] === name[i]
               }
            })
            // ！this.companyNameList.some((item: string) => { item == name })
            if (!result) {
                this.companyNameList.push(name)
                Local.set('companyNameList', this.companyNameList)
                this.basketList[name] = []
            } 
            if (!this.idList.some((item:number) => item === obj.pid)) {
                this.idList.push(obj.pid)
                this.productItemList.push(obj)
                this.basketList[name].push(obj)
                Local.set('productItemList', this.productItemList)
                Local.set('idList', this.idList)
            }
            Local.set('basketList', this.basketList)
        },
        delProductItem(id: number, name: string) {
            const len = Local.get('productItemList')
            let index = 0
            if (len !== null) {
                this.companyNameList = Local.get('companyNameList')
                this.productItemList = Local.get('productItemList')
                this.basketList = Local.get('basketList')
                this.idList = Local.get('idList')
            }
            this.productItemList.map((i:any, ind:number) => {
                if (i.pid === id) {
                    index = ind
                }
            })
            this.productItemList.splice(index, 1)
            this.idList.map((i,ind) => {
                if (i === id) {
                    this.idList.splice(ind,1)
                }
            })
            if (this.productItemList.length > 0) {
                this.basketList[name] = this.productItemList
            } else {
                this.basketList = {}
                this.companyNameList=[]
            }
            Local.set('companyNameList', this.companyNameList)
            Local.set('productItemList', this.productItemList)
            Local.set('idList', this.idList)
            Local.set('basketList', this.basketList)
        }
    }
})
