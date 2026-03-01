<script setup>
import { useProductStore } from '@/stores/product'
import { useAuthStore } from '@/stores/auth'

const productStore = useProductStore()
const authStore = useAuthStore()

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(value)
}

const stats = [
  {
    title: 'Tổng sản phẩm',
    getValue: () => productStore.totalProducts,
    icon: 'box',
    color: 'indigo',
    bgColor: 'bg-rose-300'
  },
  {
    title: 'Tồn kho',
    getValue: () => productStore.totalStock,
    icon: 'archive',
    color: 'green',
    bgColor: 'bg-green-500'
  },
  {
    title: 'Danh mục',
    getValue: () => productStore.categories.length,
    icon: 'folder',
    color: 'yellow',
    bgColor: 'bg-yellow-500'
  },
  {
    title: 'Giá trị kho',
    getValue: () => formatCurrency(productStore.totalValue),
    icon: 'currency',
    color: 'red',
    bgColor: 'bg-red-500'
  }
]
</script>

<template>
  <div class="p-4 md:p-6 lg:p-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-500 mt-1">
        Xin chào, <span class="font-medium text-rose-500">{{ authStore.user?.name || 'Admin' }}</span>!
        Đây là tổng quan hệ thống.
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      <div v-for="stat in stats" :key="stat.title"
        class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm font-medium">{{ stat.title }}</p>
            <p class="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              {{ stat.getValue() }}
            </p>
          </div>
          <div :class="[stat.bgColor, 'w-14 h-14 rounded-2xl flex items-center justify-center']">
            <!-- Box Icon -->
            <svg v-if="stat.icon === 'box'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <!-- Archive Icon -->
            <svg v-if="stat.icon === 'archive'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <!-- Folder Icon -->
            <svg v-if="stat.icon === 'folder'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <!-- Currency Icon -->
            <svg v-if="stat.icon === 'currency'" class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Products -->
    <div class="bg-white rounded-2xl shadow-lg p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-gray-900">Sản phẩm gần đây</h2>
        <router-link to="/products"
          class="text-rose-500 hover:text-rose-600 font-medium text-sm">
          Xem tất cả →
        </router-link>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 font-medium text-gray-500">Sản phẩm</th>
              <th class="text-left py-3 px-4 font-medium text-gray-500 hidden sm:table-cell">Danh mục</th>
              <th class="text-right py-3 px-4 font-medium text-gray-500">Giá</th>
              <th class="text-right py-3 px-4 font-medium text-gray-500 hidden md:table-cell">Tồn kho</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productStore.products.slice(0, 5)" :key="product.id"
              class="border-b border-gray-100 hover:bg-gray-50">
              <td class="py-4 px-4">
                <div class="flex items-center space-x-3">
                  <img :src="product.image" :alt="product.name"
                    class="w-10 h-10 rounded-lg object-cover" />
                  <span class="font-medium text-gray-900">{{ product.name }}</span>
                </div>
              </td>
              <td class="py-4 px-4 hidden sm:table-cell">
                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {{ product.category }}
                </span>
              </td>
              <td class="py-4 px-4 text-right font-medium text-gray-900">
                {{ formatCurrency(product.price) }}
              </td>
              <td class="py-4 px-4 text-right hidden md:table-cell">
                <span :class="[
                  'px-3 py-1 rounded-full text-sm font-medium',
                  product.stock > 50 ? 'bg-green-100 text-green-700' :
                  product.stock > 20 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                ]">
                  {{ product.stock }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
