import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      id: 1,
      name: 'Shinzo Kijo - Hộp 30 gói',
      price: 1290000,
      category: 'Sản phẩm chính',
      stock: 50,
      image: '/images/products/s_n_xu_t_1_1_480x480.png',
      description: 'Hộp 30 gói tiện dụng cho 1 tháng sử dụng'
    },
    {
      id: 2,
      name: 'Shinzo Kijo - Combo 2 hộp',
      price: 2380000,
      category: 'Combo',
      stock: 30,
      image: '/images/products/1.png',
      description: 'Combo tiết kiệm 2 hộp cho 2 tháng'
    },
    {
      id: 3,
      name: 'Shinzo Kijo - Combo 3 hộp',
      price: 3470000,
      category: 'Combo',
      stock: 100,
      image: '/images/products/2.png',
      description: 'Combo tiết kiệm 3 hộp cho 3 tháng'
    },
    {
      id: 4,
      name: 'Shinzo Kijo - Combo 5 hộp',
      price: 5450000,
      category: 'Combo gia đình',
      stock: 25,
      image: '/images/products/3.png',
      description: 'Combo gia đình, tiết kiệm tối đa'
    },
    {
      id: 5,
      name: 'Shinzo Kijo - Gói dùng thử',
      price: 150000,
      category: 'Dùng thử',
      stock: 200,
      image: '/images/products/4.png',
      description: 'Gói dùng thử 3 ngày'
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
