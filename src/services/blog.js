import axios from 'axios'
import { blog } from '@/config'

let request = axios.create({
  baseURL: blog.apiBase
})

request.interceptors.request.use(config => {
  config.params = config.params || {}

  config.params['client_id'] = blog.clientId
  config.params['client_secret'] = blog.clientSecret

  return config
}, error => Promise.reject(error))

export default {

  async getPosts (limit) {
    const params = { limit }
    const response = await request.get('/posts/', { params })

    return response.data.posts
  }

}
