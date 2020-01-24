const axios = require('axios');

const ghostUrl = process.env.BLOG_URL;
const ghostApiKey = process.env.BLOG_API_KEY;
const cacheBustKey = process.env.CACHE_BUST_KEY;

const output = [];

function trimContent(content) {
  const trimmedContent = content
    .replace(/(<([^>]+)>)/ig, '').substring(0, 100)
    .substring(0, Math.min(content.length, content.lastIndexOf(' ')));

  return `${trimmedContent}...`;
}

/*!
 * GET handler
 *
 * @param  {IncomingMessage} request
 * @param  {ServerResponse}  response
 */
async function getHandler(request, response) {
  // Return cached content if exists
  if (output.length > 0) {
    response.json(output);

    return;
  }

  const { data: { posts } } = await axios.get(`${ghostUrl}/ghost/api/v2/content/posts`, {
    params: {
      limit: 5,
      key: ghostApiKey,
    },
  });

  posts.forEach((post) => {
    output.push({
      title: post.title,
      image: post.feature_image,
      excerpt: trimContent(post.html),
      custom_excerpt: post.custom_excerpt,
      url: post.url,
    });
  });

  response.json(output);
}

/*!
 * POST handler
 *
 * @param  {IncomingMessage} request
 * @param  {ServerResponse}  response
 */
async function postHandler(request, response) {
  // Content cache busting
  if (request.query.cacheBustKey === cacheBustKey) {
    // Clear cached content
    output.length = 0;

    response.status(204).send();
    return;
  }

  response.status(401).send();
}

/*!
 * @param  {IncomingMessage} request
 * @param  {ServerResponse}  response
 */
module.exports = async (request, response) => {
  switch (request.method) {
    case 'GET':
      return getHandler(request, response);

    case 'POST':
      return postHandler(request, response);

    default:
      return response.status(405).send();
  }
};
