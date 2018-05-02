<template>
<div class="home-wrap">
  <scroll-view
    ref="scroll"
    @pullingDown="pullingDown"
    :height="parseInt('-' + document.documentElement.style.fontSize)"
    pullDownRefresh>
    <home-video-list
      v-for="(collData, idx) in homeData.categoryList"
      :allData="collData"
      :key="idx">
    </home-video-list>
  </scroll-view>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      homeData: [],
      document: document
    }
  },
  methods: {
    pullingDown() {
      setTimeout(() => {
        this.$refs.scroll.finishPullDown()
      }, 1000)
    },
    async findHomeData() {
      let homeData = await this.$root.$api.v3plusIndexCollection()
      this.homeData = homeData.data
      this.$refs.scroll.initScroller()
      this.$store.commit('SETSPLASHSCREEN', false)
    }
  },
  mounted() {
    this.findHomeData()
  },
  created() {
    console.log('created')
  },
  activated() {
    console.log(6666)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="less" scoped>
</style>
