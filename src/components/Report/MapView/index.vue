<template>
  <div class="map-container">
    <div class="left"> <b-map /></div>
    <div class="right">
      <el-card class="card">
        <template #header>
          <div class="title">用户月同比增长</div>
        </template>
        <user-increase />
      </el-card>
      <el-card class="card">
        <template #header>
          <div class="title">热门搜索</div>
        </template>
        <hot-search />
      </el-card>
    </div>
  </div>
</template>
<script>
import BMap from './BMap.vue'
import UserIncrease from './UserIncrease.vue'
import HotSearch from './HotSearch.vue'

export default {
  components: {
    BMap,
    UserIncrease,
    HotSearch
  }
}
</script>
<style scoped lang="scss">
.map-container {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 700px;
    background: #fff;
  }

  .right {
    margin-left: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 12px;
      font-weight: 600;
    }

    :deep(.card) {
      flex: 1;
    }

    .card:first-child {
      margin-bottom: 20px;
    }
  }
}
</style>
