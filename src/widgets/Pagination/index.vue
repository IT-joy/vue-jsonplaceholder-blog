<script setup lang="ts">
import { computed } from 'vue';
import type { PaginationProps } from './model/types';

const props = defineProps<PaginationProps>();

const emit = defineEmits<{
  (e: 'page-changed', page: number): void;
}>();

const pages = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1);
});
</script>

<template>
  <div class="pagination">
    <button
      v-for="page in pages"
      :key="page"
      @click="emit('page-changed', page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
}

button.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
}
</style>