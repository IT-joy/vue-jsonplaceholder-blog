import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage/index.vue';
import PostPage from '@/pages/PostPage/index.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostPage,
      props: true,
    },
  ],
});