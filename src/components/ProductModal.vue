<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      @click.self="$emit('close')"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <div class="flex justify-between items-center mb-5">
          <h2 class="text-xl font-bold text-gray-800">
            {{ mode === 'add' ? 'Thêm Sản Phẩm' : 'Chỉnh Sửa Sản Phẩm' }}
          </h2>
          <button @click="$emit('close')" aria-label="Close modal" class="text-gray-400 hover:text-gray-600 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="handleSave" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tên Sản Phẩm</label>
            <input v-model="form.name" type="text" required
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Danh Mục</label>
            <input v-model="form.category" type="text" required
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Giá (VNĐ)</label>
              <input v-model.number="form.price" type="number" min="0" required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Tồn Kho</label>
              <input v-model.number="form.stock" type="number" min="0" required
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mô Tả</label>
            <textarea v-model="form.description" rows="2"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <div class="flex justify-end gap-3 pt-2">
            <button type="button" @click="$emit('close')"
              class="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition">
              Hủy
            </button>
            <button type="submit"
              class="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium">
              {{ mode === 'add' ? 'Thêm' : 'Lưu' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  show: Boolean,
  product: { type: Object, default: null },
  mode: { type: String, default: 'add' }
})

const emit = defineEmits(['close', 'save'])

const form = reactive({ name: '', category: '', price: 0, stock: 0, description: '' })

watch(
  () => props.show,
  (val) => {
    if (val) {
      if (props.mode === 'edit' && props.product) {
        Object.assign(form, { ...props.product })
      } else {
        Object.assign(form, { name: '', category: '', price: 0, stock: 0, description: '' })
      }
    }
  }
)

function handleSave() {
  const data = { ...form }
  if (props.mode === 'edit' && props.product) {
    data.id = props.product.id
  }
  emit('save', data)
}
</script>
