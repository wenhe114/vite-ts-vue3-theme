import { TFHttpResult } from 'src/request/type'

export default {
  getDataListApi: { url: '/contents/list', type: 'get' },
  addContentApi: { url: '/content/add', type: 'post' }
}

export interface ICommon {
  getDataListApi: TFHttpResult
  addContentApi: TFHttpResult
}
