<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>JSONPlaceholder Blog</h1>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.header nav a {
  margin-left: 15px;
  color: #42b983;
  text-decoration: none;
}

.header nav a:hover {
  text-decoration: underline;
}

.main {
  min-height: calc(100vh - 100px);
}
</style>