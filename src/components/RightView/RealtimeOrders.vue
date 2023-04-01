<template>
  <flybox>
    <div class="outer">
      <div class="left">
        <div class="title">{{ t('realtimeOrderTrend') }}</div>
        <div class="number">{{ formatNumber(realTimeOrder.totalOrders) }}</div>
        <div class="subtitle">{{ t('wowIncreaseRate') }}</div>
        <div class="rate-number">{{ realTimeOrder.weekGrowth }}</div>
      </div>
      <div class="right">
        <v-chart class="chart" :option="option" />
      </div>
    </div>
  </flybox>
</template>
<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { formatNumber } from '@/utils/index'
import SocketService from '@/utils/socket'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n({ useScope: 'global' })
    //   const screenData = inject('screen-data')
    //   const realTimeOrder = computed(() => screenData.value.realTimeOrder.value)
    const realTimeOrder = ref({})
    const getData = (data) => {
      realTimeOrder.value = data
    }

    const option = computed(() => ({
      xAxis: {
        type: 'category',
        data: realTimeOrder.value.date,
        axisLabel: {
          fontSize: 24,
          // interval: 0,
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
    }))

    onMounted(() => {
      SocketService.Instance.registerCallback('getData', getData)
      // connect方法在main中调用，可能连接还没成功，组件里就调用了send方法，则会造成报错
      SocketService.Instance.send({
        action: 'getData',
        functionName: 'getData',
      })
    })

    onUnmounted(() => {
      SocketService.Instance.unregisterCallback('getData')
      SocketService.Instance.send({
        action: 'unmount',
      })
    })

    return {
      t,
      realTimeOrder,
      option,
      formatNumber,
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
