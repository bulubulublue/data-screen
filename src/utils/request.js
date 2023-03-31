import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

service.interceptors.response.use(res => {
  if(res.status === 200 && res.data){
    // 请求通过
    return res.data
  } else {
    return Promise.reject(new Error('请求失败'))
  }
}, err => {
  return Promise.reject(err)
})

export default service
