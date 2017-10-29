import axios from 'axios'

let instance = axios.create({
  baseURL: window.__BLOG__.baseUrl
})

instance.interceptors.request.use(config => {
  config.params = config.params || {}

  config.params['client_id'] = window.__BLOG__.clientId
  config.params['client_secret'] = window.__BLOG__.clientSecret

  return config
}, error => Promise.reject(error))


export default instance
