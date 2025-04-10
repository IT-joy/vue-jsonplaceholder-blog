import { jsonPlaceholderClient } from '@/shared/api/client';
import { Post } from '@/pages/HomePage/model/types';

export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await jsonPlaceholderClient.get<Post>(`/posts/${id}`);
  return response.data;
};