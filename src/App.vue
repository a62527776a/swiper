<template>
  <div id="app">
    <app-bar />
      <transition :name="routerTransition">
        <keep-alive>
          <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'm-RR-TV',
  data() {
    return {
      routerTransition: 'slider-right'
    }
  },
  methods: {
    preventTouchMoveDefault: function() {
      window.addEventListener('touchmove', e => {
        e.preventDefault()
      })
    }
  },
  watch: {
    // 根据路由深度决定路由切换过渡动画
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.routerTransition =
        toDepth < fromDepth ? 'slider-right' : 'slider-left'
    }
  },
  created() {
    this.preventTouchMoveDefault()
  }
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
html {
  overflow: hidden;
}
</style>
