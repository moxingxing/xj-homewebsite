/*
 * @Description: 
 * @Autor: lin
 * @Date: 2025-04-22 09:29:34
 * @LastEditors: lin
 * @LastEditTime: 2025-04-24 15:33:44
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import ProductView from '../views/Product.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'product',
      component: ProductView,
    }
  ],
})

export default router
