<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  to: string | { name: string };
}>();
</script>

<template>
  <RouterLink :to="to" class="back-button">
    ← Back
  </RouterLink>
</template>

<style scoped>
.back-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #e0e0e0;
}
</style>