<template>
  <div class="outer">
    <div class="content-container">
      <div class="icon-container">
        <male-icon class="icon" />
      </div>
      <div class="data-container">
        <div class="title">男性用户人数</div>
        <div class="content">
          <span class="number">{{ formatNumber(maleCount) }}</span>
          <span class="unit">万人</span>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="icon-container">
        <female-icon class="icon" />
      </div>
      <div class="data-container">
        <div class="title">女性用户人数</div>
        <div class="content">
          <span class="number">{{ formatNumber(femaleCount) }}</span>
          <span class="unit">万人</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MaleIcon from '../Icon/Male.vue'
import FemaleIcon from '../Icon/Female.vue'
import { inject, computed } from 'vue'
import { formatNumber } from '@/utils/index'

export default {
  components: {
    MaleIcon,
    FemaleIcon,
  },
  setup() {
    const screenData = inject('screen-data')
    const maleCount = computed(
      () =>
        screenData.value.genderData.value.find((item) => item.key === 'male')
          .value
    )
    const femaleCount = computed(
      () =>
        screenData.value.genderData.value.find((item) => item.key === 'female')
          .value
    )
    return {
      maleCount,
      femaleCount,
      formatNumber,
    }
  },
}
</script>
<style lang="scss" scoped>
.outer {
  background-color: rgba(43, 44, 46);
  display: flex;

  .content-container {
    flex: 1;
    display: flex;

    .icon {
      height: 50px;
      width: 50px;
      color: rgba(202, 252, 137, 0.868);
    }

    .data-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;

      .title {
        font-size: 32px;
        text-align: left;
        letter-spacing: 2px;
      }

      .number {
        font-size: 48px;
      }

      .unit {
        font-size: 28px;
      }
    }
  }
}
</style>
