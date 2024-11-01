export default [
  {
    path: '/',
    // redirect: '/Dashboard',
    name: 'Home',
    component: () => import('../layout/Home.vue'),
  },
  {
    path: '/sub-login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/sub-news',
    component: () => import('../views/New.vue'),
  },
];
