<template>
  <el-row class="outer-wrapper"
          :gutter="20">
    <el-col :span="12">
      <keyword-search />
    </el-col>
    <el-col :span="12">
      <sales-category-rank />
    </el-col>
  </el-row>
</template>
<script>
import KeywordSearch from './keywordSearch.vue'
import SalesCategoryRank from './salesCategoryRank.vue'
export default {
  name: 'BottomView',
  components: {
    KeywordSearch,
    SalesCategoryRank
  }
}
</script>
<style scoped>
.outer-wrapper {
  margin-top: 20px;
}
</style>
