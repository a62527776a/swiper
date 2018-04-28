// import jsonCore from './jsoncore'
import { jsonCore } from './ajaxjsoncore'

export default {
  // 勋章相关
  v3plusIndexCollection: async () => jsonCore('/v3plus/index/collection')
}
