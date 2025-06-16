import { createRouter, createWebHistory } from 'vue-router';
import PostsPage from '@/pages/blog/PostsPage.vue';
import PostDetailPage from '@/pages/blog/PostDetailPage.vue';

const routes = [
  { path: '/blog', component: PostsPage },
  { path: '/blog/:slug', component: PostDetailPage, props: true },
  { path: '/:pathMatch(.*)*', redirect: '/blog' }
];

export default createRouter({
  history: createWebHistory(),
  routes,
}); 