<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');

const emit = defineEmits<{
  (e: 'search', query: string): void;
}>();

const handleSearch = () => {
  emit('search', searchQuery.value.trim());
};
</script>

<template>
  <div class="search">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search posts..."
      @input="handleSearch"
    />
  </div>
</template>

<style scoped>
.search {
  margin: 20px 0;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>