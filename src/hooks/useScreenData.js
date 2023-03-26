import { ref, onMounted } from 'vue'

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)

  let task
  onMounted(() => {
    task = setInterval(() => {
      todayUser.value += 10
      growthLastDay.value += 1.2
      growthLastMonth.value += 0.125
    }, 2000)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
  }
}
