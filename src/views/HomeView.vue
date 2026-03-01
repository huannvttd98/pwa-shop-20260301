<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const features = [
  {
    icon: 'mobile',
    title: 'Mobile-First',
    description: 'Giao diện tối ưu cho mọi thiết bị, từ điện thoại đến máy tính'
  },
  {
    icon: 'offline',
    title: 'Hoạt động Offline',
    description: 'Tiếp tục làm việc ngay cả khi không có kết nối internet'
  },
  {
    icon: 'speed',
    title: 'Tốc độ cao',
    description: 'Tải trang nhanh chóng với công nghệ PWA hiện đại'
  },
  {
    icon: 'secure',
    title: 'Bảo mật',
    description: 'Dữ liệu được bảo vệ an toàn với hệ thống xác thực'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-pink-400 via-pink-500 to-pink-500 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Quản lý sản phẩm
            <span class="block text-yellow-300">thông minh & hiệu quả</span>
          </h1>
          <p class="text-xl md:text-2xl text-pink-100 mb-10 max-w-3xl mx-auto">
            Ứng dụng PWA hiện đại giúp bạn quản lý sản phẩm mọi lúc, mọi nơi -
            kể cả khi không có internet.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              :to="authStore.isAuthenticated ? '/dashboard' : '/login'"
              class="px-8 py-4 bg-white text-pink-500 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              {{ authStore.isAuthenticated ? 'Vào Dashboard' : 'Bắt đầu ngay' }}
            </router-link>
            <a href="#features"
              class="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-pink-500 transition-all">
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>

      <!-- Wave decoration -->
      <div class="relative h-16 md:h-24">
        <svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#f9fafb" d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,100 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tính năng nổi bật
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Được xây dựng với công nghệ hiện đại nhất để mang lại trải nghiệm tốt nhất
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="feature in features" :key="feature.title"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <!-- Mobile Icon -->
            <div v-if="feature.icon === 'mobile'"
              class="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <!-- Offline Icon -->
            <div v-if="feature.icon === 'offline'"
              class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <!-- Speed Icon -->
            <div v-if="feature.icon === 'speed'"
              class="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <!-- Secure Icon -->
            <div v-if="feature.icon === 'secure'"
              class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-pink-500 py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Sẵn sàng bắt đầu?
        </h2>
        <p class="text-xl text-pink-100 mb-8">
          Đăng nhập ngay để trải nghiệm hệ thống quản lý sản phẩm hiện đại
        </p>
        <router-link
          :to="authStore.isAuthenticated ? '/dashboard' : '/login'"
          class="inline-block px-8 py-4 bg-white text-pink-500 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
          {{ authStore.isAuthenticated ? 'Vào Dashboard' : 'Đăng nhập' }}
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span class="text-white font-bold text-xl">Shinzo Kijo</span>
        </div>
        <p>&copy; 2026 Shinzo Kijo. Được xây dựng với Vue 3 + Vite + Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>
