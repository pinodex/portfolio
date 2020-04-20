import axios from 'axios';
import { blogPostsUrl } from '@/config';

export async function getPosts() {
  const response = await axios.get(blogPostsUrl);

  return response.data;
}
