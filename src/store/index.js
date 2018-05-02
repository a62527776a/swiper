import Vue from 'vue'
import Vuex from 'vuex'

import splashScreen from './splash.screen.js'
import networkLoadState from './network.load.state.js'
import channel from './channel.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    channel,
    splashScreen,
    networkLoadState
  }
})
