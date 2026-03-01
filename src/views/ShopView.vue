<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'

const productStore = useProductStore()
const cartStore = useCartStore()
const authStore = useAuthStore()

// Search & Filter
const searchQuery = ref('')
const selectedCategory = ref('')

const filteredProducts = computed(() => {
  return productStore.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = !selectedCategory.value || product.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(value)
}

const addedProducts = ref(new Set())

const handleAddToCart = (product) => {
  cartStore.addToCart(product, 1)
  addedProducts.value.add(product.id)

  // Reset animation after 1.5s
  setTimeout(() => {
    addedProducts.value.delete(product.id)
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Banner -->
    <div class="bg-gradient-to-r from-rose-300 to-purple-600 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Cửa hàng trực tuyến</h1>
        <p class="text-rose-100 text-lg">Khám phá các sản phẩm chất lượng cao</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filters -->
      <div class="bg-white rounded-2xl shadow-lg p-4 mb-8">
        <div class="flex flex-col sm:flex-row gap-4">
          <!-- Search -->
          <div class="flex-1 relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input v-model="searchQuery" type="text" placeholder="Tìm kiếm sản phẩm..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent" />
          </div>
          <!-- Category Filter -->
          <select v-model="selectedCategory"
            class="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent bg-white">
            <option value="">Tất cả danh mục</option>
            <option v-for="category in productStore.categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="product in filteredProducts" :key="product.id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
          <!-- Image -->
          <div class="relative h-52 bg-gray-100 overflow-hidden">
            <img :src="product.image" :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <span class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-gray-700">
              {{ product.category }}
            </span>
            <span v-if="product.stock < 10"
              class="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
              Sắp hết
            </span>
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="font-bold text-lg text-gray-900 mb-2 line-clamp-1">{{ product.name }}</h3>
            <p class="text-gray-500 text-sm mb-4 line-clamp-2">{{ product.description }}</p>

            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-rose-500">{{ formatCurrency(product.price) }}</span>

              <button
                v-if="authStore.isAuthenticated"
                @click="handleAddToCart(product)"
                :disabled="product.stock === 0"
                :class="[
                  'flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all',
                  addedProducts.has(product.id)
                    ? 'bg-green-500 text-white'
                    : product.stock === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-rose-400 text-white hover:bg-rose-500'
                ]">
                <svg v-if="addedProducts.has(product.id)" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{{ addedProducts.has(product.id) ? 'Đã thêm' : 'Thêm' }}</span>
              </button>

              <router-link v-else to="/login"
                class="flex items-center space-x-2 px-4 py-2 bg-rose-400 text-white rounded-xl font-medium hover:bg-rose-500 transition-all">
                <span>Đăng nhập</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <h3 class="text-xl font-medium text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
        <p class="text-gray-500">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
      </div>
    </div>
  </div>
</template>
