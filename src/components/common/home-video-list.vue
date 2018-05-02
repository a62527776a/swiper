<template>
  <div>
    <div class="home-video-title">
      <a>{{allData.categoryName}}</a>
      <span>换一换</span>
    </div>
    <div class="home-video-list">
      <home-video-card
        v-for="(item, idx) in displayVideo"
        :key="idx"
        :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-video-list',
  props: {
    allData: {
      type: Object,
      default: () => {
        return {
          categoryName: '',
          videoList: [
            {
              title: '',
              cover: '@/assets/default_img.png'
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      displayVideo: []
    }
  },
  mounted() {},
  created() {
    this.displayVideo = this.allData.videoList.splice(0, 4)
  }
}
</script>

<style lang="less" scoped>
.home-video-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 0.2rem;
}
.home-video-title {
  padding: 0 0.4rem;
  margin: 0.4rem 0 0.4rem;
  display: flex;
  justify-content: space-between;
  span {
    color: #666;
  }
}
</style>
