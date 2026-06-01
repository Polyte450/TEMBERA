<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const videos = [
  { name: 'Kigali Drone View', src: '/kk.mp4', size: '55MB' },
  { name: 'Lake Kivu Flight', src: '/kivu.mp4', size: '50MB' },
  { name: 'Akagera Safari Ride', src: '/safari.mp4', size: '60MB' },
  { name: 'Gorilla Trekking', src: '/gogo.mp4', size: '65MB' },
  { name: 'Kigali Night View', src: '/night.mp4', size: '45MB' },
]

const filtered = computed(() =>
  videos.filter(video =>
    video.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
<section class="min-h-screen bg-gradient-to-b from-green-100 to-white px-6 py-10">

  <h1 class="text-5xl font-bold text-center text-green-800">
    VIDEOS
  </h1><br>

  <div class="flex justify-center mb-10">
    <input
      v-model="search"
      placeholder="Search videos..."
      class="w-96 p-4 rounded-2xl border border-green-300 shadow-lg outline-none"
    >
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div
      v-for="video in filtered"
      :key="video.name"
      class="bg-white rounded-3xl shadow-xl p-4"
    >

      <video
        :src="video.src"
        class="w-full h-56 object-cover rounded-2xl"
        autoplay
        muted
        loop
        playsinline
      ></video>

      <h2 class="text-lg font-bold text-green-800 mt-3">
        {{ video.name }}
      </h2>

      <p class="text-sm text-gray-500 mb-3">
        Size: {{ video.size }}
      </p>

      <a
        :href="video.src"
        download
        class="bg-black text-white px-4 py-2 rounded-lg text-sm"
      >
        Download Video
      </a>

    </div>

  </div>

</section>
</template>