import { ref, onMounted } from 'vue'

const ageMockData = [
  { startValue: 0, value: 132418, axis: '0-20', color: 'rgba(116,166,49)' },
  { startValue: 0, value: 332032, axis: '20-30', color: 'rgba(190,245,99)' },
  { startValue: 0, value: 552540, axis: '30-50', color: 'rgba(202,252,137)' },
  { startValue: 0, value: 32519, axis: '>50', color: 'rgba(251,253,142)' },
]

const deviceMockData = {
  totalDevices: 1070909,
  devices: [
    { value: 423676, key: 'Android' },
    { value: 373581, key: 'IOS' },
    { value: 273652, key: 'PC' },
  ],
}

const genderMockData = [
  {
    key: 'male',
    value: 1442542,
  },
  {
    key: 'female',
    value: 1442548,
  },
]

const riderMockData = {
  axisX: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  orderData: {
    legend1: '去年骑手月人均接单',
    legend2: '今年骑手月人均接单',
    lastYearPersonUnit: [
      330, 420, 560, 450, 610, 890, 720, 610, 580, 750, 770, 600,
    ],
    currentYearPersonUnit: [
      430, 510, 660, 550, 710, 990, 620, 550, 760, 810, 930, 720,
    ],
  },
  rateData: {
    legend1: '去年月新增骑手',
    legend2: '今年月新增骑手',
    lastYearRiders: [
      129, 223, 202, 197, 300, 112, 333, 249, 178, 322, 410, 167,
    ],
    currentYearRiders: [
      179, 263, 282, 297, 330, 344, 222, 299, 190, 455, 566, 233,
    ],
  },
}

const categoryMockData = {
  data1: {
    axisX: [
      '粉面粥店',
      '简餐便当',
      '汉堡披萨',
      '香锅冒菜',
      '小吃炸串',
      '地方菜系',
      '轻食简餐',
    ],
    data1: [50, 29, 46, 88, 99, 69, 97], //国内
    data2: [50, 71, 54, 12, 1, 31, 3], //海外
  },
  data2: {
    axisX: ['草莓', '甘蔗', '榴莲', '菠萝', '香蕉', '梨', '苹果'],
    data1: [85, 4, 3, 26, 63, 31, 19],
    data2: [15, 96, 97, 74, 37, 69, 81],
  },
}

const headerMockData = {
  todaySales: 40105335,
  todayOrders: 2570025,
  todayUsers: 272200,
  todayUsersIncrease: 1286552,
  transitionRate: '13.16%',
  returnRate: '5.73%',
}

const cities = [
  'Beijing',
  'Shanghai',
  'Jinan',
  'Shenzhen',
  'Guangzhou',
  'Nanjing',
  'Hefei',
  'Changchun',
  'Taicang',
  'Taiyuan',
  'Hangzhou',
  'Sichuan',
  'Chongqing',
  'Yunnan',
  "Xi'an",
  'Xiamen',
  'Wuhan',
  'Hebei',
]

const getRandomPercent = () => {
  const symbol = Math.round(Math.random())
  return `${symbol === 0 ? '-' : ''}${(Math.random() * 30).toFixed(2)}%`
}

const salesListMockData = cities.map((city) => ({
  city,
  order: getRandomPercent(),
  shop: getRandomPercent(),
  rider: getRandomPercent(),
  newShop: getRandomPercent(),
  avgOrder: getRandomPercent(),
}))

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  const ageRangeData = ref(ageMockData)
  const averageAge = ref(0)
  const deviceData = ref(deviceMockData)
  const genderData = ref(genderMockData)
  const riderData = ref(riderMockData)
  const categoryData = ref(categoryMockData)
  const headerData = ref(headerMockData)
  const salesListData = ref(salesListMockData)

  let task
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value += 10
      growthLastDay.value += 1.2
      growthLastMonth.value += 0.125
    }, 60000)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageRangeData,
    averageAge,
    deviceData,
    genderData,
    riderData,
    categoryData,
    headerData,
    salesListData,
  }
}
