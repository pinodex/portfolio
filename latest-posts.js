const fs = require('fs')
const axios = require('axios')

const ghostUrl = process.env.BLOG_URL
const ghostApiKey = process.env.BLOG_API_KEY
const cacheBustKey = process.env.CACHE_BUST_KEY

const output = []

function trimContent (content) {
  content = content
    .replace(/(<([^>]+)>)/ig, '').substring(0, 100)
    .substring(0, Math.min(content.length, content.lastIndexOf(' ')))

  return `${content}...`
}

/*!
 * GET handler
 * 
 * @param  {IncomingMessage} request
 * @param  {ServerResponse}  response
 */
async function get (request, response) {
  // Return cached content if exists
  if (output.length > 0) {
    response.json(output)
    
    return
  }

  const { data: { posts } } = await axios.get(`${ghostUrl}/ghost/api/v2/content/posts`, {
    params: {
      limit: 5,
      key: ghostApiKey
    }
  })

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]

    output.push({
      title: post.title,
      image: post.feature_image,
      excerpt: trimContent(post.html),
      custom_excerpt: post.custom_excerpt,
      url: post.url
    })
  }

  response.json(output)
}

/*!
 * POST handler
 * 
 * @param  {IncomingMessage} request
 * @param  {ServerResponse}  response
 */
async function post (request, response) {
  // Content cache busting
  if (request.query.cacheBustKey == cacheBustKey) {
    // Clear cached content
    output.length = 0

    response.status(204).send()
    return
  }

  response.status(401).send()
}

/*!
 * @param  {IncomingMessage} request
 * @param  {ServerResponse}  response
 */
module.exports = async (request, response) => {
  switch (request.method) {
    case 'GET':
      return await get(request, response)

    case 'POST':
      return await post(request, response)
  }

  response.status(405).send()
}
