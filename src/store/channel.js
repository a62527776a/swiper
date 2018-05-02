/**
 * 首页全部子频道列表
 * @const SETALLCHANNEL 设置全部的swiper频道分类数据
 * @const SETCURRENTSWIPERPAGE 设置当前swiper激活的频道
 */

export const SETALLCHANNEL = 'SETALLCHANNEL'
export const SETCURRENTSWIPERPAGE = 'SETCURRENTSWIPERPAGE'

export default {
  state: {
    data: [],
    currentIdx: 0
  },
  mutations: {
    // 设置子频道列表
    // 默认显示精选、推送 加上所有频道中搞笑到科普的频道
    [SETALLCHANNEL](state, ALLCHANNEL) {
      let allData = []
      allData.push({
        id: 0,
        name: '精选'
      })
      allData.push({
        id: 1,
        name: '推荐'
      })
      allData = allData.concat(ALLCHANNEL.splice(0, 11))
      state.data = allData
    },
    /**
     * @param { Number } currentIdx 当前主swiper滚动到的频道下标
     * 业务中根据此下标 初始化数据、scroll以及改变当前激活的频道分类标签栏
     */
    [SETCURRENTSWIPERPAGE](state, currentIdx) {
      state.currentIdx = currentIdx
    }
  },
  actions: {
    [SETALLCHANNEL]({ commit }, ALLCHANNEL) {
      commit('SETALLCHANNEL', ALLCHANNEL)
    },
    [SETCURRENTSWIPERPAGE]({ commit }, currentIdx) {
      commit('SETCURRENTSWIPERPAGE', currentIdx)
    }
  }
}
