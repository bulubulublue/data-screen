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
