import { ref } from 'vue';
import { fetchPostById } from './api';
import { PostState } from './types';

export const usePost = () => {
  const state = ref<PostState>({
    post: null,
    loading: false,
    error: null,
  });

  const getPost = async (id: number) => {
    try {
      state.value.loading = true;
      state.value.post = await fetchPostById(id);
    } catch (error) {
      state.value.error = error instanceof Error ? error.message : 'Failed to fetch post';
    } finally {
      state.value.loading = false;
    }
  };

  return {
    state,
    getPost,
  };
};