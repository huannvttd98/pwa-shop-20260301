<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hệ Thống Quản Lý<br />
          <span class="text-yellow-300">Sản Phẩm</span>
        </h1>
        <p class="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Ứng dụng PWA hiện đại giúp bạn quản lý sản phẩm dễ dàng, nhanh chóng và hiệu quả mọi lúc, mọi nơi.
        </p>
        <router-link
          to="/login"
          class="inline-block bg-yellow-400 text-gray-900 font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition shadow-lg"
        >
          Bắt Đầu Ngay →
        </router-link>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-14">Tính Năng Nổi Bật</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-gray-50 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
          >
            <div class="text-5xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-500 text-sm">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Footer -->
    <section class="bg-indigo-50 py-16 px-4 text-center">
      <h2 class="text-2xl font-bold text-indigo-700 mb-4">Sẵn sàng quản lý kho hàng của bạn?</h2>
      <p class="text-gray-500 mb-8">Đăng nhập ngay để bắt đầu sử dụng hệ thống.</p>
      <router-link
        to="/login"
        class="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
      >Đăng Nhập</router-link>
    </section>
  </div>
</template>

<script setup>
const features = [
  { icon: '📱', title: 'PWA', desc: 'Hoạt động offline, cài đặt như ứng dụng gốc trên mọi thiết bị.' },
  { icon: '📐', title: 'Mobile-First', desc: 'Giao diện tối ưu trên điện thoại, máy tính bảng và desktop.' },
  { icon: '⚡', title: 'CRUD Nhanh', desc: 'Thêm, sửa, xóa sản phẩm chỉ với vài thao tác đơn giản.' },
  { icon: '📊', title: 'Dashboard', desc: 'Thống kê tổng quan tức thì giúp bạn nắm bắt tình hình kho hàng.' }
]
</script>
