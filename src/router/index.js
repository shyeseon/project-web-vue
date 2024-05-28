import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Ch02ComponentRouting from './Ch02ComponentRouting';
import Ch03DataBinding from './Ch03DataBinding';
import Ch04EventHandlingWatch from './Ch04EventHandlingWatch'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //구조분해 해서 추가하기
  ...Ch02ComponentRouting,
  
  ...Ch03DataBinding,

  ...Ch04EventHandlingWatch

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
