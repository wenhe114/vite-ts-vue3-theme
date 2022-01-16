import { get, post, put, del } from './xhr'
import { TDataType, ReqConfig, Method } from './type.d'
import render from 'json-templater/string.js'
import { AxiosRequestConfig } from 'axios'
import { isObject } from 'src/utils/checkData'
import { querys, JsonToFormParmas, formParmasToformdata } from 'src/utils/dataToData'

export function req({
  url,
  type = 'get',
  query = {},
  urlQuery = {},
  body = {},
  dataType = 'urlencoded',
  headers
}: ReqConfig) {
  const { data, sendContentType } = getContentTypeAndData(dataType, body)

  if (isObject(urlQuery)) {
    url = render(url, urlQuery)
  }
  if (isObject(query) && Object.keys(query).length > 0) {
    url = url + '?' + querys(query)
  }
  const newHeaders = {
    'Content-Type': sendContentType
  }
  Object.assign(newHeaders, headers)
  const config: AxiosRequestConfig<Record<string, unknown>> = {
    headers: newHeaders
  }
  type = (type as string).toUpperCase() as any as Method
  if (type === 'GET') {
    return get(url, config)
  }
  if (type === 'POST') {
    return post(url, data as FormData | Record<string, unknown>, config)
  }
  if (type === 'PUT') {
    return put(url, data as FormData | Record<string, unknown>, config)
  }
  if (type === 'DELETE') {
    return del(url, config)
  }
}

function getContentTypeAndData(dataType: TDataType, body: string | Record<string, string>) {
  const currentMode = {
    urlencoded: {
      contentType: 'application/x-www-form-urlencoded;charset=utf-8',
      data: isObject(body) ? querys(body as Record<string, string>) : ''
    },
    json: {
      contentType: 'application/json;charset=utf-8',
      data: isObject(body) ? JSON.stringify(body) : ''
    },
    text: {
      contentType: 'text/plain;charset=utf-8',
      data: typeof body === 'string' ? body : ''
    },
    formdata: {
      contentType: 'application/x-www-form-urlencoded',
      data: body instanceof FormData ? body : formParmasToformdata(JsonToFormParmas(body, '', -1))
    }
  }[dataType]
  if (currentMode) {
    return {
      sendContentType: currentMode.contentType,
      data: currentMode.data
    }
  }
  throw new Error('dataType 不在预设范围中...，请手动设置 headers 和 body')
}
