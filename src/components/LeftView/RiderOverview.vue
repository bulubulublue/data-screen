<template>
  <div class="outer">
    <div class="title">{{ t('riderOverview') }}</div>
    <div class="chart-container">
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>
<script>
import { computed, inject, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n({ useScope: 'global' })
    const chartType = ref(0)
    const screenData = inject('screen-data')
    const riderData = computed(() => screenData.value.riderData.value)
    const option = ref(null)
    const timer = ref(null)

    const getOption = () => {
      const axis = riderData.value.axisX
      let dataLastYear = []
      let dataCurrentYear = []
      let legends = []
      if (chartType.value === 0) {
        dataLastYear = riderData.value.orderData.lastYearPersonUnit
        dataCurrentYear = riderData.value.orderData.currentYearPersonUnit
        legends = [
          t(riderData.value.orderData.legend1),
          t(riderData.value.orderData.legend2),
        ]
      } else {
        dataLastYear = riderData.value.rateData.lastYearRiders
        dataCurrentYear = riderData.value.rateData.currentYearRiders
        legends = [
          t(riderData.value.rateData.legend1),
          t(riderData.value.rateData.legend2),
        ]
      }
      // option.value = {

      option.value = {
        xAxis: {
          type: 'category',
          data: axis,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            fontSize: 20,
          },
        },
        yAxis: {},
        legend: {
          //图例，在series中和name属性相对应
          data: legends,
          textStyle: {
            color: '#fff',
            fontSize: 24,
          },
          right: 0,
        },
        series: [
          {
            name: legends[0],
            data: dataLastYear,
            type: 'line',
            smooth: true,
            lineStyle: {
              color: 'rgba(251,253,142)',
            },
            itemStyle: {
              opacity: 0,
            }, // 控制每个数据点不可见
          },
          {
            name: legends[1],
            data: dataCurrentYear,
            type: 'line',
            smooth: true,
            itemStyle: {
              opacity: 0,
            }, // 控制每个数据点不可见
          },
        ],
        grid: {
          left: 40,
          right: 0,
          top: 70,
          bottom: 40,
        },
      }
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
      t,
    }
  },
}
</script>
<style lang="scss" scoped>
.outer {
  background-color: rgba(43, 44, 46);

  .title {
    font-size: 32px;
    text-align: left;
    letter-spacing: 2px;
  }

  .chart-container {
    height: 260px;
  }
}
</style>
