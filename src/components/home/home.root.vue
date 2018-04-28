<template>
  <div class="home-root-wrapper">
    <div class="home-root-content">
      <div style="width: 100%">
        <home />
      </div>
      <div style="width: 100%">
        <channel />
      </div>
      <div style="width: 100%">
        <channel />
      </div>
      <div style="width: 100%">
        <channel />
      </div>
      <div style="width: 100%">
        <channel />
      </div>
      <div style="width: 100%">
        <channel />
      </div>
      <div style="width: 100%">
        <channel />
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import home from './home'
import channel from './channel'

export default {
  name: 'home-root',
  components: {
    home,
    channel
  },
  methods: {
    initScroll() {
      let scroll = new BScroll('.home-root-wrapper', {
        scrollY: false,
        scrollX: true,
        bounce: false,
        snap: {
          threshold: .4
        }
      })
    }
  },
  mounted() {
    this.initScroll()
  }
}
</script>

<style lang="less" scoped>
.home-root-content {
  display: flex;
  width: 700%;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  align-content: center;
}
</style>
