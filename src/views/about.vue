<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import img1 from '/src/assets/KCC.jfif'
import img2 from '/src/assets/Rwanda lake.jfif'
import img3 from '/src/assets/mountain.jfif'
import img4 from '/src/assets/Volcanoes National Park.jfif'
import img5 from '/src/assets/LLake kivu.jfif'
import img6 from '/src/assets/Kigali memorial.jfif'

const router = useRouter()

const images = [img1, img2, img3, img4, img5, img6]
const index = ref(0)

onMounted(() => {
  setInterval(() => {
    index.value = (index.value + 1) % images.length
  }, 5000)
})

const goToDest = () => {
  router.push('/destination')
}
</script>

<template>
<section class="relative">

  <img :src="images[index]" class="w-full h-screen object-cover" alt="Rwanda">

  <div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-start pt-10">

    <h1 class="text-white text-5xl font-bold text-center">
      ABOUT RWANDA TOURISM
    </h1><br>

    <p class="text-2xl text-white text-center">
      Discover Rwanda’s beauty, culture and adventure
    </p><br>

    <!-- ROW 1 -->
    <div class="flex gap-6">
      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-64 text-white text-sm text-center">
        Rwanda is the Land of a Thousand Hills with peaceful culture and natural beauty.
      </div>

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-64 text-white text-sm text-center">
        Kigali is one of Africa’s cleanest cities with modern tourism infrastructure.
      </div>
    </div><br>

    <!-- ROW 2 -->
    <div class="flex gap-6">
      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-64 text-white text-sm text-center">
        Wildlife includes gorillas, lions, elephants and many rare species in national parks.
      </div>

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-64 text-white text-sm text-center">
        Rwanda is rich in mountains, lakes, volcanoes and green landscapes across the country.
      </div>
    </div><br>

    <!-- CENTER BOX -->
    <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-80 text-white text-sm text-center">
      Top activities include gorilla trekking, safaris, hiking, boat rides and cultural tours.
    </div><br>

    <!-- MISSION & VISION -->
    <div class="flex gap-6">

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-72 text-white text-sm text-center">
        <h2 class="text-lg font-bold mb-2">Mission</h2>
        To promote Rwanda tourism and showcase its beauty, culture, and adventure to the world.
      </div>

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl w-72 text-white text-sm text-center">
        <h2 class="text-lg font-bold mb-2">Vision</h2>
        To become the leading digital tourism guide platform in East Africa.
      </div>

    </div><br>

    <!-- BUTTON -->
    <RouterLink to="/destination">
  <button class="bg-green-700 hover:bg-green-900 px-6 py-2 rounded-lg text-white">
    FIND PLACES
  </button>
</RouterLink>

  </div>

</section>
</template>