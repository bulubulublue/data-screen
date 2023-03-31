import { counties } from '@/config/counties.js'
import { geo } from '@/config/geoConfig.js'
import { ref } from 'vue'

const states = [
  '北京市',
  '天津市',
  '河北省',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '上海市',
  '江苏省',
  '浙江省',
  '山东省',
  '河南省',
  '湖北省',
  '湖南省',
  '海南省',
  '重庆市',
  '四川省',
  '贵州省',
  '云南省',
  '西藏自治区',
  '陕西省',
  '甘肃省',
]

const mockScatterData = states.map((item) => ({
  name: item,
  value: Math.floor(Math.random() * 1000),
}))

// const geoGpsMap = {
//   1: [116.4100037, 40.18500137],
//   2: [125.8154, 44, 2584],
//   3: [117.1582, 36.8701],
//   4: [117.1582, 36.8701],
//   5: [103.9526, 30.7617],
//   6: [103.9526, 30.7617],
// }

export default function () {
  const cities = ref(['北京', '上海', '广东', '四川', '浙江', '福建'])
  const barChartOptions = ref([])
  const scatterData = ref([])
  const lineData = ref([])

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

  const convertLineData = function (destinations) {
    const res = []
    destinations.forEach((key) => {
      res.push({ coords: [[125.8154, 44, 2584], geo[key]] })
    })

    return res
  }

  scatterData.value = convertData(mockScatterData)
  lineData.value = convertLineData(states)

  cities.value.forEach((i) => {
    const yAxis = counties[i]
    const data = yAxis
      .map(() => Math.floor(Math.random() * 1000))
      .sort((a, b) => a - b)
    barChartOptions.value.push({
      yAxis: {
        data: yAxis,
      },
      title: [
        {
          text: `${i}销售数据`,
          textStyle: {
            color: '#fff',
            fontSize: 36,
          },
          right: '12%',
          top: 20,
        },
      ],
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: scatterData.value,
          symbolSize: (val) => val[2] / 30,
          rippleEffect: {
            brushType: 'stroke', //涟漪效果
          },
          itemStyle: {
            color: '#1DE9B6',
          },
          zlevel: 1,
        },
        {
          type: 'bar',
          data,
          itemStyle: {
            color: '#1DE9B6',
          },
        },
        {
          type: 'lines',
          data: lineData.value,
          effect: {
            show: true,
            period: 2,
            symbol: 'arrow',
            trailLength: 0.03,
            symbolSize: 7,
          },
          lineStyle: {
            color: '#1DE9B6',
            width: 2,
            curveness: 0.3,
            opacity: 0.3,
          },
          zlevel: 2,
        },
      ],
    })
  })

  const getCountiesList = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const arr = []
        data.features.forEach((element) => {
          arr.push(element.properties.name)
        })
        console.log(arr)
      })
  }

  getCountiesList(
    'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full'
  )

  return {
    cities,
    barChartOptions,
    getCountiesList,
    scatterData,
  }
}
