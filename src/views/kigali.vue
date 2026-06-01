<script setup>
const places = [
  { name: 'Kigali Convention Centre', location: 'KG 7 Ave', image: '/src/assets/Kigali convention.jfif' },
  { name: 'Kigali Genocide Memorial', location: 'Gisozi, KG 14 Ave', image: '/src/assets/Kigali memorial.jfif' },
  { name: 'Kimironko Market', location: 'Kimironko Sector', image: '/src/assets/Kimironko Market.jfif' },
  { name: 'Mount Kigali Viewpoint', location: 'Nyamirambo Road', image: '/src/assets/Mount kigali.jfif' },
  { name: 'Kigali Night City', location: 'City Center', image: '/src/assets/Kigali night.jfif' },
  { name: 'Inema Arts Center', location: 'Kacyiru', image: '/src/assets/Inema Arts.jfif' }
]
</script>

<template>
<section class="px-6 py-10 bg-green-50 min-h-screen">

<h1 class="text-4xl font-bold text-green-800 text-center">KIGALI CITY</h1><br>

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