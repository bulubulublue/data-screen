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
import { onMounted, inject, computed, ref } from 'vue'
export default {
  setup() {
    const screenData = inject('screen-data')
    const salesListData = computed(() => screenData.value.salesListData.value)
    const data = ref([])

    const prepareData = () => {
      data.value = salesListData.value.map((data) => Object.values(data))
    }

    const headerStyle = [{ width: '80px' }]

    const headers = [
      '城市',
      '订单量',
      '店铺数',
      '接单骑手人数',
      '新店铺数量',
      '人均订单量',
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
