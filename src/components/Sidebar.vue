<template>
  <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 z-40 shadow-sm">
    <div class="p-4 border-b border-gray-100">
      <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu</p>
    </div>
    <nav class="flex-1 px-3 py-4 space-y-1">
      <router-link
        to="/dashboard"
        class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
        active-class="bg-indigo-50 text-indigo-600 font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Dashboard
      </router-link>
      <router-link
        to="/products"
        class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
        active-class="bg-indigo-50 text-indigo-600 font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        Sản Phẩm
      </router-link>
    </nav>
    <div class="p-4 border-t border-gray-100 text-xs text-gray-400 text-center">
      PWA Shop v1.0
    </div>
  </aside>
</template>
