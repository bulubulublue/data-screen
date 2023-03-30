<template>
  <div class="chart-container">
    <v-chart class="chart" :option="option" />
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import useMapData from '@/hooks/useMapData.js'

export default {
  setup() {
    const option = ref({})
    const { cities, barChartOptions, scatterData } = useMapData()

    const getOption = () => {
      fetch(
        'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full'
      )
        .then((res) => res.json())
        .then((data) => {
          echarts.registerMap('china', { geoJSON: data })
          option.value = {
            baseOption: {
              xAxis: {
                type: 'value',
                position: 'top',
                splitLine: {
                  show: false,
                },
                boundaryGap: false,
                axisLabel: {
                  color: '#ddd',
                  fontSize: 18,
                },
              },
              yAxis: {
                type: 'category',
                axisLine: {
                  lineStyle: {
                    color: '#ddd',
                  },
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                  color: '#ddd',
                  fontSize: 18,
                },
              },
              backgroundColor: '#424446',
              timeline: {
                axisType: 'category',
                data: cities,
                autoPlay: true,
                playInterval: 3000,
                left: '10%',
                right: 0,
                bottom: '3%',
                width: '80%',
                itemStyle: {
                  color: '#ddd',
                },
                label: {
                  color: '#ddd',
                  fontSize: 24,
                  position: 20,
                },
                progress: {
                  lineStyle: {
                    color: '#555',
                  },
                  itemStyle: {
                    color: '#ddd',
                  },
                  label: {
                    color: '#ddd',
                    fontSize: 24,
                  },
                },
                emphasis: {
                  label: {
                    color: '#fff',
                  },
                  controlStyle: {
                    color: '#aaa',
                    borderColor: '#aaa',
                  },
                },
                symbolSize: 20,
                lineStyle: {
                  color: '#555',
                },
                checkpointStyle: {
                  //当前选中的项的样式
                  borderColor: '#777',
                  borderWidth: 2,
                },
                controlStyle: {
                  // 控制播放按钮样式
                  position: 'left',
                  showNextBtn: true,
                  showPrevBtn: true,
                  color: '#666',
                  borderColor: '#666',
                  itemSize: 28,
                },
              },
              grid: {
                top: '12%',
                right: '5%',
                left: '80%',
                bottom: '15%',
              },
              geo: [
                //这是为了显示阴影而配置的，如果只有series，也可以显示地图
                {
                  map: 'china',
                  zoom: 1.5, //修改初始时地图大小
                  roam: true, // 启动鼠标滚轮的缩放功能, 禁用，否则放大缩小时地图和阴影会脱节
                  scaleLimit: {
                    //控制地图缩放的最大最小值
                    min: 0,
                    max: 3,
                  },
                  itemStyle: {
                    borderColor: 'rgba(147,235,248)',
                    borderWidth: 1,
                    areaColor: {
                      //可以配置渐变色
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.8,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(147,235,248,0)', // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(147,235,248,0.2)', // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(128,217,248,1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10,
                  },
                  emphasis: {
                    itemStyle: {
                      areaColor: '#389BB7',
                      borderWidth: 0,
                    },
                  },
                  center: [113.83531246, 34.0267395887], //设置地图中心点
                },
              ],
            },
            options: barChartOptions,
          }
        })
    }

    onMounted(() => {
      getOption()
    })

    return {
      option,
    }
  },
}
</script>
<style lang="scss" scoped>
.chart-container {
  height: 100%;
  width: 100%;
}
</style>
