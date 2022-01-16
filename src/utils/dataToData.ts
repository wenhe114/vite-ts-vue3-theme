// 构造 URL 的查询字符串
export function querys(data: Record<string, unknown> | any): string {
  const urlParams = new URLSearchParams()
  Object.keys(data).forEach((key) => {
    urlParams.append(key, data[key])
  })
  return urlParams.toString()
}

/**
 * JSON对象转为Form提交数据
 * @param data Json数据
 * @param key key
 * @param type 1.数组或对象,-1.值
 */
export function JsonToFormParmas(data: any, key?: string, type?: number) {
  let params: any[] = []
  for (const key1 in data) {
    const val1 = data[key1]
    if (Array.isArray(val1) == true) {
      for (const key2 in val1) {
        const val2 = val1[key2]
        if (Array.isArray(val2) == true) {
          if (type == 1)
            params = params.concat(JsonToFormParmas(val2, `${key}[${key1}][${key2}]`, 1))
          else params = params.concat(JsonToFormParmas(val2, `${key}${key1}[${key2}]`, 1))
        } else if (typeof val2 === 'object') {
          if (type == 1)
            params = params.concat(JsonToFormParmas(val2, `${key}[${key1}][${key2}]`, 1))
          else params = params.concat(JsonToFormParmas(val2, `${key}${key1}[${key2}]`, 1))
        } else {
          if (type == 1) {
            params.push({ key: `${key}[${key1}][]`, val: val1[key2] })
          } else {
            params.push({ key: `${key}${key1}[]`, val: val1[key2] })
          }
        }
      }
    } else if (typeof val1 === 'object') {
      if (type == 1) params = params.concat(JsonToFormParmas(val1, `${key}[${key1}]`, 1))
      else params = params.concat(JsonToFormParmas(val1, `${key}${key1}`, 1))
    } else {
      if (type == 1) {
        params.push({ key: key + `[${key1}]`, val: val1 })
      } else {
        params.push({ key: key1, val: val1 })
      }
    }
  }
  return params
}

/**
 * @param formParmas
 * @description 数组转formdata格式数据
 */
export function formParmasToformdata(formParmas: any[]) {
  const body = new FormData()
  formParmas.map((item) => {
    body.append(item.key, item.val)
  })
  return body
}
