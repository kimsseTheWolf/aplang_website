import { createRouter, createWebHistory } from 'vue-router';
import PresentationView from '@/views/PresentationView.vue';

const routes = [
  { path: '/', component: PresentationView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
