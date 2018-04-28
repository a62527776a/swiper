<template>
  <div class="home-wrap">
    <scroll-view
      ref="scroll"
      @pullingDown="pullingDown"
      :height="parseInt('-' + document.documentElement.style.fontSize)"
      pullDownRefresh>
      <a class="tap-active">123213</a>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
      <img src="../../assets/logo.png" @click="$router.push('/video/detail/1')" class="tap-active"/>
    </scroll-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      qweqeq: '213213',
      document: document
    }
  },
  methods: {
    pullingDown() {
      setTimeout(() => {
        this.$refs.scroll.finishPullDown()
      }, 1000)
    },
    async findHomeData () {
      let homeData = await this.$root.$api.v3plusIndexCollection()
    }
  },
  mounted() {},
  created() {
    this.findHomeData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="less" scoped>
.home-wrap {
  width: 100%;
}
</style>
