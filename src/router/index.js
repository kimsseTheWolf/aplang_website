import { createRouter, createWebHashHistory } from 'vue-router';
import PresentationView from '@/views/PresentationView.vue';
import Slide1 from '@/components/templates/Slide1.vue';
import Slide2 from '@/components/templates/Slide2.vue';
import Slide3 from '@/components/templates/Slide3.vue';
import Slide4 from '@/components/templates/Slide4.vue';
import Slide5 from '@/components/templates/Slide5.vue';

const routes = [
  {
    path: '/',
    component: PresentationView,
    children: [
      { path: '1', component: Slide1 },
      { path: '2', component: Slide2 },
      { path: '3', component: Slide3 },
      { path: '4', component: Slide4 },
      { path: '5', component: Slide5 },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
