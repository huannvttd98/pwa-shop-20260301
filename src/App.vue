<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()
const authStore = useAuthStore()

// Check if current page needs sidebar layout
const needsSidebar = computed(() => {
  return authStore.isAuthenticated &&
    (route.name === 'Dashboard' || route.name === 'Products')
})

// Check if current page is login
const isLoginPage = computed(() => route.name === 'Login')

// Check authentication on mount
onMounted(() => {
  authStore.checkAuth()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Show Navbar only when not on login page -->
    <Navbar v-if="!isLoginPage" />

    <!-- Main content area -->
    <div v-if="needsSidebar" class="flex">
      <Sidebar />
      <main class="flex-1 min-h-[calc(100vh-64px)]">
        <router-view />
      </main>
    </div>

    <main v-else>
      <router-view />
    </main>
  </div>
</template>
