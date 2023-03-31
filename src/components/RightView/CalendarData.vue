<template>
  <v-chart class="chart" :option="option"></v-chart>
</template>
<script>
import { inject, computed, ref } from 'vue'
export default {
  setup() {
    const screenData = inject('screen-data')
    const dateData = computed(() => screenData.value.dateData.value)

    const option = ref({
      calendar: {
        range: ['2023-01-01', '2023-06-30'],
        top: 30,
        left: 80,
        right: 40,
        bottom: 10,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgb(127,127,127)',
          },
        },
        yearLabel: { show: false },
        dayLabel: {
          color: 'rgb(127,127,127)',
          fontSize: 20,
        },
        monthLabel: {
          color: 'rgb(127,127,127)',
          fontSize: 20,
        },
        itemStyle: {
          color: 'rgb(48,48,48)',
          borderWidth: 1,
          borderColor: 'rgb(48,48,48)',
        },
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'calendar',
          data: dateData,
          symbolSize: (val) => val[1] / 40,
          itemStyle: {
            color: 'rgb(208,248,138)',
          },
        },
      ],
    })

    return {
      option,
    }
  },
}
</script>
