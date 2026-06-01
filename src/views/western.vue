<script setup>
const places = [
  { name: 'Lake Kivu Sunset', location: 'Rubavu', image: '/src/assets/LLake kivu.jfif' },
  { name: 'Rubavu Beach', location: 'Gisenyi', image: '/src/assets/Rubavu beach.jfif' },
  { name: 'Karongi Hills', location: 'Karongi', image: '/src/assets/Karongi hills.jfif' },
  { name: 'Nyungwe Forest Walk', location: 'Rusizi', image: '/src/assets/Nyungwe Forest.jfif' },
  { name: 'Canopy Walk', location: 'Nyungwe Park', image: '/src/assets/Nyungwe Canopy Walk.jfif' },
  { name: 'Gisenyi Resort', location: 'Lake Kivu Shore', image: '/src/assets/Gisenyi resort.jfif' }
]
</script>

<template>
<section class="px-6 py-10 bg-green-50 min-h-screen">

<h1 class="text-4xl font-bold text-green-800 text-center">WESTERN PROVINCE</h1><br>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  <div v-for="p in places" :key="p.name" class="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 duration-300">

    <img :src="p.image" class="w-full h-56 object-cover">

    <div class="p-4">
      <h2 class="text-xl font-bold text-green-700">{{ p.name }}</h2>
      <p class="text-gray-500">📍 {{ p.location }}</p>
    </div>

  </div>

</div>

</section>
</template>