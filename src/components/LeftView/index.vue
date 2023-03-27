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
    <div class="chart-container3">
      <device-overview />
    </div>
    <div class="chart-container4">
      <gender-overview />
    </div>
    <div class="chart-container5">
      <rider-overview />
    </div>
    <div class="chart-container6">
      <category-overview />
    </div>
  </div>
</template>
<script>
import TotalUser from './TotalUser.vue'
import AverageAge from './AverageAge.vue'
import DeviceOverview from './DeviceOverview.vue'
import GenderOverview from './GenderOverview.vue'
import RiderOverview from './RiderOverview.vue'
import CategoryOverview from './CategoryOverview.vue'

export default {
  props: {
    todayUser: Number,
    growthLastDay: Number,
    growthLastMonth: Number
  },
  components: {
    TotalUser,
    AverageAge,
    DeviceOverview,
    GenderOverview,
    RiderOverview,
    CategoryOverview
  }
}
</script>>
<style scoped lang="scss">
.view-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .chart-container1 {
    height: 280px;
  }
  .chart-container2 {
    height: 350px;
  }
  .chart-container3 {
    height: 260px;
  }
  .chart-container4 {
    height: 180px;
  }
  .chart-container5 {
    height: 360px;
  }
  .chart-container6 {
    height: 380px;
  }
}
</style>