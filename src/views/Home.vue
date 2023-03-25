<template>
  <div class="home">
    <loading v-if="loading">
      <div class="loading-content">Loading...</div>
    </loading>
    <container v-else>
      <div class="text">
        111
      </div>
    </container>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Home',
  setup () {
    const loading = ref(true)

    return {
      loading
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  width: 100%;
  background: rgba(29, 29, 29);
  color: #fff;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-content {
    font-size: 20px;
  }
}
</style>