<template>
  <div>
    <el-card class="card-container">
      <template #header>
        <div class="title">关键词搜索</div>
      </template>
      <div class="body-container">
        <div class="chart-container">
          <div class="chart-user">
            <div class="chart-title">搜索用户数</div>
            <div class="chart-total">{{ totalSearchUsers }}</div>
            <v-chart class="chart"
                     :option="getOption('user')" />
          </div>
          <div class="chart-search">
            <div class="chart-title">搜索量</div>
            <div class="chart-total">{{totalSearchCount}}</div>
            <v-chart class="chart"
                     :option="getOption('count')" />
          </div>
        </div>
        <div class="table-container">
          <el-table :data="tableData">
            <el-table-column prop="rank"
                             label="排名" />
            <el-table-column prop="keyword"
                             label="关键词" />
            <el-table-column prop="count"
                             label="总搜索量" />
            <el-table-column prop="users"
                             label="搜索用户数" />
          </el-table>
          <el-pagination background
                         small
                         layout="prev, pager, next"
                         :page-size="pageSize"
                         :total="totalCount"
                         @current-change="currentChange" />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { reactive, toRefs, computed } from 'vue'
import useDataStore from '@/stores/data'
import { storeToRefs } from 'pinia'
import { formatNumber } from '@/utils/tools'

export default {
  name: 'KeywordSearch',
  setup () {
    const store = useDataStore()
    const { worldcloudData } = storeToRefs(store)
    const state = reactive({
      currentPage: 1,
      pageSize: 6
    })


    const totalCount = computed(() => worldcloudData.value ? worldcloudData.value.length : 0)

    const tableData = computed(() => {
      if (worldcloudData.value) {
        const originalData = [...worldcloudData.value]
        let sortedArray = originalData.sort((a, b) => b.count - a.count)
        sortedArray = sortedArray.map((item, index) => ({
          rank: index + 1,
          keyword: item.word,
          count: item.count,
          users: item.user
        }))
        return sortedArray.slice((state.currentPage - 1) * state.pageSize, state.currentPage * state.pageSize)
      }
      return []
    })

    const totalSearchUsers = computed(() => worldcloudData.value ? formatNumber(worldcloudData.value.reduce((sum, item) => sum + item.user, 0)) : 0)
    const totalSearchCount = computed(() => worldcloudData.value ? formatNumber(worldcloudData.value.reduce((sum, item) => sum + item.count, 0)) : 0)

    const getOption = (type) => {
      let axis = []
      let data = []
      if (worldcloudData.value) {
        axis = worldcloudData.value.map(item => item.word)
        if (type === 'user') {

          data = worldcloudData.value.map(item => item.user)
        } else {
          data = worldcloudData.value.map(item => item.count)
        }
      }

      return {
        xAxis: { type: 'category', boundaryGap: false, data: axis },
        yAxis: { show: false },
        tooltip: {},
        series: [{
          type: 'line',
          areaStyle: {

            color: 'rgba(95,187,255,.5)'
          },
          data,
          lineStyle: {
            color: 'rgba(95,187,255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: { top: 0, left: 0, bottom: 0, right: 0 }
      }
    }


    const currentChange = (page) => {
      state.currentPage = page
    }

    return {
      ...toRefs(state),
      currentChange,
      tableData,
      totalCount,
      totalSearchUsers,
      totalSearchCount,
      getOption
    }
  }
}
</script>
<style scoped lang="scss">
.body-container {
  height: 452px;
}
:deep(.card-container) {
  .el-card__body {
    padding: 20px 40px;
  }

  .el-pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
.title {
  font-size: 14px;
  font-weight: bold;
}

.table-container {
  margin-top: 20px;
}

.chart-container {
  display: flex;

  .chart {
    height: 50px;
    width: 100%;
  }
  .chart-user,
  .chart-search {
    flex: 1;

    .chart-title {
      font-size: 14px;
      color: #999;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .chart-total {
      font-size: 22px;
      font-weight: 500;
    }
  }

  .chart-user {
    margin-right: 10px;
  }
}
</style>
