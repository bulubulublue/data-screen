export const fillZero = (num) => {
  return num < 10 ? `0${num}` : num
}
export const formatDate = (v) => {
  let m = v.getMonth() + 1
  m = fillZero(m)
  let d = v.getDate()
  d = fillZero(d)

  return `${v.getFullYear()}-${m}-${d}`
}

export const formatTime = (v) => {
  const h = fillZero(v.getHours())
  const m = fillZero(v.getMinutes())
  const s = fillZero(v.getSeconds())

  return `${h}:${m}:${s}`
}

export const toLocalDateTime = (date) =>
  `${formatDate(date)} ${formatTime(date)}`

export function formatNumber(v) {
  // if(isNaN(Number(v))) return
  // return Number(v).toLocaleString() // v需要是数字

  const reg = /\d{1,3}(?=(\d{3})+$)/g // 表示匹配1到3位数字，后面需要紧跟着>1个3个成一组的数字
  return `${v}`.replace(reg, '$&,') //$&表示匹配到的内容
}
