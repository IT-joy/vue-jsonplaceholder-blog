import { Post } from '@/pages/HomePage/model/types';

export interface PostState {
  post: Post | null;
  loading: boolean;
  error: string | null;
}