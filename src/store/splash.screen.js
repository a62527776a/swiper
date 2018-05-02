/**
 * 设置启动屏幕
 * 仅当启动完毕后关闭启动屏幕
 */

export const SETSPLASHSCREEN = 'SETSPLASHSCREEN'

export default {
  state: {
    type: true
  },
  mutations: {
    /**
     * @param { Boolean } isSplash 是否启动完毕
     */
    [SETSPLASHSCREEN](state, isSplash) {
      setTimeout(() => {
        state.type = isSplash
      }, 500)
    }
  }
}
