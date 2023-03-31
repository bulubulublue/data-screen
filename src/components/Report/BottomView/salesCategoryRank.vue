<template>
  <div>
    <el-card class="card-container">
      <template #header>
        <div class="header-container">
          <div class="title">分类销售排行</div>
          <el-radio-group v-model="categoryType"
                          size="small">
            <el-radio-button label="品类" />
            <el-radio-button label="商品" />
          </el-radio-group>
        </div>
      </template>
      <v-chart class="chart"
               :option="getOption()" />
    </el-card>
  </div>
</template>
<script>
import { reactive, ref, toRefs, computed } from 'vue'
import useDataStore from '@/stores/data'
import { storeToRefs } from 'pinia'
import { wrapperObject } from '@/utils/tools'

export default {
  name: 'KeywordSearch',
  setup () {
    const store = useDataStore()
    const { salesData } = storeToRefs(store)

    const state = reactive({
      categoryType: '品类'
    })

    const categoryData = computed(() => wrapperObject(salesData.value, 'category.category'))
    const productData = computed(() => wrapperObject(salesData.value, 'category.product'))

    const categoryOption = ref({})

    const getOption = () => {
      let data = []
      let axis = []
      if (categoryData.value) {
        if (state.categoryType === '品类') {
          data = categoryData.value.data1
          axis = categoryData.value.axisX

        } else {
          data = productData.value.data1
          axis = productData.value.axisX
        }
      }

      const total = data.reduce((sum, item) => sum + item, 0)

      data = data.map((item, index) => ({
        legendname: axis[index],
        value: item,
        percent: `${(item / total * 100).toFixed(2)}%`,
        name: `${axis[index]} | ${(item / total * 100).toFixed(2)}%`
      }))

      return {
        title: [{
          text: `${state.categoryType}分布`,
          textStyle: {
            fontSize: 14,
            color: '#666',
            fontWeight: 500
          },
          left: 20,
          top: 20
        },
        {
          text: '累计订单量',
          subtext: `${total}`,
          x: '34.5%', // 偏移量
          y: '42.5%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          }
          // left: 'center',
          // top: 'center'
        }],
        series: [{
          type: 'pie',
          name: '品类分布',
          data,
          radius: ['45%', '60%'], // 内半径，外半径，默认值为0%，75%；75%：当前画布宽高最小值的75%作为其直径
          label: {
            show: true,
            position: 'outside',
            formatter: (params) => params.data.legendname
          },
          center: ['35%', '50%'], // 圆心位置 表示宽度的35%，高度的50%
          labelLine: { // 用于控制文字和饼图当中的线段, 可控制线段1和线段2
            length: 5,
            length2: 3,
            smooth: true
          },
          clockwise: true, // 控制数据是否顺时针排列
          itemStyle: { // 通过将边框设置为白色，来添加每个项目间的间距
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        legend: { // 如果需要添加legend，则需要数据中含data属性
          type: 'scroll', // 如果超过指定长度，则显示上下箭头
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: { // 移动到数据上时，显示值，默认显示name：value
          trigger: 'item',
          formatter: params => {
            // params.seriesName: 对应series中定义的name属性
            // params.marker: 在项目前添加小点
            const str = params.seriesName + '<br/>' + params.marker + params.data.legendname +
              '<br/>' + params.marker + '数量' + params.data.value + '<br/>' + params.marker + '占比:' + params.data.percent
            return str
          }
        }
      }
    }

    return {
      categoryOption,
      ...toRefs(state),
      getOption
    }
  }

}
</script>
<style scoped lang="scss">
.chart {
  height: 452px;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 14px;
    font-weight: bold;
  }
}

:deep(.card-container) {
  .el-card__header {
    padding: 14px 20px;
  }
}
</style>
