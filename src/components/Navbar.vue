<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const isMobileMenuOpen = ref(false)

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-indigo-600 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span class="font-bold text-xl">PWA Shop</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/"
            class="px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
            Trang chủ
          </router-link>

          <template v-if="authStore.isAuthenticated">
            <router-link to="/dashboard"
              class="px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              Dashboard
            </router-link>
            <router-link to="/products"
              class="px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              Sản phẩm
            </router-link>
            <button @click="handleLogout"
              class="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Đăng xuất
            </button>
          </template>

          <template v-else>
            <router-link to="/login"
              class="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Đăng nhập
            </router-link>
          </template>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu"
            class="p-2 rounded-md hover:bg-indigo-500 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden bg-indigo-700">
      <div class="px-4 py-3 space-y-2">
        <router-link to="/" @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
          Trang chủ
        </router-link>

        <template v-if="authStore.isAuthenticated">
          <router-link to="/dashboard" @click="isMobileMenuOpen = false"
            class="block px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
            Dashboard
          </router-link>
          <router-link to="/products" @click="isMobileMenuOpen = false"
            class="block px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
            Sản phẩm
          </router-link>
          <button @click="handleLogout"
            class="w-full text-left px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
            Đăng xuất
          </button>
        </template>

        <template v-else>
          <router-link to="/login" @click="isMobileMenuOpen = false"
            class="block px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
            Đăng nhập
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>
