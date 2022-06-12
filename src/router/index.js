/**
 * @category Routes
 * @module Index
 * @desc ## This is main routes holder
 *
 * |    URL   |                                    desc                                    |
 * |----------|:--------------------------------------------------------------------------:|
 * | /login   |  login page                                                                |
 * | /404     |  404 Error page                                                            |
 */

import { createRouter, createWebHistory } from 'vue-router';

const Login = () => import('@/views/LoginPage.vue');
const Error = () => import('@/views/ErrorPage.vue');
const DashboardPage = () => import('@/views/DashboardPage.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
    },
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardPage,
    },
  ],
});

export default router;
