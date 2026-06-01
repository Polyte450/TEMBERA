<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const media = [
  { type: 'image', name: 'Kigali Convention Centre', src: '/src/assets/Kigali convention.jfif' },
  { type: 'video', name: 'Kigali Drone View', src: '/kk.mp4', size: '55MB' },

  { type: 'image', name: 'Lake Kivu Sunset', src: '/src/assets/LLake kivu.jfif' },
  { type: 'video', name: 'Lake Kivu Flight', src: '/kivu.mp4', size: '50MB' },

  { type: 'image', name: 'Musanze Caves', src: '/src/assets/Musanze caves.jfif' },
  { type: 'video', name: 'Akagera Safari Ride', src: '/safari.mp4', size: '60MB' },

  { type: 'image', name: 'Nyungwe Forest Walk', src: '/src/assets/Nyungwe Forest.jfif' },
  { type: 'video', name: 'Gorilla Trekking', src: '/gogo.mp4', size: '65MB' },

  { type: 'image', name: 'Rubavu Beach', src: '/src/assets/Rubavu beach.jfif' },
  { type: 'video', name: 'Kigali Night View', src: '/night.mp4', size: '45MB' },

  { type: 'image', name: 'Akagera Safari', src: '/src/assets/Akagera safari.jfif' },
]

// SEARCH
const filtered = computed(() =>
  media.filter(m =>
    m.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

// DOWNLOAD IMAGE
const downloadImage = (src) => {
  const a = document.createElement('a')
  a.href = src
  a.download = src.split('/').pop()
  a.click()
}
</script>

<template>
<section class="min-h-screen bg-gradient-to-b from-green-100 to-white px-6 py-10">

  <h1 class="text-5xl font-bold text-center text-green-800">
    GALLERY
  </h1><br>

  <p class="text-center text-gray-600 text-xl">
    Explore Rwanda through images and videos
  </p><br>

  <!-- SEARCH -->
  <div class="flex justify-center mb-10">

    <input
      v-model="search"
      placeholder="Search gallery..."
      class="w-96 p-4 rounded-2xl border border-green-300 shadow-lg outline-none"
    >

  </div>

  <!-- GRID -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div
      v-for="m in filtered"
      :key="m.name"
      class="bg-white rounded-3xl shadow-xl p-4 hover:scale-105 duration-300"
    >

      <!-- IMAGE -->
      <div v-if="m.type === 'image'">
        <img :src="m.src" class="w-full h-56 object-cover rounded-2xl">

        <h2 class="text-lg font-bold text-green-800 mt-3">
          {{ m.name }}
        </h2>

        <button
          @click="downloadImage(m.src)"
          class="mt-3 bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Download Photo
        </button>
      </div>

      <!-- VIDEO (AUTO PLAY FIXED) -->
      <div v-if="m.type === 'video'">

        <video
          :src="m.src"
          class="w-full h-56 object-cover rounded-2xl"
          autoplay
          muted
          loop
          playsinline
        ></video>

        <h2 class="text-lg font-bold text-green-800 mt-3">
          {{ m.name }}
        </h2>

        <p class="text-sm text-gray-500 mb-3">
          Size: {{ m.size }}
        </p>

        <a
          :href="m.src"
          download
          class="bg-black text-white px-4 py-2 rounded-lg text-sm"
        >
          Download Video
        </a>

      </div>

    </div>

  </div>

</section>
</template>