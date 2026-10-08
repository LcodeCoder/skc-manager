import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@renderer/components/index.vue'

const router = createRouter({
  // Electron 打包后加载本地文件，使用 hash 路由。
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    }
  ]
})

export default router
