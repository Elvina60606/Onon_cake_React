import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Onon_cake_React/' : '/' ,
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true //暫時關閉bootstrap sass 尚未更新之報錯//
      }
    }
  },
});

