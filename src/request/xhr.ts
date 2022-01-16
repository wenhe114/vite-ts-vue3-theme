import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

import { storage } from 'src/utils/storage'

import { ResultModel } from './type.d'
/**
 * http请求工具类
 *
 * 请求拦截器 负责将客户端标识token值存储并放置在头部提交给服务端
 *
 * 响应拦截器 负责全局处理业务请求的网络或者业务错误
 */

// 创建axios的实例
const service = axios.create({
  baseURL: '/api/',
  timeout: 10000 // 超时时间
})

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (storage.lStorage.get('token')) {
      ;(config as any).headers['X-Access-Token'] = storage.lStorage.get('token')
    }
    return config
  },
  (err: any) => {
    Promise.reject(err)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: any) => {
    let errMsg = ''
    if (err && err.response.status) {
      switch (err.response.status) {
        case 401:
          errMsg = '登录状态失效，请重新登录'
          storage.lStorage.del('token')

          console.log('跳转登录页')

          break
        case 403:
          errMsg = '拒绝访问'
          break

        case 408:
          errMsg = '请求超时'
          break

        case 500:
          errMsg = '服务器内部错误'
          break

        case 501:
          errMsg = '服务未实现'
          break

        case 502:
          errMsg = '网关错误'
          break

        case 503:
          errMsg = '服务不可用'
          break

        case 504:
          errMsg = '网关超时'
          break

        case 505:
          errMsg = 'HTTP版本不受支持'
          break

        default:
          errMsg = err.response.data.msg
          break
      }
    } else {
      errMsg = err
    }
    console.log(errMsg)
    // Message.error(errMsg);
    return Promise.reject(errMsg)
  }
)

function get(
  url: string,
  config?: AxiosRequestConfig<Record<string, unknown>>
): Promise<ResultModel> {
  console.log(url)

  return service.get(url, config).then(processResponse)
}

function post(
  url: string,
  body: Record<string, unknown> | FormData,
  config: AxiosRequestConfig<Record<string, unknown>>
) {
  return service.post(url, body, config)
}

function processResponse(res: AxiosResponse) {
  if (!res) {
    throw new Error('Invalid Request.')
  }
  const result: ResultModel = res.data
  if (result.status !== 1) {
    return {
      data: '失败了',
      status: 1
    }
  }
  return result
}
export { get, post }
