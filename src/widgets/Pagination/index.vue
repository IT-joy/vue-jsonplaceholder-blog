<script setup lang="ts">
import { computed } from 'vue'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const props = defineProps<PaginationProps>()

const emit = defineEmits<{
  (e: 'page-change', page: number): void
}>()

const pages = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1)
})
</script>

<template>
  <div class="pagination" v-if="props.totalPages > 1">
    <button
      v-for="page in pages"
      :key="page"
      @click="emit('page-change', page)"
      :class="{ active: page === props.currentPage }"
      :disabled="page === props.currentPage"
    >
      {{ page }}
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 24px 0;
  flex-wrap: wrap;
}

button {
  min-width: 32px;
  padding: 6px 8px;
  border: 1px solid #e1e3e6;
  border-radius: 4px;
  background: #ffffff;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover:not(.active) {
  border-color: #42b983;
  color: #42b983;
}

button.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
  cursor: default;
}

button:disabled {
  opacity: 1;
}
</style>