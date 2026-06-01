<script setup>
const places = [
  { name: 'Volcanoes National Park', location: 'Musanze District', image: '/src/assets/Volcanoes National Park.jfif' },
  { name: 'Musanze Caves', location: 'Cyuve Area', image: '/src/assets/Musanze caves.jfif' },
  { name: 'Twin Lakes', location: 'Burera District', image: '/src/assets/Twin lakes.jfif' },
  { name: 'Mount Bisoke', location: 'Volcano Range', image: '/src/assets/Mount Bisoke.jfif' },
  { name: 'Ruhengeri Town', location: 'Musanze City', image: '/src/assets/Ruhengeri.jfif' },
  { name: 'Gorilla Trekking Base', location: 'Kinigi', image: '/src/assets/gorilla.jfif' }
]
</script>

<template>
<section class="px-6 py-10 bg-green-50 min-h-screen">

<h1 class="text-4xl font-bold text-green-800 text-center">NORTHERN PROVINCE</h1><br>

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