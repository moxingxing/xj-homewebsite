/*
 * @Description: 
 * @Autor: lin
 * @Date: 2025-04-22 13:43:01
 * @LastEditors: lin
 * @LastEditTime: 2025-04-24 14:34:43
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    watch: {
      usePolling: true, // 启用轮询模式
      interval: 1000    // 轮询间隔（毫秒）
    }
  }
})
