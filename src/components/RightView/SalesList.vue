<template>
  <base-scroll-list
    :header="headers"
    :headerHeight="50"
    :headerStyle="headerStyle"
    :data="data"
    :page-size="10"
    headerIndex
    class="scroll-table"
  />
</template>
<script>
import { useI18n } from 'vue-i18n'
import { onMounted, inject, computed, ref } from 'vue'
export default {
  setup() {
    const { t } = useI18n({ useScope: 'global' })
    const screenData = inject('screen-data')
    const salesListData = computed(() => screenData.value.salesListData.value)
    const data = ref([])

    const prepareData = () => {
      data.value = salesListData.value.map((data) => Object.values(data))
    }

    const headerStyle = [{ width: '80px' }]

    const headers = [
      t('city'),
      t('volume'),
      t('shops'),
      t('riders'),
      t('newShops'),
      t('avgOrders'),
    ]

    prepareData()

    // onMounted(() => {
    //   prepareData()
    // })
    return {
      headers,
      data,
      headerStyle,
    }
  },
}
</script>
<style scoped>
.scroll-table {
  height: 100%;
  width: 1023px;
}
</style>
