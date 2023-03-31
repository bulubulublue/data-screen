<template>
  <common-card title="累计销售额"
               :value="'$ '+salesToday">
    <template #chart>
      <div class="compare-wrapper">
        <div class="compare-chart">
          <span>日同比</span>
          <span class="emphasis">{{salesGrowthLastDay}}%</span>
          <div :class="getClass('salesGrowthLastDay')"></div>
        </div>
        <div class="compare-chart">
          <span>月同比</span>
          <span class="emphasis">{{salesGrowthLastMonth}}%</span>
          <div :class="getClass('salesGrowthLastMonth')"></div>
        </div>
      </div>
    </template>
    <template #footer>
      <span>昨日销售额 </span>
      <span class="emphasis">$ {{salesLastDay}}</span>
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

    const { salesData, salesToday, salesLastDay, salesGrowthLastDay, salesGrowthLastMonth } = storeToRefs(store)

    const getClass = (key) => {
      if (!salesData.value) return
      if (Number(salesData.value[key]) > 0) return 'increase'
      if (Number(salesData.value[key]) < 0) return 'decrease'
      return ''
    }

    return {
      store,
      getClass,
      salesToday,
      salesGrowthLastDay,
      salesGrowthLastMonth,
      salesLastDay
    }
  }
}
</script>
<style scoped lang="scss">
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare-chart {
    margin-top: 3px;
    color: #666;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
}
</style>
