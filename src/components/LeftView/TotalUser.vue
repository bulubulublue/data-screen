<template>
  <div class="outer">
    <div class="title">{{ t('totalUsers') }}</div>
    <div class="total-count">
      <count-to
        :startVal="preUser"
        :endVal="todayUser"
        :duration="1000"
      ></count-to>
    </div>
    <div class="comparison">
      <span class="day-growth"
        >{{ t('dayIncreaseRate') }}:
        <count-to
          :startVal="prevGrowthLastDay"
          :endVal="growthLastDay"
          :duration="1000"
          :decimals="2"
          suffix="%"
        >
        </count-to>
      </span>
      <span class="month-growth"
        >{{ t('monthlyIncreaseRate') }}:
        <count-to
          :startVal="prevGrowthLastMonth"
          :endVal="growthLastMonth"
          :duration="1000"
          :decimals="2"
          suffix="%"
        >
        </count-to>
      </span>
    </div>
    <div class="progress">
      <div class="progress-inner-wrapper">
        <div
          class="progress-inner"
          :style="{ width: `${growthLastDay}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  props: {
    todayUser: Number,
    growthLastDay: Number,
    growthLastMonth: Number,
  },
  setup(props) {
    const { t } = useI18n({ useScope: 'global' })
    const preUser = ref(0)
    const prevGrowthLastDay = ref(0)
    const prevGrowthLastMonth = ref(0)

    watch(
      () => props.todayUser,
      (_, prev) => {
        preUser.value = prev
      }
    )

    watch(
      () => props.growthLastDay,
      (_, prev) => {
        console.log(prev)
        prevGrowthLastDay.value = prev
      }
    )

    watch(
      () => props.growthLastMonth,
      (_, prev) => {
        prevGrowthLastMonth.value = prev
      }
    )

    return {
      t,
      preUser,
      prevGrowthLastDay,
      prevGrowthLastMonth,
    }
  },
}
</script>
<style lang="scss" scoped>
.outer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 3px;
  background: rgb(66, 68, 70);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  .title {
    font-size: 32px;
  }

  .total-count {
    font-size: 68px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .comparison {
    font-size: 32px;

    .day-growth {
      color: rgba(148, 224, 34, 0.783);
      margin-right: 20px;
    }

    .month-growth {
      color: rgba(0, 128, 0, 0.836);
    }
  }

  .progress {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    margin-top: 10px;

    .progress-inner-wrapper {
      height: 100%;
      padding: 2px;
      box-sizing: border-box;
      overflow: hidden;

      .progress-inner {
        height: 100%;
        background: rgba(150, 150, 150);
        transition: width 1s linear;
      }
    }
  }
}
</style>
