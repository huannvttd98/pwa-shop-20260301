<template>
  <nav class="bg-indigo-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center space-x-4">
          <button
            class="md:hidden p-2 rounded-md hover:bg-indigo-700 transition"
            aria-label="Toggle navigation menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <router-link to="/" class="text-xl font-bold tracking-wide">🛍 PWA Shop</router-link>
        </div>
        <div class="hidden md:flex items-center space-x-6">
          <router-link to="/" class="hover:text-indigo-200 transition" active-class="text-indigo-200 font-semibold">Trang Chủ</router-link>
          <template v-if="auth.isAuthenticated">
            <router-link to="/dashboard" class="hover:text-indigo-200 transition" active-class="text-indigo-200 font-semibold">Dashboard</router-link>
            <router-link to="/products" class="hover:text-indigo-200 transition" active-class="text-indigo-200 font-semibold">Sản Phẩm</router-link>
          </template>
        </div>
        <div class="flex items-center space-x-3">
          <span v-if="auth.isAuthenticated" class="hidden sm:block text-sm text-indigo-200">
            Xin chào, {{ auth.user?.name }}
          </span>
          <button
            v-if="auth.isAuthenticated"
            @click="handleLogout"
            class="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-indigo-50 transition"
          >Đăng Xuất</button>
          <router-link
            v-else
            to="/login"
            class="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-indigo-50 transition"
          >Đăng Nhập</router-link>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden bg-indigo-700 px-4 py-3 space-y-2">
      <router-link to="/" class="block py-2 hover:text-indigo-200 transition" @click="mobileOpen = false">Trang Chủ</router-link>
      <template v-if="auth.isAuthenticated">
        <router-link to="/dashboard" class="block py-2 hover:text-indigo-200 transition" @click="mobileOpen = false">Dashboard</router-link>
        <router-link to="/products" class="block py-2 hover:text-indigo-200 transition" @click="mobileOpen = false">Sản Phẩm</router-link>
      </template>
    </div>
  </nav>
  <div class="h-16"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore.js'

const auth = useAuthStore()
const router = useRouter()
const mobileOpen = ref(false)

function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>
