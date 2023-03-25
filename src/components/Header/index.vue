<template>
  <div class="view-container">
    <div class="logo-container">
      <logo></logo>
    </div>
    <div class="title-container">
      <div class="title-cn">外卖业务数据大盘</div>
      <div class="title-en">Delivery Overview</div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.view-container {
  background-color: rgb(31, 26, 32);
  display: flex;
  align-items: center;
  padding: 0 64px;

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

    .title-en {
      font-size: 35px;
      letter-spacing: 3px;
    }
  }
}
</style>