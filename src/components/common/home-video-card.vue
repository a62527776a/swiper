<template>
  <div @click="$router.push('/video/1')" class="home-video-card tap-active">
    <img :src="item.cover" />
    <p>{{item.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'home-video-card',
  props: {
    item: {}
  }
}
</script>

<style lang="less" scoped>
.home-video-card {
  background: white;
  display: inline-block;
  width: 46%;
  margin-bottom: 0.3rem;
  border-radius: 0.1rem;
  overflow: hidden;
  box-shadow: 0px 1px 0px #ccc;
  img {
    display: block;
    width: 100%;
    height: 3rem;
  }
  p {
    padding: 0 0.2rem;
    margin: 0.3rem 0 0.4rem;
    height: 2.6em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
