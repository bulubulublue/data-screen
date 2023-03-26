import { ref, onMounted } from 'vue'

const ageMockData = [
  { startValue: 0, value: 11, axis: '0-20', color: 'rgba(116,166,49)' },
  { startValue: 0, value: 22, axis: '20-30', color: 'rgba(190,245,99)' },
  { startValue: 0, value: 33, axis: '30-50', color: 'rgba(202,252,137)' },
  { startValue: 0, value: 44, axis: '>50', color: 'rgba(251,253,142)' },
]

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  const ageRangeData = ref(ageMockData)
  const averageAge = ref(0)

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
  }
}
