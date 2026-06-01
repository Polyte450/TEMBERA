<script setup>
const services = [
  {
    title: 'Tour Guides',
    desc: 'Professional guides to help you explore Rwanda safely and deeply.',
    icon: '🧭'
  },
  {
    title: 'Hotel Booking',
    desc: 'We help you find and book the best hotels across all provinces.',
    icon: '🏨'
  },
  {
    title: 'Transport Services',
    desc: 'Safe and affordable travel across cities and tourist destinations.',
    icon: '🚗'
  },
  {
    title: 'Safari Packages',
    desc: 'Experience wildlife adventures in Akagera and national parks.',
    icon: '🦁'
  },
  {
    title: 'Cultural Tours',
    desc: 'Discover Rwanda’s culture, museums, and traditional villages.',
    icon: '🎭'
  },
  {
    title: 'Photography Trips',
    desc: 'Capture Rwanda’s beauty with guided scenic photography tours.',
    icon: '📸'
  }
]
</script>

<template>
<section class="min-h-screen bg-gradient-to-b from-green-100 to-white px-6 py-10">

  <h1 class="text-5xl font-bold text-center text-green-800">
    OUR SERVICES
  </h1><br>

  <p class="text-center text-gray-600 text-xl">
    Everything you need for your Rwanda travel experience
  </p><br><br>

  <!-- GRID -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div
      v-for="s in services"
      :key="s.title"
      class="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-xl hover:scale-105 duration-300"
    >

      <div class="text-5xl mb-4">
        {{ s.icon }}
      </div>

      <h2 class="text-2xl font-bold text-green-800">
        {{ s.title }}
      </h2>

      <p class="text-gray-600 mt-2">
        {{ s.desc }}
      </p>

    </div>

  </div>

</section>
</template>