<template>
  <div class="outer">
    <div class="header">
      <span class="title"> {{ t('ageDistribute') }} </span>
      <span class="age">
        <span class="age-number">29.33</span>
        <span class="age-unit">{{ t('ageUnit') }}</span>
      </span>
    </div>
    <div class="chart-container">
      <v-chart class="chart" :option="getOption()" autoresize />
    </div>
    <div class="bottom">
      <div
        class="bottom-item-container"
        v-for="item in ageRangeData"
        :key="item.axis"
      >
        <div class="item-value">{{ formatNumber(item.value) }}</div>
        <div class="item-key"><span class="dot"></span> {{ item.axis }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject, ref } from 'vue'
import { formatNumber } from '@/utils/index'
import { useI18n } from 'vue-i18n'
export default {
  setup() {
    const { t } = useI18n({ useScope: 'global' })
    const screenData = inject('screen-data')

    const getOption = () => {
      const data = ['数值']
      const color = []
      const axis = ['指标']
      let max = 0
      screenData.value.ageRangeData.value.forEach((item) => {
        data.push(item.value)
        color.push(item.color)
        axis.push(item.axis)
        max += item.value
      })
      return {
        color,
        tooltip: {
          textStyle: {
            fontSize: 28,
          },
          padding: 10,
        },
        dataset: {
          source: [axis, data],
        },
        xAxis: {
          type: 'value',
          max,
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: 'rgba(98,105,113)',
            fontSize: 18,
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(50,51,53)',
              width: 3,
            },
          },
        }, // 设置坐标最大值
        yAxis: { type: 'category', show: false },
        series: [
          { type: 'bar', stack: 'total', barWidth: 15 },
          { type: 'bar', stack: 'total' },
          { type: 'bar', stack: 'total' },
          { type: 'bar', stack: 'total' },
        ],
        grid: {
          left: 10,
          right: 30,
          top: 40,
          bottom: 40,
        },
      }
    }

    return {
      t,
      ageRangeData: screenData.value.ageRangeData,
      getOption,
      formatNumber,
    }
  },
}
</script>
<style scoped lang="scss">
.outer {
  background-color: rgba(43, 44, 46);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      font-size: 32px;
      letter-spacing: 2px;
    }

    .age-number {
      font-size: 68px;
      line-height: 68px;
    }

    .age-unit {
      font-size: 24px;
    }
  }

  .chart-container {
    height: 120px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    .item-value {
      font-weight: bold;
      font-size: 36px;
      letter-spacing: 2px;
    }

    .item-key {
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      .dot {
        display: inline-block;
        height: 8px;
        width: 8px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>
