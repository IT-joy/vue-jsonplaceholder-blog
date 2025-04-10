import { jsonPlaceholderClient } from '@/shared/api/client';
import { Post } from './types';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await jsonPlaceholderClient.get<Post[]>('/posts');
  return response.data;
};