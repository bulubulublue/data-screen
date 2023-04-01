<template>
  <div
    class="icon-container"
    :style="{ height: `${height}px`, width: `${width}px` }"
  >
    <icon v-if="dark" name="icon-qiehuanyuyan" @click="changeLang" />
    <icon v-else name="icon-changelang-gray" @click="changeLang" />
  </div>
</template>
<script>
import { setI18nLanguage } from '@/locales'
import { nextTick } from 'vue'

export default {
  props: {
    height: {
      type: Number,
      default: 80,
    },
    width: {
      type: Number,
      default: 80,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const changeLang = async () => {
      console.log('test')
      // store.commit('changeLang', command);
      await setI18nLanguage()
      // nextTick(() => {
      //   window.location.reload()
      // })
    }

    return {
      changeLang,
    }
  },
}
</script>
<style lang="scss" scoped>
.icon-container {
  cursor: pointer;
}
</style>
