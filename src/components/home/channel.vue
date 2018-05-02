<template>
  <div class="home-wrap">
    <scroll-view
      ref="scroll"
      @pullingDown="pullingDown"
      :height="parseInt('-' + document.documentElement.style.fontSize)"
      pullDownRefresh>
      <transition name="fade">
        <div style="position: absolute" v-if="!initialized">init</div>
      </transition>
      <transition name="fade">
        <div v-if="initialized">
          <a class="tap-active">123213</a>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
          <img src="../../assets/default_img.png" @click="$router.push('/video/1')" class="tap-active"/>
        </div>
      </transition>
    </scroll-view>
  </div>
</template>

<script>
export default {
  name: 'channel',
  data() {
    return {
      channelData: null,
      document: document,
      // 是否被初始化过
      // 该值决定this组件是否执行过 initBusiness 函数
      initialized: false
    }
  },
  methods: {
    pullingDown() {
      setTimeout(() => {
        this.$refs.scroll.finishPullDown()
      }, 1000)
    },
    async findHomeData() {
      this.channelData = await this.$root.$api.v3plusIndexCollection()
    },
    /**
     * @method initBusiness 初始化业务
     * 一个子频道页需要初始化scroll以及获取数据
     * 只有在根swiper滚动到后才执行且生命周期内仅执行一次
     */
    async initBusiness() {
      // 注意顺序 当数据获取完毕且dom装载后才可初始化scroll
      await this.findHomeData()
      this.$nextTick(() => {
        this.$refs.scroll.initScroller()
        this.initialized = true
      })
    }
  },
  mounted() {},
  created() {
    // this.findHomeData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="less" scoped>
</style>
