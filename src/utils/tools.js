export function formatNumber(v){
  // if(isNaN(Number(v))) return
  // return Number(v).toLocaleString() // v需要是数字

  const reg = /\d{1,3}(?=(\d{3})+$)/g // 表示匹配1到3位数字，后面需要紧跟着>1个3个成一组的数字
  return `${v}`.replace(reg,'$&,') //$&表示匹配到的内容
   
}

export function wrapperOriginalNumber(o,k){
  return o && o[k] ? o[k] :''
}

export function wrapperNumber(o,k){
  const res =  o && o[k] ? o[k] :''
  return formatNumber(res)
}

export function wrapperArray(o,k){
  return o && o[k] ? o[k] :[]
}

export function wrapperObject(o,k){
  if(o){
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  }
  return null
}