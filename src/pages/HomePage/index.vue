<script setup lang="ts">
import { onMounted } from 'vue'
import { usePosts } from './model/usePosts'
import PostCard from '@/shared/ui/PostCard/index.vue'
import Loader from '@/shared/ui/Loader/index.vue'
import Pagination from '@/widgets/Pagination/index.vue'
import Search from '@/widgets/Search/index.vue'

const {
  state,
  paginatedPosts,
  getPosts,
  setSearchQuery,
  setPage
} = usePosts()

onMounted(() => {
  getPosts()
})
</script>

<template>
  <div class="home-page">
    <h1>Posts</h1>

    <Search @search="setSearchQuery" />

    <Loader v-if="state.loading" />

    <template v-else>
      <div v-if="state.error" class="error">
        {{ state.error }}
      </div>

      <template v-else>
        <div v-if="paginatedPosts.length" class="posts-list">
          <PostCard
            v-for="post in paginatedPosts"
            :key="post.id"
            :post="post"
          />
        </div>

        <div v-else class="no-results">
          No posts found
        </div>

        <Pagination
          v-if="state.totalPages > 1"
          :current-page="state.currentPage"
          :total-pages="state.totalPages"
          @page-change="setPage"
        />
      </template>
    </template>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.posts-list {
  display: grid;
  gap: 20px;
  margin: 20px 0;
}

.error,
.no-results {
  text-align: center;
  padding: 20px;
  color: #666;
}
</style>