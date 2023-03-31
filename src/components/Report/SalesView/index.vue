<template>
  <div class="outer-wrapper">
    <el-card class="box-card">
      <template #header>
        <div class="menu-wrapper">
          <el-menu mode="horizontal"
                   :default-active="activeIndex"
                   @select="onMenuSelect"
                   :ellipsis="false">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect"
                            size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>

            <el-date-picker type="daterange"
                            v-model="date"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            size="small"
                            :shortcuts="shortcuts"
                            unlink-panels></el-date-picker>
          </div>
        </div>
      </template>
      <div class="sales-view-chart-wrapper">
        <v-chart class="chart"
                 :option="renderOptions"
                 autoresize />
        <div class="rank-list">
          <div class="rank-list-title">排行榜</div>
          <div class="list-item"
               v-for="item in rankList"
               :key="item.no">
            <div class="list-item-no"
                 :class="+item.no <=3 ? 'top-no':''">{{ item.no }}</div>
            <div class="list-item-name">{{ item.name }}</div>
            <div class="list-item-sales">{{ formatNumber(item.money )}}</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { reactive, toRefs, watch, computed } from 'vue'
import useDataStore from '@/stores/data'
import { storeToRefs } from 'pinia'
import { formatNumber } from '@/utils/tools'

export default {
  setup () {
    const store = useDataStore()
    const { orderFullYear, orderFullYearAxis, orderRank, userFullYear, userFullYearAxis, userRank } = storeToRefs(store)


    const state = reactive({
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      shortcuts: [
        {
          text: '最近一周',
          value: () => {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          }
        },
        {
          text: '最近一个月',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          }
        },
        {
          text: '最近三个月',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          }
        }
      ],
      renderOptions: {}
    })

    const rankList = computed(() => state.activeIndex === '1' ? orderRank.value : userRank.value)

    const renderChart = (title, axis, data) => {
      state.renderOptions =
      {
        title: {
          text: title,
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 0
        },
        xAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          },
          data: axis
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data
          }
        ],
        color: ['#3398DB'],
        grid: {
          top: 70,
          bottom: 50,
          left: 30,
          right: 60
        } // 控制图片的位置
      }
    }

    watch(() => orderFullYear.value, () => {
      renderChart('年度销售额', orderFullYearAxis, orderFullYear)
    })

    const onMenuSelect = (index) => {
      state.activeIndex = index
      if (index === '1') {
        renderChart('年度销售额', orderFullYearAxis, orderFullYear)
      } else {
        renderChart('年度用户访问量', userFullYearAxis, userFullYear)
      }
    }

    return {
      ...toRefs(state),
      onMenuSelect,
      rankList,
      formatNumber
    }
  }
}
</script>
<style scoped lang="scss">
.outer-wrapper {
  margin-top: 20px;

  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;

    .rank-list {
      font-size: 14px;
      width: 30%;

      .rank-list-title {
        font-weight: 500;
      }
      .list-item {
        display: flex;
        position: relative;
        margin-top: 15px;

        .list-item-no {
          text-align: center;
          margin-right: 10px;
          min-width: 15px;
        }

        .top-no {
          height: 15px;
          border-radius: 50%;
          background-color: black;
          color: white;
        }

        .list-item-sales {
          position: absolute;
          right: 0;
        }
      }
    }

    .chart {
      height: 100%;
      width: 70%;
    }
  }
}

:deep(.box-card) {
  .menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .el-card__header {
    border-bottom: none;
    padding: 0;
  }

  .el-menu {
    width: 100%;
    padding: 0 20px;

    .el-menu-item {
      line-height: 43px;
    }
  }
  .menu-right {
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;

    .el-radio-group {
      margin-right: 10px;
    }
  }
}
</style>
