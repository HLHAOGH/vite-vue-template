const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  publicDir: 'public',
  resolve: {
    alias: {
    /*
      路径别名
      若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径 
    */
    '@': path.resolve(__dirname, './src')
    },
  },
  // 引入插件
  plugins: [vue()],
  // 引入依赖
  optimizeDeps: {
    include: [
      'axios'
    ]
  },
  // 开发服务配置
  server: {
    port: 3000,
    host: 'localhost',
    open: false,
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567/foo',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      }
    }
  },
  // 生产配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // chunk size limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: 'assets/css/[name].[hash].[ext]',
        // chunk split
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      }
    },
  },
})