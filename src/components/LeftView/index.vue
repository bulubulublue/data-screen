<template>
  <div class="view-container">
    <div class="chart-container1">
      <total-user :todayUser="todayUser"
                  :growthLastDay="growthLastDay"
                  :growthLastMonth="growthLastMonth"></total-user>
    </div>
    <div class="chart-container2">
      <average-age />
    </div>
    <div class="chart-container3">container3</div>
    <div class="chart-container4">container4</div>
    <div class="chart-container5">container5</div>
    <div class="chart-container6">container6</div>
  </div>
</template>
<script>
import TotalUser from './TotalUser.vue'
import AverageAge from './AverageAge.vue'
export default {
  props: {
    todayUser: Number,
    growthLastDay: Number,
    growthLastMonth: Number
  },
  components: {
    TotalUser,
    AverageAge
  }
}
</script>>
<style scoped lang="scss">
.view-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .chart-container1 {
    height: 300px;
  }
  .chart-container2 {
    height: 320px;
  }
  .chart-container3 {
    height: 280px;
  }
  .chart-container4 {
    height: 230px;
  }
  .chart-container5 {
    height: 300px;
  }
  .chart-container6 {
    height: 360px;
  }
}
</style>