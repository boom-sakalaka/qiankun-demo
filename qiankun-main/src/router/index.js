import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // 重定向
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/micro-vue/news',
    name: 'news',
    component: () => import('../views/news.vue'),
  },
  {
    path: '/micro-vue/newsDetail',
    name: 'newsDetail',
    component: () => import('../views/newsDetail.vue'),
  },
  {
    path: '/micro-vue/sub-login',
    name: 'newsDetail',
    component: () => import('../views/commont.vue'),
  },
  {
    path: '/micro-vue/sub-news',
    name: 'newsDetail',
    component: () => import('../views/commont.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
