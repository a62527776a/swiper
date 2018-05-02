// import jsonCore from './jsoncore'
import { jsonCore } from './ajaxjsoncore'

export default {
  // 短视频
  // 主页数据
  v3plusIndexCollection: async () => jsonCore('/v3plus/index/collection'),
  // 首页短视频子频道
  v3plusCategoryAll: async () => jsonCore('/v3plus/user/getCategory')
}
