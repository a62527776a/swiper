<template>
  <div class="app-bar">
    <img src="http://img.rr.tv/fe/20180428/o_1524899087234.png" class="logo" />
    <div class="downLoad tap-active">下载APP</div>
  </div>
</template>

<script>
export default {
  name: 'app-bar'
}
</script>

<style lang="less" scoped>
.app-bar {
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 0.8rem;
    width: 0.8rem;
  }
  .downLoad {
    height: 0.5rem;
    color: white;
    background: @PrimaryColor;
    display: inline-block;
    padding: 0 0.3rem;
    display: flex;
    font-size: 0.25rem;
    justify-content: center;
    border-radius: 0.1rem;
    align-items: center;
  }
}
</style>
