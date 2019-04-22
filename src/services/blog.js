import axios from 'axios'
import { blog } from '@/config'

let instance = axios.create({
  baseURL: blog.apiBase
})

instance.interceptors.request.use(config => {
  config.params = config.params || {}

  config.params['client_id'] = blog.clientId
  config.params['client_secret'] = blog.clientSecret

  return config
}, error => Promise.reject(error))


export default instance
