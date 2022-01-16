// import common from "./modules/common";
import { req } from 'src/request/index'
import { ReqConfig } from 'src/request/type'
import { isObject } from 'src/utils/checkData'
const files = import.meta.globEager('./modules/*.ts')
import { IApiCollection } from './index.d'
import { TFHttpResult } from 'src/request/type'

// @ts-ignore
const modules: IApiCollection = {}

for (const key in files) {
  console.log(files)

  if (Object.prototype.hasOwnProperty.call(files, key)) {
    console.log(key)
    console.log(files[key].default)
    modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = {}
    if (isObject(files[key].default)) {
      Object.keys(files[key].default).map((item: any) => {
        modules[key.replace(/(\.\/modules\/|\.ts)/g, '')][item] = (
          params: Omit<ReqConfig, 'url'>
        ) => {
          return req({ ...Object.assign(files[key].default[item], params) }) as any as TFHttpResult
        }
      })
    }
  }
}

console.log(modules)
export default {
  ...modules
  // common:{
  //     getDataListApi:(params:Omit<ReqConfig,"url">)=>req({...Object.assign(common.getDataListApi,params)})
  // }
}
