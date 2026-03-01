<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-8">
          <div class="text-5xl mb-3">🛍</div>
          <h1 class="text-2xl font-bold text-gray-800">Đăng Nhập</h1>
          <p class="text-gray-500 text-sm mt-1">Chào mừng bạn đến với PWA Shop</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tên đăng nhập</label>
            <input
              v-model="username"
              type="text"
              placeholder="Nhập tên đăng nhập"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <input
              v-model="password"
              type="password"
              placeholder="Nhập mật khẩu"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div v-if="error" class="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-200">
            {{ error }}
          </div>

          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Đăng Nhập
          </button>
        </form>

        <div class="mt-6 p-4 bg-indigo-50 rounded-lg text-sm text-gray-600 text-center">
          <p class="font-medium text-indigo-700 mb-1">Thông tin demo</p>
          <p>Tên đăng nhập: <span class="font-mono font-bold">admin</span></p>
          <p>Mật khẩu: <span class="font-mono font-bold">admin123</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore.js'

const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  error.value = ''
  const ok = auth.login(username.value, password.value)
  if (ok) {
    router.push('/dashboard')
  } else {
    error.value = 'Tên đăng nhập hoặc mật khẩu không đúng.'
  }
}
</script>
