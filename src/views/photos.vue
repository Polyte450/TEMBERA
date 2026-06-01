<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const photos = [
  { name: 'Kigali Convention Centre', src: '/src/assets/Kigali convention.jfif' },
  { name: 'Lake Kivu Sunset', src: '/src/assets/LLake kivu.jfif' },
  { name: 'Musanze Caves', src: '/src/assets/Musanze caves.jfif' },
  { name: 'Nyungwe Forest Walk', src: '/src/assets/Nyungwe Forest.jfif' },
  { name: 'Rubavu Beach', src: '/src/assets/Rubavu beach.jfif' },
  { name: 'Akagera Safari', src: '/src/assets/Akagera safari.jfif' }
]

const filtered = computed(() =>
  photos.filter(photo =>
    photo.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const downloadPhoto = (src) => {
  const a = document.createElement('a')
  a.href = src
  a.download = src.split('/').pop()
  a.click()
}
</script>

<template>
<section class="min-h-screen bg-gradient-to-b from-green-100 to-white px-6 py-10">

  <h1 class="text-5xl font-bold text-center text-green-800">
    PHOTOS
  </h1><br>

  <div class="flex justify-center mb-10">
    <input
      v-model="search"
      placeholder="Search photos..."
      class="w-96 p-4 rounded-2xl border border-green-300 shadow-lg outline-none"
    >
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div
      v-for="photo in filtered"
      :key="photo.name"
      class="bg-white rounded-3xl shadow-xl p-4"
    >

      <img :src="photo.src" class="w-full h-56 object-cover rounded-2xl">

      <h2 class="text-lg font-bold text-green-800 mt-3">
        {{ photo.name }}
      </h2>

      <button
        @click="downloadPhoto(photo.src)"
        class="mt-3 bg-green-700 text-white px-4 py-2 rounded-lg"
      >
        Download Photo
      </button>

    </div>

  </div>

</section>
</template>