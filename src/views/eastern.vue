<script setup>
const places = [
  { name: 'Akagera Safari', location: 'Kayonza', image: '/src/assets/Akagera safari.jfif' },
  { name: 'Lake Muhazi', location: 'Rwamagana', image: '/src/assets/Lake muhazi.jfif' },
  { name: 'Rwamagana Beach', location: 'Rwamagana Center', image: '/src/assets/Rwamagana beach.jfif' },
  { name: 'Nyagatare Plains', location: 'Nyagatare District', image: '/src/assets/Nyagatare plains.jfif' },
  { name: 'Bugesera Lake View', location: 'Bugesera', image: '/src/assets/Bugesera lake.jfif' },
  { name: 'Safari Camp Site', location: 'Akagera Border', image: '/src/assets/Safari campi.jfif' }
]
</script>

<template>
<section class="px-6 py-10 bg-green-50 min-h-screen">

<h1 class="text-4xl font-bold text-green-800 text-center">EASTERN PROVINCE</h1><br>

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