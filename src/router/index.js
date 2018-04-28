import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index.vue'
import HomeRoot from '@/components/home/home.root.vue'
import VideoDetail from '@/components/video/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'HomeRoot',
          component: HomeRoot
        }
      ]
    },
    {
      path: '/video/detail/:id',
      name: 'videodetail',
      component: VideoDetail
    }
  ]
})
