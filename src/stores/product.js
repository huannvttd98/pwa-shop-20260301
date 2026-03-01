import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 34990000,
      category: 'Điện thoại',
      stock: 50,
      image: 'https://placehold.co/200x200/4F46E5/white?text=iPhone',
      description: 'Điện thoại cao cấp của Apple'
    },
    {
      id: 2,
      name: 'MacBook Air M3',
      price: 27990000,
      category: 'Laptop',
      stock: 30,
      image: 'https://placehold.co/200x200/059669/white?text=MacBook',
      description: 'Laptop mỏng nhẹ với chip M3'
    },
    {
      id: 3,
      name: 'AirPods Pro 2',
      price: 6490000,
      category: 'Phụ kiện',
      stock: 100,
      image: 'https://placehold.co/200x200/DC2626/white?text=AirPods',
      description: 'Tai nghe không dây cao cấp'
    },
    {
      id: 4,
      name: 'iPad Pro 12.9"',
      price: 28990000,
      category: 'Máy tính bảng',
      stock: 25,
      image: 'https://placehold.co/200x200/7C3AED/white?text=iPad',
      description: 'Máy tính bảng chuyên nghiệp'
    },
    {
      id: 5,
      name: 'Apple Watch Ultra 2',
      price: 21990000,
      category: 'Đồng hồ',
      stock: 40,
      image: 'https://placehold.co/200x200/EA580C/white?text=Watch',
      description: 'Đồng hồ thông minh cao cấp'
    }
  ])

  const totalProducts = computed(() => products.value.length)
  const totalStock = computed(() => products.value.reduce((sum, p) => sum + p.stock, 0))
  const totalValue = computed(() => products.value.reduce((sum, p) => sum + (p.price * p.stock), 0))
  const categories = computed(() => [...new Set(products.value.map(p => p.category))])

  const addProduct = (product) => {
    const newId = Math.max(...products.value.map(p => p.id), 0) + 1
    products.value.push({
      ...product,
      id: newId,
      image: product.image || `https://placehold.co/200x200/4F46E5/white?text=${encodeURIComponent(product.name.substring(0, 10))}`
    })
  }

  const updateProduct = (id, updatedProduct) => {
    const index = products.value.findIndex(p => p.id === id)
    if (index !== -1) {
      products.value[index] = { ...products.value[index], ...updatedProduct }
    }
  }

  const deleteProduct = (id) => {
    const index = products.value.findIndex(p => p.id === id)
    if (index !== -1) {
      products.value.splice(index, 1)
    }
  }

  const getProductById = (id) => {
    return products.value.find(p => p.id === id)
  }

  return {
    products,
    totalProducts,
    totalStock,
    totalValue,
    categories,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById
  }
})
