<template>
  <flybox>
    <div class="outer">
      <div class="left">
        <div class="title">实时订单趋势图</div>
        <div class="number">{{ realTimeOrder.totalOrders }}</div>
        <div class="subtitle">周同比增长率</div>
        <div class="rate-number">{{ realTimeOrder.weekGrowth }}</div>
      </div>
      <div class="right">
        <v-chart class="chart" :option="option" />
      </div>
    </div>
  </flybox>
</template>
<script>
import { inject, computed, ref } from 'vue'

export default {
  setup() {
    const screenData = inject('screen-data')
    const realTimeOrder = computed(() => screenData.value.realTimeOrder.value)
    const option = ref({
      xAxis: {
        type: 'category',
        data: realTimeOrder.value.date,
        axisLabel: {
          fontSize: 24,
          interval: 0,
        },
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 24,
        },
        splitLine: { show: false },
      },
      series: [
        {
          type: 'line',
          data: realTimeOrder.value.data,
          smooth: true,
          itemStyle: {
            opacity: 0,
          },
          lineStyle: {
            color: 'rgba(202,252,137)', // 更改数据线颜色
          },
        },
      ],
      grid: {
        top: 20,
        bottom: 30,
        right: 0,
        left: 80,
      },
    })
    return {
      realTimeOrder,
      option,
    }
  },
}
</script>
<style lang="scss" scoped>
.outer {
  display: flex;
  text-align: left;
  .left {
    width: 20%;
    .title {
      font-size: 36px;
      letter-spacing: 2;
    }

    .number {
      font-size: 68px;
      letter-spacing: 2;
    }

    .subtitle {
      font-size: 32px;
      margin-top: 20px;
    }

    .rate-number {
      font-size: 28px;
    }
  }

  .right {
    width: 80%;
    height: 100%;
  }
}
</style>
