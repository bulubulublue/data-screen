<template>
  <div class="view-container">
    <div class="top">top1</div>
    <div class="subtop">top2</div>
    <div class="main-content">
      <div class="main-left">
        <div class="main-item main-left-1">left1</div>
        <div class="main-item main-left-2">left2</div>
        <div class="main-item main-left-3">left3</div>
        <div class="main-item main-left-4">left3</div>
      </div>
      <div class="main-right">
        <div class="main-item main-right-1">right1</div>
        <div class="main-item main-right-2">right2</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.view-container {
  display: flex;
  flex-direction: column;
  .top {
    height: 206px;
    background-color: antiquewhite;
  }

  .subtop {
    height: 48px;
    background-color: beige;
  }

  .main-content {
    flex: 1;
    display: flex;

    .main-item {
      width: 100%;
    }

    .main-left {
      width: 1917px;
      display: flex;
      flex: 0 0 1917px;
      flex-direction: column;
      justify-content: space-between;
      background-color: aquamarine;
      .main-left-1 {
        height: 999px;
      }

      .main-left-2 {
        height: 80px;
      }

      .main-left-3 {
        height: 350px;
      }

      .main-left-4 {
        height: 220px;
      }
    }

    .main-right {
      flex: 1;
      margin-left: 10px;
      background-color: cornsilk;

      .main-right-1 {
        height: 999px;
      }

      .main-right-2 {
        height: 650px;
      }
    }
  }
}
</style>