<template>
  <common-card title="累计用户数"
               :value="userToday">
    <template #chart>
      <v-chart class="chart"
               :option="getOptions()" />
    </template>
    <template #footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">{{userGrowthLastDay}}%</span>
        <div class="increase"></div>
        <span :style="{marginLeft:'10px'}">月同比 </span>
        <span class="emphasis">{{userGrowthLastMonth}}%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>
<script>
import CommonCardMixin from '@/mixin/commonCardMixin'
import useDataStore from '@/stores/data'
import { storeToRefs } from 'pinia'

export default {
  name: 'TotalSales',
  mixins: [CommonCardMixin],
  setup () {
    const store = useDataStore()
    const { userToday, userGrowthLastDay, userGrowthLastMonth, userLastMonth } = storeToRefs(store)

    const getOptions = () => (
      {
        xAxis: {
          type: 'value', // x轴为值
          show: false
        },
        yAxis: {
          type: 'category', // y轴为分类
          show: false
        },
        series: [
          {
            name: '上月平台用户数',
            type: 'bar',
            data: [userLastMonth.value],
            barWidth: 10,
            stack: '总量',
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            name: '今日平台用户数',
            type: 'bar',
            data: [userToday.value],
            barWidth: 10,
            stack: '总量',
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            data: [0],
            stack: '总量',
            renderItem: (params, api) => {
              // const value = api.value(0) // 获取data中的第1个元素，即200
              const endPoint = api.coord([userLastMonth.value, 0]) // 即横坐值为value，纵坐标值为0的地方，根据值获得横纵坐标
              return {
                type: 'group',
                position: endPoint,
                children: [{
                  type: 'path',
                  shape: {
                    d: `M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 
                  35h656.8c19.7 0 30.7-20.8 18.5-35z`, // svg图像,可以从iconfont等图标库中找
                    x: -5, // 偏移量
                    y: 6,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d: `M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 
                    10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z`, // svg图像,可以从iconfont等图标库中找
                    x: -5, // 偏移量
                    y: -16,
                    width: 10,
                    height: 10,
                    layout: 'cover' // center:保持原来图形的宽高比 cover:会填满矩形
                  },
                  style: {
                    fill: '#45c946'
                  }
                }]
              }
            }
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        } // 控制图片的位置
      })

    return {
      userToday,
      userGrowthLastDay,
      userGrowthLastMonth,
      userLastMonth,
      getOptions
    }

  }
}
</script>
<style scoped>
.total-users-footer {
  display: flex;
  align-items: center;
}

#total-users-chart {
  height: 100%;
  width: 100%;
}
</style>
