<script setup lang="ts">
import type { Post } from '@/pages/HomePage/model/types';
import { RouterLink } from 'vue-router';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="post-card">
    <h3>
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<style scoped>
.post-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
}

h3 {
  margin-top: 0;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>