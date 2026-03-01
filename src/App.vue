<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <div class="flex">
      <Sidebar v-if="auth.isAuthenticated && showSidebar" />
      <main :class="['flex-1', auth.isAuthenticated && showSidebar ? 'md:ml-64' : '']">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from './stores/authStore.js'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const auth = useAuthStore()
const route = useRoute()

const showSidebar = computed(() => {
  return !['/login', '/'].includes(route.path)
})
</script>
