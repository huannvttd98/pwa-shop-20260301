<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: 'chart' },
  { name: 'Sản phẩm', path: '/products', icon: 'box' }
]

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <aside class="w-64 bg-gray-800 text-white min-h-screen hidden lg:block">
    <div class="p-6 h-full flex flex-col">
      <div class="flex items-center space-x-3 mb-8">
        <div class="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
          <span class="text-lg font-bold">{{ authStore.user?.name?.[0] || 'A' }}</span>
        </div>
        <div>
          <p class="font-medium">{{ authStore.user?.name || 'Admin' }}</p>
          <p class="text-sm text-gray-400">{{ authStore.user?.role || 'admin' }}</p>
        </div>
      </div>

      <nav class="space-y-2 flex-1">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          :class="[
            'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
            route.path === item.path
              ? 'bg-pink-500 text-white'
              : 'text-gray-300 hover:bg-gray-700'
          ]"
        >
          <!-- Chart Icon -->
          <svg v-if="item.icon === 'chart'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <!-- Box Icon -->
          <svg v-if="item.icon === 'box'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span>{{ item.name }}</span>
        </router-link>
      </nav>

      <div class="mt-auto pt-6">
        <button @click="handleLogout"
          class="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  </aside>
</template>
