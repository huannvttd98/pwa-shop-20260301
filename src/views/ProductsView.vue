<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/product'
import Modal from '@/components/Modal.vue'

const productStore = useProductStore()

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

// Modal state
const isModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const modalMode = ref('add') // 'add' or 'edit'
const selectedProduct = ref(null)

// Form data
const formData = ref({
  name: '',
  price: '',
  category: '',
  stock: '',
  description: ''
})

const resetForm = () => {
  formData.value = {
    name: '',
    price: '',
    category: '',
    stock: '',
    description: ''
  }
}

const openAddModal = () => {
  modalMode.value = 'add'
  resetForm()
  isModalOpen.value = true
}

const openEditModal = (product) => {
  modalMode.value = 'edit'
  selectedProduct.value = product
  formData.value = {
    name: product.name,
    price: product.price.toString(),
    category: product.category,
    stock: product.stock.toString(),
    description: product.description
  }
  isModalOpen.value = true
}

const openDeleteModal = (product) => {
  selectedProduct.value = product
  isDeleteModalOpen.value = true
}

const handleSubmit = () => {
  const productData = {
    name: formData.value.name,
    price: parseInt(formData.value.price),
    category: formData.value.category,
    stock: parseInt(formData.value.stock),
    description: formData.value.description
  }

  if (modalMode.value === 'add') {
    productStore.addProduct(productData)
  } else {
    productStore.updateProduct(selectedProduct.value.id, productData)
  }

  isModalOpen.value = false
  resetForm()
}

const handleDelete = () => {
  if (selectedProduct.value) {
    productStore.deleteProduct(selectedProduct.value.id)
  }
  isDeleteModalOpen.value = false
  selectedProduct.value = null
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(value)
}
</script>

<template>
  <div class="p-4 md:p-6 lg:p-8">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Quản lý sản phẩm</h1>
        <p class="text-gray-500 mt-1">Quản lý danh sách sản phẩm của bạn</p>
      </div>
      <button @click="openAddModal"
        class="flex items-center justify-center space-x-2 px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors font-medium">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Thêm sản phẩm</span>
      </button>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-2xl shadow-lg p-4 mb-6">
      <div class="flex flex-col sm:flex-row gap-4">
        <!-- Search -->
        <div class="flex-1 relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input v-model="searchQuery" type="text" placeholder="Tìm kiếm sản phẩm..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent" />
        </div>
        <!-- Category Filter -->
        <select v-model="selectedCategory"
          class="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white">
          <option value="">Tất cả danh mục</option>
          <option v-for="category in productStore.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      <div v-for="product in filteredProducts" :key="product.id"
        class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
        <!-- Image -->
        <div class="relative h-48 bg-gray-100">
          <img :src="product.image" :alt="product.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <span class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-gray-700">
            {{ product.category }}
          </span>
        </div>

        <!-- Content -->
        <div class="p-5">
          <h3 class="font-bold text-lg text-gray-900 mb-2 line-clamp-1">{{ product.name }}</h3>
          <p class="text-gray-500 text-sm mb-3 line-clamp-2">{{ product.description }}</p>

          <div class="flex items-center justify-between mb-4">
            <span class="text-xl font-bold text-pink-500">{{ formatCurrency(product.price) }}</span>
            <span :class="[
              'px-3 py-1 rounded-full text-sm font-medium',
              product.stock > 50 ? 'bg-green-100 text-green-700' :
              product.stock > 20 ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            ]">
              Kho: {{ product.stock }}
            </span>
          </div>

          <!-- Actions -->
          <div class="flex gap-2">
            <button @click="openEditModal(product)"
              class="flex-1 py-2 px-4 bg-pink-100 text-pink-500 rounded-xl hover:bg-pink-200 transition-colors font-medium text-sm">
              Sửa
            </button>
            <button @click="openDeleteModal(product)"
              class="py-2 px-4 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
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

    <!-- Add/Edit Modal -->
    <Modal :isOpen="isModalOpen" @close="isModalOpen = false"
      :title="modalMode === 'add' ? 'Thêm sản phẩm mới' : 'Chỉnh sửa sản phẩm'" size="lg">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Tên sản phẩm</label>
          <input v-model="formData.name" type="text" required
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            placeholder="Nhập tên sản phẩm" />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Giá (VND)</label>
            <input v-model="formData.price" type="number" required min="0"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              placeholder="0" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Số lượng tồn kho</label>
            <input v-model="formData.stock" type="number" required min="0"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              placeholder="0" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Danh mục</label>
          <input v-model="formData.category" type="text" required
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            placeholder="Nhập danh mục" list="categories" />
          <datalist id="categories">
            <option v-for="cat in productStore.categories" :key="cat" :value="cat" />
          </datalist>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Mô tả</label>
          <textarea v-model="formData.description" rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-none"
            placeholder="Nhập mô tả sản phẩm"></textarea>
        </div>

        <div class="flex gap-3 pt-4">
          <button type="button" @click="isModalOpen = false"
            class="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            Hủy
          </button>
          <button type="submit"
            class="flex-1 py-3 px-4 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors font-medium">
            {{ modalMode === 'add' ? 'Thêm' : 'Cập nhật' }}
          </button>
        </div>
      </form>
    </Modal>

    <!-- Delete Confirmation Modal -->
    <Modal :isOpen="isDeleteModalOpen" @close="isDeleteModalOpen = false" title="Xác nhận xóa" size="sm">
      <div class="text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
        <p class="text-gray-600 mb-6">
          Bạn có chắc chắn muốn xóa sản phẩm
          <span class="font-bold text-gray-900">"{{ selectedProduct?.name }}"</span>?
        </p>
        <div class="flex gap-3">
          <button @click="isDeleteModalOpen = false"
            class="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
            Hủy
          </button>
          <button @click="handleDelete"
            class="flex-1 py-3 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium">
            Xóa
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>
