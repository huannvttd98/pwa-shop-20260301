<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import Modal from '@/components/Modal.vue'

const cartStore = useCartStore()
const authStore = useAuthStore()

const isCheckoutModalOpen = ref(false)
const isOrderSuccess = ref(false)

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(value)
}

const handleCheckout = () => {
  isCheckoutModalOpen.value = true
}

const confirmOrder = () => {
  // Simulate order processing
  isOrderSuccess.value = true
  cartStore.clearCart()
}

const closeSuccessModal = () => {
  isCheckoutModalOpen.value = false
  isOrderSuccess.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Giỏ hàng của bạn</h1>
        <p class="text-gray-500 mt-1">{{ cartStore.totalItems }} sản phẩm trong giỏ hàng</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div v-if="cartStore.items.length > 0" class="lg:grid lg:grid-cols-12 lg:gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-8">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div v-for="(item, index) in cartStore.items" :key="item.id"
              :class="['flex items-center p-6', index !== cartStore.items.length - 1 ? 'border-b border-gray-200' : '']">
              <!-- Product Image -->
              <img :src="item.image" :alt="item.name"
                class="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover" />

              <!-- Product Info -->
              <div class="flex-1 ml-4 md:ml-6">
                <h3 class="font-bold text-gray-900 text-lg">{{ item.name }}</h3>
                <p class="text-pink-500 font-medium mt-1">{{ formatCurrency(item.price) }}</p>
              </div>

              <!-- Quantity Controls -->
              <div class="flex items-center space-x-3">
                <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                  class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                  </svg>
                </button>
                <span class="w-10 text-center font-medium">{{ item.quantity }}</span>
                <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                  class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              <!-- Item Total & Remove -->
              <div class="ml-6 text-right">
                <p class="font-bold text-gray-900">{{ formatCurrency(item.price * item.quantity) }}</p>
                <button @click="cartStore.removeFromCart(item.id)"
                  class="text-red-500 hover:text-red-700 text-sm mt-1 transition-colors">
                  Xóa
                </button>
              </div>
            </div>
          </div>

          <!-- Continue Shopping -->
          <div class="mt-6">
            <router-link to="/shop"
              class="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Tiếp tục mua sắm
            </router-link>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-4 mt-8 lg:mt-0">
          <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Tóm tắt đơn hàng</h2>

            <div class="space-y-4">
              <div class="flex justify-between text-gray-600">
                <span>Tạm tính ({{ cartStore.totalItems }} sản phẩm)</span>
                <span>{{ formatCurrency(cartStore.totalPrice) }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Phí vận chuyển</span>
                <span class="text-green-600 font-medium">Miễn phí</span>
              </div>
              <div class="border-t pt-4">
                <div class="flex justify-between text-lg font-bold text-gray-900">
                  <span>Tổng cộng</span>
                  <span class="text-pink-500">{{ formatCurrency(cartStore.totalPrice) }}</span>
                </div>
              </div>
            </div>

            <button @click="handleCheckout"
              class="w-full mt-6 py-4 bg-pink-500 text-white rounded-xl font-bold text-lg hover:bg-pink-600 transition-colors">
              Đặt hàng
            </button>

            <p class="text-center text-gray-500 text-sm mt-4">
              Bạn sẽ được chuyển đến trang thanh toán
            </p>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="text-center py-20">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Giỏ hàng trống</h2>
        <p class="text-gray-500 mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
        <router-link to="/shop"
          class="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Bắt đầu mua sắm
        </router-link>
      </div>
    </div>

    <!-- Checkout Modal -->
    <Modal :isOpen="isCheckoutModalOpen" @close="closeSuccessModal"
      :title="isOrderSuccess ? 'Đặt hàng thành công!' : 'Xác nhận đơn hàng'" size="md">

      <!-- Order Success -->
      <div v-if="isOrderSuccess" class="text-center py-4">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Cảm ơn bạn đã đặt hàng!</h3>
        <p class="text-gray-500 mb-6">
          Đơn hàng của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ sớm nhất.
        </p>
        <router-link to="/shop" @click="closeSuccessModal"
          class="inline-block px-6 py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 transition-colors">
          Tiếp tục mua sắm
        </router-link>
      </div>

      <!-- Confirm Order -->
      <div v-else>
        <div class="space-y-4 mb-6">
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="text-sm text-gray-500 mb-1">Khách hàng</p>
            <p class="font-medium text-gray-900">{{ authStore.user?.name }}</p>
            <p class="text-gray-600">{{ authStore.user?.email }}</p>
          </div>

          <div class="bg-gray-50 rounded-xl p-4">
            <p class="text-sm text-gray-500 mb-2">Chi tiết đơn hàng</p>
            <div v-for="item in cartStore.items" :key="item.id"
              class="flex justify-between py-2 border-b border-gray-200 last:border-0">
              <span class="text-gray-700">{{ item.name }} x{{ item.quantity }}</span>
              <span class="font-medium">{{ formatCurrency(item.price * item.quantity) }}</span>
            </div>
          </div>

          <div class="flex justify-between text-lg font-bold pt-2">
            <span>Tổng cộng:</span>
            <span class="text-pink-500">{{ formatCurrency(cartStore.totalPrice) }}</span>
          </div>
        </div>

        <div class="flex gap-3">
          <button @click="isCheckoutModalOpen = false"
            class="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            Hủy
          </button>
          <button @click="confirmOrder"
            class="flex-1 py-3 px-4 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors font-medium">
            Xác nhận đặt hàng
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>
