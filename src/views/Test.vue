<template>
  <div class="chart-container">
    <v-chart :option="option" class="chart" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { ref } from 'vue'

export default {
  setup() {
    const option = ref({})

    const centers = {
      //这里的名称需要与geojson中的城市名称对应
      南京市: [118.778074408, 32.0572355018],
      南通市: [120.873800951, 32.0146645408],
      宿迁市: [118.296893379, 33.9520497337],
      常州市: [119.981861013, 31.7713967447],
      徐州市: [117.188106623, 34.2715534311],
      扬州市: [119.427777551, 32.4085052546],
      无锡市: [120.305455901, 31.5700374519],
      泰州市: [119.919606016, 32.4760532748],
      淮安市: [119.030186365, 33.6065127393],
      盐城市: [120.148871818, 33.3798618771],
      苏州市: [120.619907115, 31.317987368],
      连云港市: [119.173872217, 34.601548967],
      镇江市: [119.455835405, 32.2044094436],
    }

    fetch(
      'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=320000_full'
    )
      .then((res) => res.json())
      .then((data) => {
        echarts.registerMap('jiangsu', { geoJSON: data })
        option.value = {
          visualMap: {
            // 根据地图区域颜色深浅显示数据大小
            show: false, // 控制左下角标识是否显示,
            max: 100, //标识跨度最大值
            seriesIndex: [0], //默认为[0],对应的series中哪组数据进行渲染
            inRange: {
              color: ['#a5dcf4', '#006edd'], //最小值和最大值（0和100）的颜色
            },
          },
          geo: [
            //这是为了显示阴影而配置的，如果只有series，也可以显示地图
            {
              map: 'jiangsu',
              zoom: 1, //修改初始时地图大小
              roam: false, // 启动鼠标滚轮的缩放功能, 禁用，否则放大缩小时地图和阴影会脱节
              scaleLimit: {
                //控制地图缩放的最大最小值
                min: 0,
                max: 3,
              },
              itemStyle: {
                areaColor: 'red', //修改地图颜色
                shadowColor: '#013c62',
                shadowBlur: 20, //设置阴影
                shadowOffsetX: -20,
                shadowOffsetX: -20,
              },
              center: [116.404269, 39.9125], //设置地图中心点
            },
          ],
          series: [
            {
              type: 'map',
              map: 'jiangsu',
              zoom: 1, // 当不为1时，需要和geo中的一致，才能使阴影和地图的大小匹配
              label: {
                show: true,
                color: '#fff',
              },
              itemStyle: {
                borderColor: '#2980b6',
                borderWidth: 1,
                areaColor: '#12235c', //这里会覆盖上面设置的areaColor的值
              },
              emphasis: {
                label: {
                  color: 'red',
                },
                itemStyle: {
                  areaColor: '#fa8c16',
                  borderWidth: 0,
                },
              },
              data: Object.keys(centers).map((key) => ({
                name: key,
                value: Math.random() * 100,
              })),
            },
            {
              //气泡图
              type: 'effectScatter',
              coordinateSystem: 'geo', // 默认为cartesian2d,即二位直角坐标
              data: [{ value: centers['南京市'], city: '南京市' }],
              symbolSize: 16, //圆点大小,
              itemStyle: {
                color: '#feae21',
              },
              label: {
                show: true,
                formatter: (params) =>
                  `{title|${params.data.city}}\n{content|test2}`,
                position: 'top',
                backgroundColor: 'rgba(254,174,33,.8)',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#f7fafb',
                rich: {
                  //类似定义class的样式
                  title: {
                    padding: [0, 10, 10, 10],
                    color: '#fff',
                  },
                  content: {
                    padding: [10, 10, 0, 10],
                    color: '#fff',
                  },
                },
              },
              emphasis: {
                show: true,
              },
            },
          ],
        }
      })

    return {
      option,
    }
  },
}
</script>
<style scoped>
.chart-container {
  height: 1000px;
  width: 1000px;
}
</style>
