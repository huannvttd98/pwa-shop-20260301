<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Thông tin sản phẩm chính
const product = {
  name: 'Shinzo Kijo',
  tagline: 'Tinh hoa từ thiên nhiên',
  description: 'Shinzo Kijo mang đến cho bạn sản phẩm chất lượng cao, được chế tác tỉ mỉ từ những nguyên liệu tốt nhất. Mỗi sản phẩm là sự kết hợp hoàn hảo giữa truyền thống và hiện đại.',
  features: [
    'Nguyên liệu 100% tự nhiên',
    'Quy trình sản xuất nghiêm ngặt',
    'Đóng gói cao cấp, sang trọng',
    'Giao hàng nhanh toàn quốc'
  ],
  image: '/images/products/s_n_xu_t_1_1_480x480.png'
}

// Thông tin chi tiết sản phẩm
const productInfo = [
  {
    icon: 'location',
    title: 'Nơi sản xuất',
    description: 'Nhà máy đạt chuẩn GMP tại Nhật Bản',
    detail: 'Osaka, Japan'
  },
  {
    icon: 'ingredient',
    title: 'Thành phần chính',
    description: 'Chiết xuất từ thiên nhiên tinh khiết',
    detail: 'Collagen, Vitamin E, Hyaluronic Acid'
  },
  {
    icon: 'certificate',
    title: 'Kiểm định',
    description: 'Được chứng nhận bởi các tổ chức uy tín',
    detail: 'ISO 22000, FDA, HACCP'
  },
  {
    icon: 'formula',
    title: 'Công thức',
    description: 'Kết hợp khoa học hiện đại và truyền thống',
    detail: 'Công nghệ Nano độc quyền'
  }
]

// Hướng dẫn sử dụng
const usageGuide = {
  howToUse: [
    'Uống 1 gói mỗi ngày vào buổi sáng hoặc tối',
    'Pha với 100-150ml nước ấm (dưới 40°C)',
    'Khuấy đều và uống ngay sau khi pha',
    'Sử dụng liên tục trong 3 tháng để đạt hiệu quả tốt nhất'
  ],
  targetUsers: [
    { title: 'Phụ nữ từ 25 tuổi', desc: 'Muốn duy trì làn da tươi trẻ' },
    { title: 'Người làm việc văn phòng', desc: 'Ít thời gian chăm sóc bản thân' },
    { title: 'Người có dấu hiệu lão hóa', desc: 'Da khô, nếp nhăn, chảy xệ' },
    { title: 'Phụ nữ sau sinh', desc: 'Cần phục hồi da và cơ thể' }
  ]
}

// Thành phần sản phẩm
const ingredients = [
  {
    name: 'Collagen Peptide',
    amount: '5,000mg',
    benefit: 'Tăng độ đàn hồi, giảm nếp nhăn',
    icon: 'collagen'
  },
  {
    name: 'Hyaluronic Acid',
    amount: '120mg',
    benefit: 'Giữ ẩm sâu, căng mịng da',
    icon: 'moisture'
  },
  {
    name: 'Vitamin C',
    amount: '100mg',
    benefit: 'Chống oxy hóa, sáng da',
    icon: 'vitaminc'
  },
  {
    name: 'Vitamin E',
    amount: '15mg',
    benefit: 'Nuôi dưỡng, bảo vệ da',
    icon: 'vitamine'
  },
  {
    name: 'Chiết xuất Hồng sâm',
    amount: '50mg',
    benefit: 'Tăng cường sức khỏe, chống lão hóa',
    icon: 'ginseng'
  },
  {
    name: 'Biotin',
    amount: '30mcg',
    benefit: 'Khỏe tóc, móng và da',
    icon: 'biotin'
  }
]

