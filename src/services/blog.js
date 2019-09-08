import axios from 'axios'

export default {

  async getPosts () {
    const response = await axios.get('/latest-posts.json')

    return response.data
  }

}
