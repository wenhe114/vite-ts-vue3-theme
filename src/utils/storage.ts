function isArray(value: any) {
  return Array.isArray ? Array.isArray(value) : window.toString.call(value) === '[object Array]'
}
function isObject(value: any) {
  return window.toString.call(value) === '[object Object]'
}
function isFunc(value: any) {
  return window.toString.call(value) === '[object Function]' || typeof value === 'function'
}

/**
 * @description 操作localStorage、sessionStorage
 */
function Storage(type: 'localStorage' | 'sessionStorage') {
  const storageType: any = window[type]
  return {
    get(key: any) {
      const saveData = storageType.getItem(key)
      try {
        return JSON.parse(saveData)
      } catch (error) {
        return saveData || null
      }
    },
    set(key: any, data: any) {
      // 检查保存数据是否为 array 或 object 将其转化为json字符串进行保存
      if (isArray(data) || isObject(data)) {
        // 去掉 function 情况
        !isFunc(data) && storageType.setItem(key, JSON.stringify(data))
      } else {
        storageType.setItem(key, data)
      }
    },
    del(key: any) {
      storageType.removeItem(key)
    },
    clean() {
      storageType.clear()
    }
  }
}

export const storage = {
  sStorage: Storage('sessionStorage'),
  lStorage: Storage('localStorage')
}

export default {
  sStorage: Storage('sessionStorage'),
  lStorage: Storage('localStorage')
}
