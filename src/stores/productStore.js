import { defineStore } from 'pinia'

const defaultProducts = [
  { id: 1, name: 'Áo Thun Nam', category: 'Thời Trang', price: 150000, stock: 50, description: 'Áo thun cotton cao cấp' },
  { id: 2, name: 'Quần Jeans Nữ', category: 'Thời Trang', price: 350000, stock: 30, description: 'Quần jeans thời trang' },
  { id: 3, name: 'Giày Sneaker', category: 'Giày Dép', price: 800000, stock: 20, description: 'Giày thể thao cao cấp' },
  { id: 4, name: 'Túi Xách Da', category: 'Phụ Kiện', price: 1200000, stock: 15, description: 'Túi xách da thật' },
  { id: 5, name: 'Đồng Hồ Thông Minh', category: 'Điện Tử', price: 2500000, stock: 10, description: 'Smartwatch đa chức năng' },
  { id: 6, name: 'Tai Nghe Bluetooth', category: 'Điện Tử', price: 900000, stock: 25, description: 'Tai nghe không dây' }
]

export const useProductStore = defineStore('products', {
  state: () => ({
    products: JSON.parse(localStorage.getItem('products') || 'null') || defaultProducts
  }),
  getters: {
    totalProducts: (state) => state.products.length,
    totalCategories: (state) => new Set(state.products.map((p) => p.category)).size,
    inStock: (state) => state.products.filter((p) => p.stock > 0).length,
    totalValue: (state) => state.products.reduce((sum, p) => sum + p.price * p.stock, 0)
  },
  actions: {
    _persist() {
      localStorage.setItem('products', JSON.stringify(this.products))
    },
    addProduct(product) {
      const id = this.products.length ? Math.max(...this.products.map((p) => p.id)) + 1 : 1
      this.products.push({ ...product, id })
      this._persist()
    },
    updateProduct(updated) {
      const idx = this.products.findIndex((p) => p.id === updated.id)
      if (idx !== -1) {
        this.products[idx] = { ...updated }
        this._persist()
      }
    },
    deleteProduct(id) {
      this.products = this.products.filter((p) => p.id !== id)
      this._persist()
    }
  }
})
