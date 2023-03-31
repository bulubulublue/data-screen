<template>
  <v-chart class="chart"
           :option="getOption()" />
</template>
<script>
import 'echarts-liquidfill'
import useDataStore from '@/stores/data'
import { storeToRefs } from 'pinia'

export default {
  setup () {
    const store = useDataStore()
    const { userGrowthLastMonth } = storeToRefs(store)

    const getColor = val => {
      if (val > 0 && val <= 0.5) {
        return 'rgba(97,216,0,.7)'
      }
      if (val > 0.5 && val <= 0.8) {
        return 'rgba(204,178,26,.7)'
      }

      if (val > 0.8) {
        return 'rgba(241,47,28,.7)'
      }

      return '#c7c7cb'
    }

    const getOption = () => {
      const data = [userGrowthLastMonth.value / 100] //data为0.几的百分数

      return {
        series: [{
          type: 'liquidFill',
          data, // 多个数据的话，则会展示多条波浪，从大到小排列
          color: [getColor(data[0])], // 波纹颜色，对应数据顺序
          outline: {
            borderDistance: 0,
            itemStyle: {
              borderWidth: 1,
              borderColor: '#aaa4a4',
              shadowBlur: 0,
              shadowColor: '#fff',
              color: 'none'
            }
          },
          backgroundStyle: {
            color: '#fff'
          },
          itemStyle: {
            shadowBlur: 0,
            shadowColor: '#fff'
          },
          label: {
            formatter: (v) => Math.floor(v.data * 100) + '%',
            fontSize: 36,
            color: '#999',
            fontWeight: 'normal',
            position: ['50%', '50%'],
            insideColor: '#fff' // 水纹和文字重叠时，文字的颜色
          }
        }]
      }
    }


    return {
      getOption
    }
  }
}
</script>
<style scoped>
.chart {
  height: 250px;
}
</style>
