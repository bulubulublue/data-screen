<template>
  <div class="outer">
    <div class="chart-container">
      <v-chart class="chart" :option="getOption()"></v-chart>
    </div>
    <div class="right">
      <div class="right-top">
        <span class="title"> 外卖登录设备 </span>
        <span class="age">
          <span class="age-number">{{
            formatNumber(deviceData.totalDevices)
          }}</span>
          <span class="age-unit">台</span>
        </span>
      </div>
      <div class="right-bottom">
        <div
          class="bottom-item-container"
          v-for="item in deviceData.devices"
          :key="item.key"
        >
          <div class="item-value">{{ formatNumber(item.value) }}</div>
          <div class="item-key">
            <span class="dot"></span>
            <span>{{ item.key }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject } from 'vue'
import { formatNumber } from '@/utils/index'

export default {
  setup() {
    const screenData = inject('screen-data')

    const getOption = () => {
      const data = []
      screenData.value.deviceData.value.devices.forEach((item) => {
        data.push({
          value: item.value,
          name: item.key,
        })
      })

      return {
        color: ['rgba(251,253,142)', 'rgba(190,245,99)', 'rgba(202,252,137)'],
        series: [
          {
            type: 'pie',
            selectedMode: 'multiple', // 允许点击，点击后会往外偏移
            selectedOffset: 10, //点击后会往外偏移距离
            clockwise: true, // 数值会从大到小顺时针排列
            center: ['50%', '50%'],
            label: {
              show: false,
            },
            data,
            roseType: 'area', //设置为玫瑰图
            radius: '100%',
          },
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }
    }

    return {
      deviceData: screenData.value.deviceData,
      getOption,
      formatNumber,
    }
  },
}
</script>
<style lang="scss" scoped>
.outer {
  background-color: rgba(43, 44, 46);
  display: flex;

  .chart-container {
    width: 250px;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 10px;
    .right-top {
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

    .right-bottom {
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
}
</style>
