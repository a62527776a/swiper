<template>
  <div class="channel-bar">
    <div class="channel-bar-cantainer">
      <div class="channel-bar-item"
           :class="{ 'channel-bar-item-active' : $store.state.channel.currentIdx === idx }"
           v-for="(item, idx) in channel"
           :key="item.id">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'channel-bar',
  props: {
    channel: {
      type: Array,
      default: [
        {
          id: 0,
          name: '精选'
        },
        {
          id: 1,
          name: '推荐'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.channel-bar {
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  .channel-bar-cantainer {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: none;
    .channel-bar-item {
      padding: 0.2rem 0.5rem;
    }
  }
}
.channel-bar::-webkit-scrollbar {
  background: transparent;
}
.channel-bar-item-active {
  font-weight: bold;
}
</style>
