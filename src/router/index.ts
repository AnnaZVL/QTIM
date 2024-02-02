import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Pages/HomePages.vue';
import ArticlePage from '@/components/Pages/ArticlePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticlePage
    }, 
  ]
})

export default router
