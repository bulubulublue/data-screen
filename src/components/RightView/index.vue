<template>
  <div class="view-container">
    <div class="top">
      <top-header />
    </div>
    <div class="subtop">
      <transform-category :data="subTopItems" />
    </div>
    <div class="main-content">
      <div class="main-left">
        <div class="main-item main-left-1">left1</div>
        <div class="main-item main-left-2">
          <transform-category :data="leftItems" :color="leftColors" />
        </div>
        <div class="main-item main-left-3">left3</div>
        <div class="main-item main-left-4">left3</div>
      </div>
      <div class="main-right">
        <div class="main-item main-right-1">
          <sales-list />
        </div>
        <div class="main-item main-right-2">right2</div>
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from './TopHeader.vue'
import TransformCategory from '@/components/Common/TransformCategory.vue'
import SalesList from './SalesList.vue'
export default {
  components: {
    TopHeader,
    TransformCategory,
    SalesList,
  },
  setup() {
    const subTopItems = ['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']
    const leftItems = ['订单量', '销售额', '用户数', '退单量']
    const leftColors = ['rgba(178,209,126)', 'rgba(116,166,49)']

    return {
      subTopItems,
      leftItems,
      leftColors,
    }
  },
}
</script>
<style scoped lang="scss">
.view-container {
  display: flex;
  flex-direction: column;
  .top {
    height: 206px;
  }

  .subtop {
    height: 48px;
    margin: 10px 0;
  }

  .main-content {
    flex: 1;
    display: flex;

    .main-item {
      width: 100%;
    }

    .main-left {
      width: 1917px;
      display: flex;
      flex: 0 0 1917px;
      flex-direction: column;
      justify-content: space-between;
      .main-left-1 {
        height: 999px;
      }

      .main-left-2 {
        height: 80px;
      }

      .main-left-3 {
        height: 350px;
      }

      .main-left-4 {
        height: 220px;
      }
    }

    .main-right {
      flex: 1;
      margin-left: 10px;

      .main-right-1 {
        height: 999px;
        padding-right: 20px;
        box-sizing: border-box;
      }

      .main-right-2 {
        height: 650px;
      }
    }
  }
}
</style>
