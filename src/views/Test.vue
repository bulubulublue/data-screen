<template>
  <div class="chart-container">aaa</div>
</template>
<script>
import SocketService from '@/utils/socket'
import { onMounted, onUnmounted } from 'vue'
export default {
  setup() {
    const getData = (data) => {
      console.log(data)
    }

    onMounted(() => {
      SocketService.Instance.registerCallback('getData', getData)
      // connect方法在main中调用，可能连接还没成功，组件里就调用了send方法，则会造成报错
      SocketService.Instance.send({
        functionName: 'getData',
      })
    })

    onUnmounted(() => {
      unregisterCallback('getData')
    })
    return {}
  },
}
</script>
<style scoped>
.chart-container {
  height: 1000px;
  width: 1000px;
}
</style>
