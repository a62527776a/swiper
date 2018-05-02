import Vue from 'vue'
import Router from 'vue-router'
import HomeRoot from '@/components/home/home.root.vue'
import VideoDetail from '@/components/video/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeRoot
    },
    {
      path: '/video/:id',
      name: 'videodetail',
      component: VideoDetail
    }
  ]
})
