<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePost } from './model/usePost';
import Loader from '@/shared/ui/Loader/index.vue';
import BackButton from '@/shared/ui/BackButton/index.vue';

const route = useRoute();
const { state, getPost } = usePost();

const postId = computed(() => Number(route.params.id));

watch(postId, (newId) => {
  if (newId) {
    getPost(newId);
  }
}, { immediate: true });
</script>

<template>
  <!-- остальной шаблон без изменений -->
  <div class="post-page">
    <BackButton to="/" class="back-button" />

    <Loader v-if="state.loading" />

    <div v-else-if="state.error" class="error">
      {{ state.error }}
    </div>

    <div v-else-if="state.post" class="post-content">
      <h1>{{ state.post.title }}</h1>
      <p class="post-body">{{ state.post.body }}</p>

      <div class="post-meta">
        <span>Post ID: {{ state.post.id }}</span>
        <span>User ID: {{ state.post.userId }}</span>
      </div>
    </div>

    <div v-else class="not-found">
      Post not found
    </div>
  </div>
</template>

<style scoped>
/* стили без изменений */
.post-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
}

.post-content {
  margin-top: 40px;
}

.post-content h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.post-body {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 30px;
}

.post-meta {
  display: flex;
  gap: 15px;
  color: #666;
  font-size: 14px;
}

.error, .not-found {
  text-align: center;
  padding: 40px 0;
  color: #d32f2f;
  font-size: 18px;
}
</style>