<template>
  <div class="home">
    <loading v-if="loading">
      <div class="loading-content">Loading...</div>
    </loading>
    <container v-else
               :options="{height:2160,width:3840}">
      <div class="content-container">
        <header-view class="header" />
        <div class="separator"></div>
        <div class="main-content">
          <left-view class="left-view" />
          <right-view class="right-view" />
        </div>
      </div>

    </container>
  </div>
</template>
<script>
import { ref } from 'vue'
import HeaderView from '@/components/Header/index.vue'
import LeftView from '@/components/LeftView/index.vue'
import RightView from '@/components/RightView/index.vue'

export default {
  name: 'Home',
  components: {
    HeaderView,
    LeftView,
    RightView
  },
  setup () {
    const loading = ref(false)

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
  .content-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      height: 167px;
      background: purple;
    }

    .separator {
      height: 10px;
      background: #000;
    }
    .main-content {
      display: flex;
      flex: 1;
      // width: 100%;
      .left-view {
        flex: 0 0 860px;
        width: 860px;
        margin-right: 5px;
        height: 100%;
        background: green;
      }

      .right-view {
        flex: 1;
        height: 100%;
        background: yellow;
      }
    }
  }
}
</style>