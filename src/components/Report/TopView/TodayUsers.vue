<template>
  <common-card title="今日交易用户数"
               :value="orderUser">
    <template #chart>
      <v-chart class="chart"
               :option="getOptions()" />
    </template>
    <template #footer>
      <span>退货率 </span>
      <span class="emphasis">{{returnRate}}%</span>
    </template>
  </common-card>
</template>
<script>
import CommonCardMixin from '@/mixin/commonCardMixin'
import useDataStore from '@/stores/data'
import { storeToRefs } from 'pinia'

export default {
  name: 'TotalSales',
  mixins: [CommonCardMixin],
  setup () {
    const store = useDataStore()
    const { orderUser, returnRate, orderUserTrendAxis, orderUserTrend } = storeToRefs(store)

    const getOptions = () => (
      {
        xAxis: {
          type: 'category',
          data: orderUserTrendAxis.value,
          show: false,
          barWidth: '60%' // 调整柱状图柱子宽度
        },
        yAxis: {
          show: false
        },
        color: ['#3398D8'], // 更改柱状图颜色
        tooltip: {},
        series: [
          {
            name: '用户实时交易量',
            type: 'bar',
            data: orderUserTrend.value,
          }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      })

    return {
      getOptions,
      orderUser,
      returnRate,
      orderUserTrendAxis,
      orderUserTrend
    }
  }
}
</script>
<style scoped>
#today-users-chart {
  height: 100%;
  width: 100%;
}
</style>