// Phương tiện truyền thông đưa tin
const mediaMentions = [
  { name: 'VTV', logo: '/images/products/vtv.png', title: 'Shinzo Kijo - Bí quyết làm đẹp từ Nhật Bản' },
  { name: 'Tuổi Trẻ', logo: '/images/products/tuoiTre.png', title: 'Collagen Shinzo Kijo được phụ nữ Việt tin dùng' },
  { name: 'Thanh Niên', logo: '/images/products/thanh_nien.png', title: 'Xu hướng chăm sóc da với Collagen cao cấp' },
  { name: 'Tiền Phong', logo: '/images/products/tienPhong.png', title: 'Shinzo Kijo chinh phục thị trường Việt Nam' },
  { name: 'VTC', logo: '/images/products/vtc.png', title: 'Bí quyết trẻ đẹp của phụ nữ hiện đại' },
  { name: 'Dân Trí', logo: '/images/products/danTri.png', title: 'Collagen Nhật Bản - Lựa chọn hàng đầu' }
]

// Feedback từ khách hàng
const customerFeedbacks = [
  {
    name: 'Chị Minh Anh',
    age: 35,
    location: 'Hà Nội',
    avatar: '/images/products/nu-35.jpg',
    rating: 5,
    feedback: 'Sau 2 tháng sử dụng Shinzo Kijo, da mình mềm mịn hơn hẳn, các vết thâm mờ đi rõ rệt. Mình rất hài lòng!',
    beforeAfter: '/images/products/customer-before-after-1.jpg'
  },
  {
    name: 'Chị Thu Hương',
    age: 40,
    location: 'TP. Hồ Chí Minh',
    avatar: '/images/products/nu-40.webp',
    rating: 5,
    feedback: 'Mình đã thử nhiều loại collagen nhưng Shinzo Kijo là sản phẩm hiệu quả nhất. Nếp nhăn giảm đáng kể sau 3 tháng.',
    beforeAfter: '/images/products/customer-before-after-2.jpg'
  },
  {
    name: 'Chị Ngọc Linh',
    age: 33,
    location: 'Đà Nẵng',
    avatar: '/images/products/phu-33.webp',
    rating: 5,
    feedback: 'Sản phẩm dễ uống, vị thanh mát. Da mình sáng hơn và đều màu hơn sau 1 tháng sử dụng.',
    beforeAfter: '/images/products/customer-before-after-3.jpg'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-rose-300 via-rose-400 to-rose-400 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Text Content -->
          <div class="text-center md:text-left">
            <span class="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              ✨ Sản phẩm cao cấp
            </span>
            <h1 class="text-3xl md:text-6xl font-bold mb-3 md:mb-6">
              {{ product.name }}
            </h1>
            <p class="text-xl md:text-3xl text-rose-100 mb-3 md:mb-6 font-light">
              {{ product.tagline }}
            </p>
            <p class="text-sm md:text-lg text-rose-100 mb-6 md:mb-8 leading-relaxed">
              {{ product.description }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <router-link to="/shop"
                class="px-6 py-3 md:px-8 md:py-4 bg-white text-rose-500 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Khám phá ngay
              </router-link>
              <a href="#about"
                class="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-rose-500 transition-all">
                Tìm hiểu thêm
              </a>
            </div>
          </div>

          <!-- Product Image -->
          <div class="relative">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-12">
              <div class="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <img :src="product.image" :alt="product.name"
                  class="w-full h-full object-cover rounded-2xl"
                  @error="$event.target.src = 'https://placehold.co/400x400/FFB6C1/white?text=Shinzo+Kijo'" />
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>

      <!-- Wave decoration -->
      <div class="relative h-10 md:h-24">
        <svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#f9fafb" d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,100 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>

    <!-- About Product Section -->
    <section id="about" class="bg-gray-50 py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Tại sao chọn {{ product.name }}?
          </h2>
          <p class="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến cho bạn những sản phẩm tốt nhất
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <div v-for="(feature, index) in product.features" :key="index"
            class="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div class="w-10 h-10 md:w-12 md:h-12 bg-rose-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
              <svg class="w-5 h-5 md:w-6 md:h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-sm md:text-base font-semibold text-gray-900">{{ feature }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Information Section -->
    <section class="bg-white py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Thông tin sản phẩm
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Minh bạch trong từng chi tiết
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          <div v-for="info in productInfo" :key="info.title"
            class="bg-gradient-to-br from-rose-50 to-white p-4 md:p-8 rounded-xl md:rounded-2xl border border-rose-100 hover:shadow-xl transition-all hover:-translate-y-1">

            <!-- Location Icon -->
            <div v-if="info.icon === 'location'"
              class="w-10 h-10 md:w-16 md:h-16 bg-rose-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6">
              <svg class="w-5 h-5 md:w-8 md:h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            <!-- Ingredient Icon -->
            <div v-if="info.icon === 'ingredient'"
              class="w-10 h-10 md:w-16 md:h-16 bg-green-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6">
              <svg class="w-5 h-5 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <!-- Certificate Icon -->
            <div v-if="info.icon === 'certificate'"
              class="w-10 h-10 md:w-16 md:h-16 bg-amber-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6">
              <svg class="w-5 h-5 md:w-8 md:h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            <!-- Formula Icon -->
            <div v-if="info.icon === 'formula'"
              class="w-10 h-10 md:w-16 md:h-16 bg-purple-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6">
              <svg class="w-5 h-5 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>

            <h3 class="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{{ info.title }}</h3>
            <p class="text-xs md:text-base text-gray-600 mb-2 md:mb-3 line-clamp-2 md:line-clamp-none">{{ info.description }}</p>
            <p class="text-xs md:text-sm font-semibold text-rose-500 bg-rose-50 px-2 py-1 md:px-3 md:py-2 rounded-md md:rounded-lg inline-block">
              {{ info.detail }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ingredients Section -->
    <section class="bg-gradient-to-br from-rose-50 to-white py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Thành phần sản phẩm
          </h2>
          <p class="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Công thức độc quyền với các thành phần cao cấp
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          <div v-for="item in ingredients" :key="item.name"
            class="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all border border-rose-100">
            <!-- Icon -->
            <div class="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4"
              :class="{
                'bg-rose-100': item.icon === 'collagen',
                'bg-blue-100': item.icon === 'moisture',
                'bg-orange-100': item.icon === 'vitaminc',
                'bg-green-100': item.icon === 'vitamine',
                'bg-red-100': item.icon === 'ginseng',
                'bg-purple-100': item.icon === 'biotin'
              }">
              <!-- Collagen Icon -->
              <svg v-if="item.icon === 'collagen'" class="w-5 h-5 md:w-7 md:h-7 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <!-- Moisture Icon -->
              <svg v-if="item.icon === 'moisture'" class="w-5 h-5 md:w-7 md:h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
              <!-- Vitamin C Icon -->
              <svg v-if="item.icon === 'vitaminc'" class="w-5 h-5 md:w-7 md:h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <!-- Vitamin E Icon -->
              <svg v-if="item.icon === 'vitamine'" class="w-5 h-5 md:w-7 md:h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <!-- Ginseng Icon -->
              <svg v-if="item.icon === 'ginseng'" class="w-5 h-5 md:w-7 md:h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <!-- Biotin Icon -->
              <svg v-if="item.icon === 'biotin'" class="w-5 h-5 md:w-7 md:h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>

            <!-- Content -->
            <h4 class="text-sm md:text-lg font-bold text-gray-900 mb-1">{{ item.name }}</h4>
            <p class="text-rose-500 font-bold text-xs md:text-sm mb-2">{{ item.amount }}</p>
            <p class="text-xs md:text-sm text-gray-600">{{ item.benefit }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage Guide Section -->
    <section class="bg-gray-50 py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-16">
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Hướng dẫn sử dụng
          </h2>
          <p class="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Sử dụng đúng cách để đạt hiệu quả tối ưu
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <!-- Cách sử dụng -->
          <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
            <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-14 md:h-14 bg-rose-100 rounded-xl md:rounded-2xl flex items-center justify-center">
                <svg class="w-5 h-5 md:w-7 md:h-7 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 class="text-lg md:text-2xl font-bold text-gray-900">Cách sử dụng</h3>
            </div>
            <ul class="space-y-3 md:space-y-4">
              <li v-for="(step, index) in usageGuide.howToUse" :key="index" class="flex items-start gap-3">
                <span class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-rose-400 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                  {{ index + 1 }}
                </span>
                <span class="text-sm md:text-base text-gray-700 pt-0.5 md:pt-1">{{ step }}</span>
              </li>
            </ul>
          </div>

          <!-- Đối tượng sử dụng -->
          <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
            <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div class="w-10 h-10 md:w-14 md:h-14 bg-blue-100 rounded-xl md:rounded-2xl flex items-center justify-center">
                <svg class="w-5 h-5 md:w-7 md:h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-lg md:text-2xl font-bold text-gray-900">Đối tượng sử dụng</h3>
            </div>
            <div class="space-y-3 md:space-y-4">
              <div v-for="user in usageGuide.targetUsers" :key="user.title" class="flex items-start gap-3">
                <svg class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-sm md:text-base font-semibold text-gray-900">{{ user.title }}</p>
                  <p class="text-xs md:text-sm text-gray-500">{{ user.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Media Mentions Section -->
    <section class="bg-white py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            {{ product.name }} trên các phương tiện truyền thông
          </h2>
          <p class="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Được các trang tin uy tín đưa tin và giới thiệu
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div v-for="media in mediaMentions" :key="media.name"
            class="bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
            <div class="flex items-center gap-3 mb-3 md:mb-4">
              <img :src="media.logo" :alt="media.name" class="h-8 md:h-12 w-auto object-contain"
                @error="$event.target.src = 'https://placehold.co/100x40/gray/white?text=' + media.name" />
            </div>
            <p class="text-xs md:text-sm text-gray-700 font-medium line-clamp-2">{{ media.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Feedback Section -->
    <section class="bg-gray-50 py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Feedback từ khách hàng
          </h2>
          <p class="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hàng nghìn khách hàng hài lòng sau khi sử dụng
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 md:gap-6">
          <div v-for="customer in customerFeedbacks" :key="customer.name"
            class="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <!-- Customer Info -->
            <div class="flex items-center gap-3 mb-4">
              <img :src="customer.avatar" :alt="customer.name"
                class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-rose-200"
                @error="$event.target.src = 'https://placehold.co/60x60/FFB6C1/white?text=' + customer.name.charAt(0)" />
              <div>
                <p class="text-sm md:text-base font-bold text-gray-900">{{ customer.name }}</p>
                <p class="text-xs md:text-sm text-gray-500">{{ customer.age }} tuổi - {{ customer.location }}</p>
              </div>
            </div>

            <!-- Rating Stars -->
            <div class="flex gap-1 mb-3">
              <svg v-for="star in customer.rating" :key="star" class="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <!-- Feedback Text -->
            <p class="text-xs md:text-sm text-gray-600 mb-4 italic">"{{ customer.feedback }}"</p>

            <!-- Before After Image -->
            <div class="relative rounded-lg overflow-hidden">
              <img :src="customer.beforeAfter" :alt="'Kết quả của ' + customer.name"
                class="w-full h-32 md:h-40 object-cover"
                @error="$event.target.style.display='none'" />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p class="text-xs text-white text-center">Kết quả sau khi sử dụng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-rose-400 py-10 md:py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          Trải nghiệm {{ product.name }} ngay hôm nay
        </h2>
        <p class="text-base md:text-xl text-rose-100 mb-6 md:mb-8">
          Đăng nhập để mua sắm và nhận nhiều ưu đãi hấp dẫn
        </p>
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <router-link to="/shop"
            class="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-rose-500 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Mua ngay
          </router-link>
          <router-link v-if="!authStore.isAuthenticated" to="/login"
            class="inline-block px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-rose-500 transition-all">
            Đăng nhập
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-8 md:py-12">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="flex items-center justify-center space-x-2 mb-3 md:mb-4">
          <svg class="w-6 h-6 md:w-8 md:h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span class="text-white font-bold text-lg md:text-xl">{{ product.name }}</span>
        </div>
        <p class="text-sm md:text-base">&copy; 2026 {{ product.name }}. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  </div>
</template>
