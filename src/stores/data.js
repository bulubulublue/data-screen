import { defineStore } from 'pinia'
import { getScreenData,getWordcloudData } from '@/api'
import { wrapperNumber,wrapperArray,wrapperOriginalNumber } from '@/utils/tools'

const useDataStore = defineStore('data',{
  state: () => ({
    salesData: null,
    worldcloudData:null
  }),
  getters:{
    salesToday: state => wrapperNumber(state.salesData,'salesToday'),
    salesGrowthLastDay:state => wrapperNumber(state.salesData,'salesGrowthLastDay'),
    salesGrowthLastMonth:state => wrapperNumber(state.salesData,'salesGrowthLastMonth'),
    salesLastDay:state => wrapperNumber(state.salesData,'salesLastDay'),
    orderUser:state => wrapperNumber(state.salesData,'orderUser'),
    returnRate:state => wrapperNumber(state.salesData,'returnRate'),
    orderUserTrendAxis:state =>wrapperArray(state.salesData, 'orderUserTrendAxis'),
    orderUserTrend:state =>wrapperArray(state.salesData, 'orderUserTrend'),
    orderToday:state => wrapperNumber(state.salesData,'orderToday'),
    orderLastDay:state => wrapperNumber(state.salesData,'orderLastDay'),
    orderTrend:state => wrapperArray(state.salesData,'orderTrend'),
    userToday:state => wrapperNumber(state.salesData,'userToday'),
    userGrowthLastDay:state => wrapperNumber(state.salesData,'userGrowthLastDay'),
    userGrowthLastMonth:state => wrapperNumber(state.salesData,'userGrowthLastMonth'),
    userLastMonth:state => wrapperOriginalNumber(state.salesData,'userLastMonth'),
    orderFullYear:state => wrapperArray(state.salesData,'orderFullYear'),
    orderFullYearAxis:state => wrapperArray(state.salesData,'orderFullYearAxis'),
    orderRank:state => wrapperArray(state.salesData,'orderRank'),
    userFullYear:state => wrapperArray(state.salesData,'userFullYear'),
    userFullYearAxis:state => wrapperArray(state.salesData,'userFullYearAxis'),
    userRank:state => wrapperArray(state.salesData,'userRank'),
  },
  actions:{
    async querySalesData(){
      const result = await getScreenData()
      this.salesData = result
    },
    async queryWorldcloudData(){
      const result = await getWordcloudData()
      this.worldcloudData = result
    }
  }
})

export default useDataStore
