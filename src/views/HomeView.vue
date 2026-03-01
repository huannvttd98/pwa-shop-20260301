<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Thông tin sản phẩm chính
const product = {
  name: 'Shinzo Kijo',
  tagline: 'Tinh hoa từ thiên nhiên',
  description: 'Shinzo Kijo mang đến cho bạn sản phẩm chất lượng cao, được chế tác tỉ mỉ từ những nguyên liệu tốt nhất. Mỗi sản phẩm là sự kết hợp hoàn hảo giữa truyền thống và hiện đại.',
  features: [
    'Nguyên liệu 100% tự nhiên',
    'Quy trình sản xuất nghiêm ngặt',
    'Đóng gói cao cấp, sang trọng',
    'Giao hàng nhanh toàn quốc'
  ],
  image: '/images/products/shinzo-kijo-main.jpg'
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-rose-300 via-rose-400 to-rose-400 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="text-center md:text-left">
            <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-6">
              ✨ Sản phẩm cao cấp
            </span>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              {{ product.name }}
            </h1>
            <p class="text-2xl md:text-3xl text-rose-100 mb-6 font-light">
              {{ product.tagline }}
            </p>
            <p class="text-lg text-rose-100 mb-8 leading-relaxed">
              {{ product.description }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <router-link to="/shop"
                class="px-8 py-4 bg-white text-rose-500 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Khám phá ngay
              </router-link>
              <a href="#about"
                class="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-rose-500 transition-all">
                Tìm hiểu thêm
              </a>
            </div>
          </div>

          <!-- Product Image -->
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div class="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <img :src="product.image" :alt="product.name"
                  class="w-full h-full object-cover rounded-2xl"
                  @error="$event.target.src = 'https://placehold.co/400x400/FFB6C1/white?text=Shinzo+Kijo'" />
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-xl"></div>
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

    <!-- About Product Section -->
    <section id="about" class="bg-gray-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tại sao chọn {{ product.name }}?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến cho bạn những sản phẩm tốt nhất
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(feature, index) in product.features" :key="index"
            class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div class="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="font-semibold text-gray-900">{{ feature }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-rose-400 py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Trải nghiệm {{ product.name }} ngay hôm nay
        </h2>
        <p class="text-xl text-rose-100 mb-8">
          Đăng nhập để mua sắm và nhận nhiều ưu đãi hấp dẫn
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/shop"
            class="inline-block px-8 py-4 bg-white text-rose-500 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Mua ngay
          </router-link>
          <router-link v-if="!authStore.isAuthenticated" to="/login"
            class="inline-block px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-rose-500 transition-all">
            Đăng nhập
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <svg class="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span class="text-white font-bold text-xl">{{ product.name }}</span>
        </div>
        <p>&copy; 2026 {{ product.name }}. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  </div>
</template>
