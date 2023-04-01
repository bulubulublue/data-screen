<template>
  <div class="home">
    <div class="header">
      <change-lang class="change-lang" :height="40" :width="40" />
    </div>
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '@/components/Report/TopView/index.vue'
import MapView from '@/components/Report/MapView/index.vue'
import SalesView from '@/components/Report/SalesView/index.vue'
import BottomView from '@/components/Report/BottomView/index.vue'
import useDataStore from '@/stores/data'
import ChangeLang from '@/components/ChangeLang.vue'

export default {
  name: 'HomeView',
  components: {
    TopView,
    MapView,
    SalesView,
    BottomView,
    ChangeLang,
  },
  setup() {
    const store = useDataStore()
    store.querySalesData()
    store.queryWorldcloudData()

    // const state = reactive({
    //   data: null
    // })

    // const getData = () => state.data

    // onMounted(async () => {
    //   const data = await getScreenData()
    //   state.data = data

    // })

    // 因为如果直接传入数据，provide的数据还是null，所以传递一个方法
    // provide('get-screen-data', getData)
  },
}
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  padding: 20px;
  padding-top: 10px;
  background: #eee;
  box-sizing: border-box;

  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
