import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    qiankun('micro-vue-1', {
      // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
    vue(),
  ],
  server: {
    port: 40002,
    // host: '0.0.0.0',
    origin: 'http://localhost:40002',
    // cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  base: process.env.NODE_ENV === 'development' ? '/' : './', // 确保资源路径正确
});
