<template>
  <v-chart class="chart" :option="getOption()" />
</template>
<script>
import { onMounted, reactive, computed } from 'vue'
import 'echarts/extension/bmap/bmap'
import { getScatterData } from '@/api'
import geo from '@/config/geoConfigState'

export default {
  setup() {
    const state = reactive({
      data: [],
    })

    const dataTop = computed(() =>
      state.data.sort((a, b) => b.value - a.value).slice(0, 5)
    )

    const convertData = function (data) {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geo[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          })
        }
      }
      return res
    }

    const getOption = () => ({
      title: {
        text: '销售数据大盘',
        left: 'center',
      },
      bmap: {
        center: [116.404, 39.915],
        zoom: 5,
        roam: true,
        // mapStyle: {
        //   styleJson: STYLE_CONFIG
        // }
      },
      tooltip: {},
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData(state.data, state.geo),
          encode: {
            value: 2, // 在tooltip中显示值时使用第3列数据
          },
          label: {
            // 在圆点旁展示文字
            show: false,
            formatter: '{b}', // 表示展示城市，也可以用自定义函数
            position: 'right',
          },
          itemStyle: {
            color: 'purple', // 点的颜色
          },
          symbolSize: (val) => val[2] / 10, // val表示的是[121.15, 31.89, 9]，控制点的大小
          emphasis: {
            // 当鼠标移动到点上后的样式
            label: {
              show: true,
            },
          },
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: convertData(dataTop.value),
          encode: {
            value: 2,
          },
          symbolSize: function (val) {
            return val[2] / 10
          },
          //     showEffectOn: 'emphasis',
          rippleEffect: {
            brushType: 'stroke', // 动画波纹效果
          },
          hoverAnimation: true, // 鼠标移上去的样式
          label: {
            formatter: '{b}',
            position: 'right',
            show: true,
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
      ],
    })

    onMounted(async () => {
      const res = await getScatterData()
      state.data = res.data
    })

    return {
      getOption,
    }
  },
}
</script>
<style scoped>
/* .chart {
  height: 200px;
} */
</style>
