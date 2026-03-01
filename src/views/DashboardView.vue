<template>
  <div class="p-6 md:p-8">
    <!-- Welcome -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-500 mt-1">Xin chào, <span class="font-semibold text-indigo-600">{{ auth.user?.name }}</span>! Đây là tổng quan hệ thống.</p>
    </div>

    <!-- Stat Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4"
      >
        <div :class="['w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0', stat.bg]">
          {{ stat.icon }}
        </div>
        <div>
          <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">{{ stat.label }}</p>
          <p class="text-2xl font-bold text-gray-800">{{ stat.value }}</p>
        </div>
      </div>
    </div>

    <!-- Category Bar Chart -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 class="text-lg font-semibold text-gray-800 mb-5">Phân Bố Theo Danh Mục</h2>
      <div class="space-y-3">
        <div v-for="cat in categoryStats" :key="cat.name">
          <div class="flex justify-between text-sm mb-1">
            <span class="text-gray-700 font-medium">{{ cat.name }}</span>
            <span class="text-gray-500">{{ cat.count }} sản phẩm</span>
          </div>
          <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-indigo-500 rounded-full transition-all duration-500"
              :style="{ width: `${(cat.count / productStore.totalProducts) * 100}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Products -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-5">Sản Phẩm Gần Đây</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b border-gray-100">
              <th class="pb-3 font-medium">Tên</th>
              <th class="pb-3 font-medium">Danh Mục</th>
              <th class="pb-3 font-medium text-right">Giá</th>
              <th class="pb-3 font-medium text-right">Tồn</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="p in recentProducts"
              :key="p.id"
              class="border-b border-gray-50 hover:bg-gray-50 transition"
            >
              <td class="py-3 font-medium text-gray-800">{{ p.name }}</td>
              <td class="py-3">
                <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-xs">{{ p.category }}</span>
              </td>
              <td class="py-3 text-right text-gray-700">{{ formatPrice(p.price) }}</td>
              <td class="py-3 text-right">
                <span :class="p.stock > 0 ? 'text-green-600' : 'text-red-500'" class="font-medium">{{ p.stock }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 text-center">
        <router-link to="/products" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition">
          Xem tất cả sản phẩm →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/authStore.js'
import { useProductStore } from '../stores/productStore.js'

const auth = useAuthStore()
const productStore = useProductStore()

const stats = computed(() => [
  { label: 'Tổng Sản Phẩm', value: productStore.totalProducts, icon: '📦', bg: 'bg-indigo-50' },
  { label: 'Danh Mục', value: productStore.totalCategories, icon: '🏷', bg: 'bg-purple-50' },
  { label: 'Còn Hàng', value: productStore.inStock, icon: '✅', bg: 'bg-green-50' },
  { label: 'Tổng Giá Trị', value: formatPrice(productStore.totalValue), icon: '💰', bg: 'bg-yellow-50' }
])

const categoryStats = computed(() => {
  const map = {}
  productStore.products.forEach((p) => {
    map[p.category] = (map[p.category] || 0) + 1
  })
  return Object.entries(map).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count)
})

const recentProducts = computed(() => productStore.products.slice(-5).reverse())

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
</script>
