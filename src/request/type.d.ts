export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'patch'
  | 'PATCH'
  | 'put'
  | 'PUT'

export type TDataType = 'urlencoded' | 'json' | 'text' | 'formdata'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export type AxiosPromise<T = any> = Promise<AxiosResponse<T>>

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  <T = any>(url: string, config: AxiosRequestConfig): AxiosPromise<T>
}

// export interface AxiosInterceptorManager {
//   // use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number
// }

export interface ResovledFn<T> {
  (val: T): T | Promise<T>
}

export type TFHttpResult = (config: Omit<ReqConfig, 'url'>) => Promise<IResultModel> | AxiosPromise

export type IResultModel = {
  msg?: string
  data: any
  error?: ErrorMessage
  status: number
  code?: number
  message?: string
}

export interface ErrorMessage {
  msg: string
}

export interface GetParams {
  url: string
  query?: Record<string, unknown>
  urlQuery?: Record<string, unknown>
}
export interface PostParams {
  url: string
  body: Record<string, unknown>
  config?: Record<string, unknown>
}

export type ReqConfig = {
  url: string
  type?: Method
  query?: Record<string, unknown> | any
  urlQuery?: Record<string, unknown> | any
  body?: Record<string, unknown> | any
  dataType?: TDataType
  headers?: Record<string, unknown>
}
