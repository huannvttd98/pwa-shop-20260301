<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()
const isMobileMenuOpen = ref(false)

const handleLogout = () => {
  authStore.logout()
  cartStore.clearCart()
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
            <span class="font-bold text-xl">Shinzo Kijo</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/"
            class="px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
            Trang chủ
          </router-link>

          <router-link to="/shop"
            class="px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
            Cửa hàng
          </router-link>

          <template v-if="authStore.isAuthenticated">
            <!-- Admin Menu -->
            <template v-if="authStore.isAdmin">
              <router-link to="/dashboard"
                class="px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
                Dashboard
              </router-link>
              <router-link to="/products"
                class="px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
                Quản lý SP
              </router-link>
            </template>

            <!-- Customer Menu -->
            <template v-if="authStore.isCustomer">
              <router-link to="/cart" class="relative px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span v-if="cartStore.totalItems > 0"
                  class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {{ cartStore.totalItems }}
                </span>
              </router-link>
            </template>

            <div class="flex items-center space-x-3">
              <span class="text-indigo-200 text-sm">{{ authStore.user?.name }}</span>
              <button @click="handleLogout"
                class="px-4 py-2 bg-white text-indigo-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Đăng xuất
              </button>
            </div>
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

        <router-link to="/shop" @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
          Cửa hàng
        </router-link>

        <template v-if="authStore.isAuthenticated">
          <!-- Admin Menu -->
          <template v-if="authStore.isAdmin">
            <router-link to="/dashboard" @click="isMobileMenuOpen = false"
              class="block px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              Dashboard
            </router-link>
            <router-link to="/products" @click="isMobileMenuOpen = false"
              class="block px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              Quản lý sản phẩm
            </router-link>
          </template>

          <!-- Customer Menu -->
          <template v-if="authStore.isCustomer">
            <router-link to="/cart" @click="isMobileMenuOpen = false"
              class="flex items-center px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              <span>Giỏ hàng</span>
              <span v-if="cartStore.totalItems > 0"
                class="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                {{ cartStore.totalItems }}
              </span>
            </router-link>
          </template>

          <div class="border-t border-indigo-500 pt-2 mt-2">
            <p class="px-3 py-1 text-indigo-200 text-sm">{{ authStore.user?.name }}</p>
            <button @click="handleLogout"
              class="w-full text-left px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              Đăng xuất
            </button>
          </div>
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
