import { ref, computed } from 'vue';
import { fetchPosts } from './api';
import type { Post, PostsState } from './types';
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

  const getPosts = async (): Promise<void> => {
    try {
      state.value.loading = true;
      state.value.posts = await fetchPosts();
      filterPosts();
    } catch (error) {
      state.value.error = error instanceof Error ? error.message : 'Failed to fetch posts';
    } finally {
      state.value.loading = false;
    }
  };

  // Фильтрация постов
  const filterPosts = (): void => {
    const { posts, searchQuery } = state.value;

    state.value.filteredPosts = searchQuery
      ? posts.filter(post =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.body.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [...posts];

    updatePagination();
  };

  const updatePagination = (): void => {
    state.value.totalPages = Math.ceil(state.value.filteredPosts.length / POSTS_PER_PAGE);
    if (state.value.currentPage > state.value.totalPages) {
      state.value.currentPage = Math.max(1, state.value.totalPages);
    }
  };

  const setPage = (page: number): void => {
    if (page >= 1 && page <= state.value.totalPages) {
      state.value.currentPage = page;
    }
  };

  const setSearchQuery = (query: string): void => {
    state.value.searchQuery = query;
    state.value.currentPage = 1;
    filterPosts();
  };

  const paginatedPosts = computed(() => {
    const start = (state.value.currentPage - 1) * POSTS_PER_PAGE;
    return state.value.filteredPosts.slice(start, start + POSTS_PER_PAGE);
  });

  return {
    state: computed(() => state.value),
    paginatedPosts,
    getPosts,
    setSearchQuery,
    setPage,
  };
};