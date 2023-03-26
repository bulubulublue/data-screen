import { ref, onMounted } from 'vue'

const ageMockData = [
  { startValue: 0, value: 11, axis: '0-20', color: 'rgba(116,166,49)' },
  { startValue: 0, value: 22, axis: '20-30', color: 'rgba(190,245,99)' },
  { startValue: 0, value: 33, axis: '30-50', color: 'rgba(202,252,137)' },
  { startValue: 0, value: 44, axis: '>50', color: 'rgba(251,253,142)' },
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

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  const ageRangeData = ref(ageMockData)
  const averageAge = ref(0)
  const deviceData = ref(deviceMockData)
  const genderData = ref(genderMockData)
  const riderData = ref(riderMockData)

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
  }
}
