<script setup>
const places = [
  { name: 'King’s Palace Museum', location: 'Nyanza', image: '/src/assets/palace.jfif' },
  { name: 'Ethnographic Museum', location: 'Huye', image: '/src/assets/Ethno museum.jfif' },
  { name: 'Huye Cathedral', location: 'Huye Town', image: '/src/assets/Huye cathedral.jfif' },
  { name: 'Murambi Memorial', location: 'Gikongoro', image: '/src/assets/murambi.jfif' },
  { name: 'Coffee Plantation', location: 'Huye Hills', image: '/src/assets/coffeeplant.jfif' },
  { name: 'Nyamata Church Site', location: 'Bugesera', image: '/src/assets/Nyamata.jfif' }
]
</script>

<template>
<section class="px-6 py-10 bg-green-50 min-h-screen">

<h1 class="text-4xl font-bold text-green-800 text-center">SOUTHERN PROVINCE</h1><br>

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