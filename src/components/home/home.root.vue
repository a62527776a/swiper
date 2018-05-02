<template>
  <div>
    <channel-bar :channel="$store.state.channel.data" />
    <div class="home-root-wrapper">
      <div class="home-root-content">
        <div v-for="(item, idx) in $store.state.channel.data" :key="item.id">
          <template v-if="item.id === 0">
            <home />
          </template>
          <template>
            <channel :ref="'channel-' + idx" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import home from './home'
import channel from './channel'
import { setTimeout } from 'timers'

export default {
  name: 'home-root',
  data() {
    return {
      rootSwiper: null
    }
  },
  components: {
    home,
    channel
  },
  watch: {
    '$store.state.channel.currentIdx': function(val) {
      // home页不用初始化
      if (val === 0) return
      let vm = this.$refs['channel-' + val][0]
      // 注意只初始化一次
      if (vm.initialized) return
      vm.initBusiness()
    }
  },
  methods: {
    initSwiper() {
      // 作为swiper组件初始化主界面
      this.rootSwiper = new BScroll('.home-root-wrapper', {
        scrollY: false,
        scrollX: true,
        bounce: false,
        probeType: 2,
        momentum: false,
        snap: {
          threshold: 0.2,
          stepX: 0
        },
        eventPassthrough: 'vertical'
      })
    },
    // 获取所有子频道分类数据
    async findCategoryAll() {
      let channel = await this.$root.$api.v3plusCategoryAll()
      this.$store.dispatch('SETALLCHANNEL', channel.data.CategoryViewList)
      this.$nextTick(() => {
        this.handleEl()
      })
    },
    // 动态控制el宽度 包括scroll宽度与子频道el宽度
    handleEl() {
      let el = document.querySelectorAll('.home-wrap')
      let clientWidth =
        document.documentElement.clientWidth || document.body.clientWidth
      let len = el.length
      for (let i = 0; i < len; i++) {
        el[i].style.width = clientWidth + 'px'
      }
      document.querySelector('.home-root-content').style.width = len + '00%'
      // 宽度设置后初始化scroll
      this.$nextTick(() => {
        this.initSwiper()
        this.listenSwiperIdx()
      })
    },
    // 监听swiper滚动位置 swiperidx作为当前滚动的地方
    // 由于better-scroller没有swiperIdxchange的事件
    // 监听滚动结束的事件获取swiperIdx
    // 在点击分类标签页时也会获取并改变swiperIdx
    listenSwiperIdx() {
      this.rootSwiper.on('scrollEnd', () => {
        /**
         * @method getCurrentPage better-scroller原生方法
         * @return { Object }
         * 返回值中有必要使用的参数为pageX 表示横轴方向的页数
         */
        let currentIdx = this.rootSwiper.getCurrentPage().pageX
        this.$store.dispatch('SETCURRENTSWIPERPAGE', currentIdx)
      })
    }
  },
  mounted() {
    this.findCategoryAll()
  },
  activated() {}
}
</script>

<style lang="less" scoped>
.home-root-content {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  align-content: center;
}
</style>
