<script setup>
</script>

<template>
  <nav class="bg-green-800 p-4 flex items-center justify-between">

    <div class="w-16 h-16">
      <img src="/lloogo.jfif" alt="logo" class="w-full h-full object-cover">
    </div>

    <div class="flex items-center space-x-10">

      <router-link to="/" class="text-white hover:text-yellow-300 font-semibold text-xl">HOME</router-link>

      <router-link to="/about" class="text-white hover:text-yellow-300 font-semibold text-xl">ABOUT</router-link>

      
      <router-link to="/services" class="text-white hover:text-yellow-300 font-semibold text-xl">SERVICES</router-link>
      
      <div class="relative group">
        <button class="text-white hover:text-yellow-300 font-semibold text-xl flex items-center">
          DESTINATION <span class="ml-1">▼</span>
        </button>
        
        <ul class="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
          <li><router-link to="/western" class="block px-4 py-2 text-green-900 hover:bg-green-700 hover:text-white">Western</router-link></li>
          <li><router-link to="/eastern" class="block px-4 py-2 text-green-900 hover:bg-green-700 hover:text-white">Eastern</router-link></li>
          <li><router-link to="/northern" class="block px-4 py-2 text-green-900 hover:bg-green-700 hover:text-white">Northern</router-link></li>
          <li><router-link to="/southern" class="block px-4 py-2 text-green-900 hover:bg-green-700 hover:text-white">Southern</router-link></li>
          <li><router-link to="/kigali" class="block px-4 py-2 text-green-900 hover:bg-green-700 hover:text-white">Kigali</router-link></li>
        </ul>
      </div>
      
      <div class="relative group">
        <button class="text-white hover:text-yellow-300 font-semibold text-xl flex items-center">
          GALLERY <span class="ml-1">▼</span>
        </button>
        
        <ul class="absolute left-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
          <li><router-link to="/photos" class="block px-4 py-2 text-green-900 hover:bg-green-700 hover:text-white">Photos</router-link></li>
          <li><router-link to="/videos" class="block px-4 py-2 text-green-900 hover:bg-green-700 hover:text-white">Video</router-link></li>
        </ul>
      </div>
        <router-link to="/contact" class="text-white hover:text-yellow-300 font-semibold text-xl">CONTACT</router-link>

    </div>

  </nav>
</template>