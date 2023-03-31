import request from '@/utils/request'


export function getWordcloudData () {
  return request({
    url: '/mock/api/wordcloud',
    method: 'get',
  })
}

export function getScreenData () {
  return request({
    url: '/mock/api/chart',
    method: 'get',
  })
}

// 地图数据
export function getScatterData () {
  return request({
    url: '/mock/api/scatter',
    method: 'get',
  })
}
