<template>
  <common-card title="累计订单量"
               :value="orderToday">
    <template #chart>
      <v-chart class="chart"
               :option="getOptions()" />
    </template>
    <template #footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{orderLastDay}}</span>
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
    const { orderToday, orderLastDay, orderTrend } = storeToRefs(store)

    const getOptions = () => (
      {
        xAxis: {
          type: 'category',
          show: false, // 隐藏x轴
          boundaryGap: false // 表示图表距离x轴两侧的距离，false使图表左右顶格
        },
        yAxis: {
          show: false // 隐藏y轴
        },
        series: [{
          data: orderTrend.value,
          type: 'line',
          areaStyle: {
            color: 'purple'
          }, // 显示区域颜色
          lineStyle: {
            width: 0
          }, // 控制线条不可见
          itemStyle: {
            opacity: 0
          }, // 控制每个数据点不可见
          smooth: true // 线条顺滑
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        } // 控制图片的位置
      }
    )

    return {
      getOptions,
      orderToday,
      orderLastDay
    }
  }
}
</script>
<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
