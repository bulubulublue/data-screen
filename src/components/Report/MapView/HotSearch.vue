<template>
  <v-chart class="chart"
           :option="getOption()" />
</template>
<script>
import 'echarts-wordcloud'
import useDataStore from '@/stores/data'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export default {
  setup () {
    const store = useDataStore()
    const { worldcloudData } = storeToRefs(store)

    const data = computed(() => {
      if (worldcloudData.value) {
        const res = worldcloudData.value.map(item => ({
          name: item.word,
          value: item.count
        }))

        return res
      }

      return []
    })

    const getOption = () => (
      {
        series: [{
          type: 'wordCloud',
          shape: 'circle', // 图云的形状，
          // keepAspect: false,
          left: 'center',
          top: 'center',
          textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: { // 鼠标移上去的样式
            focus: 'self',
            textStyle: {
              textShadowBlur: 10,
              textShadowColor: '#333'
            }
          },
          data: data.value
        }]
      }
    )

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
