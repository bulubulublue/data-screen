<template>
  <div class="outer">
    <div class="left">
      <div class="item-container" v-for="item in data" :key="item.label">
        <div class="item-icon">
          <icon :name="item.icon" />
        </div>
        <div class="content">
          <div class="title">{{ item.label }}</div>
          <div class="value">{{ formatNumber(item.value) }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="item-container" v-for="item in dataRight" :key="item.label">
        <div class="item-icon">
          <icon :name="item.icon" />
        </div>
        <div class="title">{{ item.label }}</div>
        <div class="value">{{ formatNumber(item.value) }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject, computed } from 'vue'
import { formatNumber } from '@/utils/index'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { t } = useI18n({ useScope: 'global' })
    const screenData = inject('screen-data')
    const headerData = computed(() => screenData.value.headerData.value)
    const data = computed(() => [
      {
        label: t('todaySales'),
        value: headerData.value.todayOrders,
        icon: 'icon-money',
      },
      {
        label: t('todayOrders'),
        value: headerData.value.todayOrders,
        icon: 'icon-orders',
      },
      {
        label: t('todayUsers'),
        value: headerData.value.todayUsers,
        icon: 'icon-team',
      },
      {
        label: t('todayNewUsers'),
        value: headerData.value.todayUsersIncrease,
        icon: 'icon-mine',
      },
    ])

    const dataRight = computed(() => [
      {
        label: t('transitRate'),
        value: headerData.value.transitionRate,
        icon: 'icon-Delete',
      },
      {
        label: t('returnRate'),
        value: headerData.value.returnRate,
        icon: 'icon-Ok',
      },
    ])

    return {
      t,
      data,
      dataRight,
      formatNumber,
    }
  },
}
</script>
<style lang="scss" scoped>
.outer {
  background: rgb(66, 68, 70);
  display: flex;

  .left {
    width: 85%;
    display: flex;

    .item-container {
      display: flex;
      flex: 1;

      .item-icon {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        padding: 30px;
        box-sizing: border-box;
        background-color: rgb(96, 150, 9);
        margin-right: 20px;
      }
      .content {
        text-align: left;

        .title {
          font-size: 32px;
        }

        .value {
          font-size: 68px;
          letter-spacing: 2px;
        }
      }
    }
  }

  .right {
    width: 15%;
    display: flex;

    .item-container {
      text-align: left;
      flex: 1;
      .item-icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        padding: 10px;
        box-sizing: border-box;
        background-color: rgb(129, 191, 29);
      }

      .title {
        font-size: 28px;
      }

      .value {
        font-size: 32px;
      }
    }
  }
}
</style>
