<template>
  <div class="outer">
    <div class="title-container">
      <div class="title">当前热卖品类</div>
      <div class="date">最新更新时间:{{dateTime}}</div>
    </div>
    <div class="chart-container">
      <v-chart class="chart"
               :option="option" />
    </div>
  </div>
</template>
<script>
import { computed, inject, onMounted, ref, watch } from 'vue'
import { toLocalDateTime } from '@/utils/index'
export default {
  setup () {
    const chartType = ref(0)
    const screenData = inject('screen-data')
    const categoryData = computed(() => screenData.value.categoryData.value)
    const option = ref(null)
    const timer = ref(null)
    const dateTime = toLocalDateTime(new Date())

    const getOption = () => {
      let axis = []
      let dataDomestic = []
      let dataOversea = []
      if (chartType.value === 0) {
        dataDomestic = categoryData.value.data1.data1
        dataOversea = categoryData.value.data1.data2
        axis = categoryData.value.data1.axisX
      } else {
        dataDomestic = categoryData.value.data2.data1
        dataOversea = categoryData.value.data2.data2
        axis = categoryData.value.data2.axisX
      }
      option.value = {
        xAxis: {
          type: 'category',
          data: axis,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            fontSize: 20
          }
        },
        yAxis: { show: true },
        color: ['rgba(202,252,137)', 'rgba(67, 64, 64,.8)'],
        series: [
          {
            data: dataDomestic,
            type: 'bar',
            stack: 'category'
          },
          {
            data: dataOversea,
            type: 'bar',
            stack: 'category'
          }
        ],
        grid: {
          left: 40,
          right: 0,
          top: 70,
          bottom: 40
        }
      };
    }

    watch(chartType, () => {
      getOption()
    })

    onMounted(() => {
      getOption()
      timer.value = setInterval(() => {
        if (chartType.value === 0) {
          chartType.value = 1
        } else {
          chartType.value = 0
        }
      }, 5000)
    })

    return {
      option,
      dateTime
    }
  }

}
</script>
<style lang="scss" scoped>
.outer {
  background-color: rgba(43, 44, 46);
  .title-container {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 32px;
      text-align: left;
      letter-spacing: 2px;
    }

    .date {
      text-align: right;
      font-size: 28px;
      letter-spacing: 2px;
    }
  }

  .chart-container {
    height: 260px;
  }
}
</style>