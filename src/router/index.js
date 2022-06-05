/**
 * @category Routes
 * @module Index
 * @desc ## This is main routes holder
 *
 * |    URL   |                                    desc                                    |
 * |----------|:--------------------------------------------------------------------------:|
 */

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

export default router;
