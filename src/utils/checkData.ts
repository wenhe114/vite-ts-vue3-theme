// 检查是否为对象
export function isObject(value: any) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

// 检测是否是数组
export function isArray(value: any) {
  return Object.prototype.toString.call(value) === '[object Array]'
}
