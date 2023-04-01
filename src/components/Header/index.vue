<template>
  <div class="view-container">
    <div class="left-view">
      <div class="logo-container">
        <logo></logo>
      </div>
      <div class="title-container">
        <div class="title-cn">{{ t('dashboardTitle') }}</div>
      </div>
    </div>
    <div class="right-view">
      <change-lang class="change-lang" dark />
    </div>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
import ChangeLang from '@/components/ChangeLang.vue'

export default {
  components: {
    ChangeLang,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' })

    return { t }
  },
}
</script>
<style scoped lang="scss">
.view-container {
  background-color: rgb(31, 26, 32);
  display: flex;
  align-items: center;
  padding: 0 64px;
  justify-content: space-between;

  .left-view {
    display: flex;
    .logo-container {
      height: 120px;
      width: 120px;
      margin-right: 20px;
    }

    .title-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      .title-cn {
        font-weight: bold;
        font-size: 60px;
        letter-spacing: 5px;
      }
    }
  }
}
</style>
