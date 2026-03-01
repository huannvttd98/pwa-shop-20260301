# 📦 Vue 3 PWA - Hệ Thống Quản Lý Sản Phẩm

Dự án này là một ứng dụng Web tiến tiến (**PWA**) được xây dựng với **Vue 3**, **Vite** và **Tailwind CSS**. Ứng dụng cung cấp giải pháp quản lý sản phẩm hiện đại, tối ưu cho thiết bị di động và có khả năng hoạt động ngoại tuyến.

## 🚀 Tính năng chính

* **PWA Ready:** Hỗ trợ cài đặt trên màn hình chính (A2HS) và chạy offline nhờ Service Worker.
* **Giao diện Mobile-First:** Sử dụng Tailwind CSS để đảm bảo trải nghiệm mượt mà trên mọi kích thước màn hình.
* **Quản lý 4 trang cốt lõi:**
    1.  **Trang Giới thiệu (Home):** Landing page quảng bá tính năng.
    2.  **Đăng nhập (Login):** Hệ thống xác thực người dùng.
    3.  **Dashboard:** Thống kê nhanh số liệu sản phẩm.
    4.  **Quản lý sản phẩm:** CRUD (Thêm, Sửa, Xóa) danh sách sản phẩm.

---

## 🛠️ Công nghệ sử dụng (Stack)

* **Framework:** [Vue 3 (Composition API)](https://vuejs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [Vue Router](https://router.vuejs.org/)
* **State Management:** [Pinia](https://pinia.vuejs.org/)
* **PWA Plugin:** [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)

---

## 📂 Cấu trúc dự án mẫu



```text
src/
├── assets/          # Logo, Icons và Global CSS
├── components/      # Các thành phần dùng chung (Modal, Navbar, Sidebar)
├── views/           # Các trang chính (Home, Login, Dashboard, ProductList)
├── router/          # Cấu hình điều hướng hệ thống
├── stores/          # Quản lý trạng thái bằng Pinia
└── App.vue          # Thành phần gốc của ứng dụng