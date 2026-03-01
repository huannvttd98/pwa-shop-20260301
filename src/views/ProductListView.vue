<template>
  <div class="p-6 md:p-8">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Quản Lý Sản Phẩm</h1>
        <p class="text-gray-500 text-sm mt-1">{{ productStore.totalProducts }} sản phẩm</p>
      </div>
      <button
        @click="openAdd"
        class="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Thêm Sản Phẩm
      </button>
    </div>

    <!-- Search / Filter -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-5 flex flex-col sm:flex-row gap-3">
      <input
        v-model="search"
        type="text"
        placeholder="Tìm theo tên sản phẩm..."
        class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />
      <select
        v-model="categoryFilter"
        class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      >
        <option value="">Tất cả danh mục</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 border-b border-gray-100">
            <tr class="text-left text-gray-500">
              <th class="px-5 py-3 font-medium">Tên Sản Phẩm</th>
              <th class="px-5 py-3 font-medium">Danh Mục</th>
              <th class="px-5 py-3 font-medium text-right">Giá</th>
              <th class="px-5 py-3 font-medium text-right">Tồn Kho</th>
              <th class="px-5 py-3 font-medium text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="filtered.length === 0"
            >
              <td colspan="5" class="px-5 py-10 text-center text-gray-400" aria-live="polite">Không tìm thấy sản phẩm nào.</td>
            </tr>
            <tr
              v-for="product in filtered"
              :key="product.id"
              class="border-b border-gray-50 hover:bg-gray-50 transition"
            >
              <td class="px-5 py-4">
                <div class="font-medium text-gray-800">{{ product.name }}</div>
                <div class="text-xs text-gray-400 mt-0.5">{{ product.description }}</div>
              </td>
              <td class="px-5 py-4">
                <span class="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                  {{ product.category }}
                </span>
              </td>
              <td class="px-5 py-4 text-right text-gray-700 font-medium">{{ formatPrice(product.price) }}</td>
              <td class="px-5 py-4 text-right">
                <span :class="product.stock > 0 ? 'text-green-600' : 'text-red-500'" class="font-semibold">
                  {{ product.stock }}
                </span>
              </td>
              <td class="px-5 py-4 text-center">
                <div class="flex justify-center gap-2">
                  <button
                    @click="openEdit(product)"
                    :aria-label="`Edit product ${product.name}`"
                    class="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                  >Sửa</button>
                  <button
                    @click="confirmDelete(product)"
                    :aria-label="`Delete product ${product.name}`"
                    class="px-3 py-1.5 text-xs font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                  >Xóa</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Product Modal -->
    <ProductModal
      :show="modalShow"
      :product="selectedProduct"
      :mode="modalMode"
      @close="modalShow = false"
      @save="handleSave"
    />

    <!-- Delete Confirm Dialog -->
    <Teleport to="body">
      <div
        v-if="deleteTarget"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center">
          <div class="text-4xl mb-3">⚠️</div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Xác Nhận Xóa</h3>
          <p class="text-gray-500 text-sm mb-6">
            Bạn có chắc muốn xóa sản phẩm <span class="font-semibold text-gray-800">{{ deleteTarget.name }}</span> không?
          </p>
          <div class="flex justify-center gap-3">
            <button
              @click="deleteTarget = null"
              class="px-5 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition"
            >Hủy</button>
            <button
              @click="doDelete"
              class="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
            >Xóa</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '../stores/productStore.js'
import ProductModal from '../components/ProductModal.vue'

const productStore = useProductStore()

const search = ref('')
const categoryFilter = ref('')
const modalShow = ref(false)
const modalMode = ref('add')
const selectedProduct = ref(null)
const deleteTarget = ref(null)

const categories = computed(() => [...new Set(productStore.products.map((p) => p.category))])

const filtered = computed(() => {
  return productStore.products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.value.toLowerCase())
    const matchCat = categoryFilter.value === '' || p.category === categoryFilter.value
    return matchName && matchCat
  })
})

function openAdd() {
  selectedProduct.value = null
  modalMode.value = 'add'
  modalShow.value = true
}

function openEdit(product) {
  selectedProduct.value = { ...product }
  modalMode.value = 'edit'
  modalShow.value = true
}

function confirmDelete(product) {
  deleteTarget.value = product
}

function doDelete() {
  productStore.deleteProduct(deleteTarget.value.id)
  deleteTarget.value = null
}

function handleSave(data) {
  if (modalMode.value === 'add') {
    productStore.addProduct(data)
  } else {
    productStore.updateProduct(data)
  }
  modalShow.value = false
}

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
</script>
