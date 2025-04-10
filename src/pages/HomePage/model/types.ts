export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  filteredPosts: Post[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  searchQuery: string;
  totalPages: number;
}