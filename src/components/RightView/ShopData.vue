<template>
  <div class="outer-wrapper">
    <div class="title">地区商家销售排行</div>
    <div class="main-content">
      <div
        class="main-content-item"
        v-for="(item, i) in shopData"
        :key="item.city"
      >
        <div class="area-title">{{ item.city }}</div>
        <div class="chart-container">
          <v-chart class="chart" :option="options[i]"></v-chart>
        </div>
        <div class="table-container">
          <div class="table-header">
            <span class="column-1">商家</span>
            <span class="column-2">订单量</span>
            <span class="column-3">销售额</span>
          </div>
          <div class="table-rows" v-for="data in item.shops" :key="data.shop">
            <span class="column-1">{{ data.shop }}</span>
            <span class="column-2">{{ data.order }}</span>
            <span class="column-3">{{ data.sales }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject, computed, ref } from 'vue'

export default {
  setup() {
    const screenData = inject('screen-data')
    const shopData = computed(() => screenData.value.shopData.value)

    const options = ref([])
    shopData.value.forEach((item) => {
      const data = item.shops.map((i) => ({
        value: i.sales,
        name: i.shop,
      }))

      options.value.push({
        legend: {
          orient: 'vertical',
          left: 10,
          top: '25%',
          textStyle: {
            color: '#fff',
            fontSize: 24,
          },
        },
        color: ['rgba(251,253,142)', 'rgba(190,245,99)', 'rgba(202,252,137)'],
        series: [
          {
            type: 'pie',
            name: '品类分布',
            data,
            radius: ['45%', '60%'], // 内半径，外半径，默认值为0%，75%；75%：当前画布宽高最小值的75%作为其直径
            center: ['70%', '50%'], // 圆心位置 表示宽度的35%，高度的50%
            clockwise: true, // 控制数据是否顺时针排列
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        ],
        grid: {
          left: 0,
          right: 0,
        },
      })
    })

    return {
      options,
      shopData,
    }
  },
}
</script>
<style lang="scss" scoped>
.outer-wrapper {
  text-align: left;
  background: rgb(66, 68, 70);
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;

  .title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    flex: 1;

    .main-content-item {
      width: 31%;
      font-size: 26px;
      background: rgb(29, 29, 29);
      padding: 10px;
      border-radius: 10px;

      .table-container {
        height: 25%;

        .table-header {
          background-color: rgb(59, 58, 58);
        }

        .column-1 {
          display: inline-flex;
          width: 35%;
          justify-content: center;
          padding: 10px;
          box-sizing: border-box;
        }
        .column-2 {
          display: inline-flex;
          width: 32%;
          text-align: center;
          justify-content: center;
          padding: 10px;
          box-sizing: border-box;
        }
        .column-3 {
          display: inline-flex;
          width: 33%;
          justify-content: center;
          padding: 10px;
          box-sizing: border-box;
        }
      }

      .chart-container {
        height: 40%;
      }
    }
  }
}
</style>
