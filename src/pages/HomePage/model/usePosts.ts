import { ref, computed } from 'vue';
import { fetchPosts } from './api';
import { Post, PostsState } from './types';
import { POSTS_PER_PAGE } from '@/shared/utils/constants';

export const usePosts = () => {
  const state = ref<PostsState>({
    posts: [],
    filteredPosts: [],
    loading: false,
    error: null,
    currentPage: 1,
    searchQuery: '',
    totalPages: 0,
  });

  const getPosts = async () => {
    try {
      state.value.loading = true;
      state.value.posts = await fetchPosts();
      state.value.filteredPosts = state.value.posts;
      state.value.totalPages = Math.ceil(state.value.posts.length / POSTS_PER_PAGE);
    } catch (error) {
      state.value.error = error instanceof Error ? error.message : 'Failed to fetch posts';
    } finally {
      state.value.loading = false;
    }
  };

  const setSearchQuery = (query: string) => {
    state.value.searchQuery = query;
    state.value.currentPage = 1;
    filterPosts();
  };

  const filterPosts = () => {
    if (!state.value.searchQuery) {
      state.value.filteredPosts = state.value.posts;
    } else {
      const query = state.value.searchQuery.toLowerCase();
      state.value.filteredPosts = state.value.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.body.toLowerCase().includes(query)
      );
    }
    state.value.totalPages = Math.ceil(state.value.filteredPosts.length / POSTS_PER_PAGE);
  };

  const setPage = (page: number) => {
    state.value.currentPage = page;
  };

  const paginatedPosts = computed(() => {
    const start = (state.value.currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return state.value.filteredPosts.slice(start, end);
  });

  return {
    state,
    getPosts,
    setSearchQuery,
    setPage,
    paginatedPosts,
  };
};