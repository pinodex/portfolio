import axios from 'axios'

let instance = axios.create({
  baseURL: window.__GHOST_BLOG__.baseUrl
})

instance.interceptors.request.use(config => {
  config.params = {}

  config.params['client_id'] = window.__GHOST_BLOG__.clientId
  config.params['client_secret'] = window.__GHOST_BLOG__.clientSecret

  return config
}, error => Promise.reject(error))


export default instance
