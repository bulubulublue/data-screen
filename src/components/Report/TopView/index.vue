<template>
  <div class="top-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TotalSales from './TotalSales.vue'
import TotalOrders from './TotalOrders.vue'
import TodayUsers from './TodayUsers.vue'
import TotalUsers from './TotalUsers.vue'

export default {
  name: 'TopView',
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers
  }
}
</script>
