<template>
  <div class="category">
    <div class="category-item"
         v-for="(item,index) in data"
         :key="item"
         @click="onClick(index)"
         @mouseenter="onMouseIn(index)"
         @mouseleave="onMouseLeave"
         @mousemove="onMouseIn(index)">
      <div class="selected"
           v-if="index === currentItem"
           :style="{backgroundColor:`${color[0]}`}">
        {{ item }}
      </div>
      <div class="selected"
           v-else-if="index === currentHover"
           :style="{backgroundColor:`${color[1]}`}">
        {{ item }}
      </div>
      <div v-else>{{ item }}</div>
    </div>

  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  props: {
    data: Array,
    color: {
      type: Array,
      default: () => ['rgba(140,160,173)', 'rgba(80,80,80)'] //1: 选中时颜色，2：hover颜色
    }
  },
  setup (props) {
    const currentItem = ref(0)
    let timer = null
    const currentHover = ref(-1)

    const updateCurrentItem = () => {
      timer && clearInterval(task)
      setInterval(() => {
        if (currentItem.value < props.data.length - 1) {
          currentItem.value += 1
        } else {
          currentItem.value = 0
        }
      }, 10000)
    }

    const onClick = (index) => {
      currentItem.value = index
    }

    const onMouseIn = (index) => {
      currentHover.value = index
    }

    const onMouseLeave = () => {
      currentHover.value = -1
    }

    onMounted(() => {
      updateCurrentItem()
    })

    onUnmounted(() => {
      timer && clearInterval(timer)
    })

    return {
      currentItem,
      onClick,
      onMouseIn,
      onMouseLeave,
      currentHover
    }
  }
}
</script>
<style lang="scss" scoped>
.category {
  display: flex;

  .category-item {
    flex: 1;
    background-color: rgba(53, 57, 65);
    font-size: 32px;
    color: rgb(144, 160, 174);
    cursor: pointer;

    .selected {
      color: #fff;
    }
  }
}
</style>