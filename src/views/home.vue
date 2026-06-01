<script setup>
import photo from '/src/assets/lake kivu.jfif'
</script>

<template>
<!--hero section-->
  <section class="relative">
    <img src="/src/assets/lake kivu.jfif" class="w-full h-screen object-cover" alt="Rwanda">

    <div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-start pt-15">

      <h1 class="text-white text-5xl font-bold text-center">
        WELCOME TO TEMBERA U RWANDA PROJECT
      </h1><br><br>

      <p class="text-2xl text-white text-center">
        Discover the beauty of Rwanda
      </p><br><br>
      <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-center max-w-xl shadow-lg">

        <p class="text-white text-lg">
          Explore Rwanda’s mountains, lakes, wildlife and culture in one place.
        </p><br>

        <p class="text-gray-200 text-sm">
          Your journey through the Land of a Thousand Hills starts here with unforgettable experiences.
        </p>

      </div><br><br>

      <div class="flex gap-4">
        <router-link to="/services">
          <button class="bg-green-700 hover:bg-green-900 px-6 py-2 rounded-lg text-lg text-white">
            OUR SERVICES
          </button>
          </router-link>
        <router-link to="/about">
          <button class="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
            LEARN MORE
          </button>
        </router-link>

      </div>

    </div>
  </section>
</template>