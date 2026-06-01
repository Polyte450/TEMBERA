<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const places = [
  { name: 'Nyamata Church Site', image: '/src/assets/Nyamata.jfif' },
  { name: 'Lake Kivu Sunset', image: '/src/assets/LLake kivu.jfif' },
  { name: 'Mount Kigali Viewpoint', image: '/src/assets/Mount kigali.jfif' },
  { name: 'Akagera Safari', image: '/src/assets/Akagera safari.jfif' },
  { name: 'Karongi Hills', image: '/src/assets/Karongi hills.jfif' },
  { name: 'Kimironko Market', image: '/src/assets/Kimironko Market.jfif' },
  { name: 'Volcanoes National Park', image: '/src/assets/Volcanoes National Park.jfif' },
  { name: 'Gisenyi Resort', image: '/src/assets/Gisenyi resort.jfif' },
  { name: 'Murambi Memorial', image: '/src/assets/murambi.jfif' },
  { name: 'Twin Lakes View', image: '/src/assets/Twin lakes.jfif' },

  { name: 'Rubavu Beach', image: '/src/assets/Rubavu beach.jfif' },
  { name: 'Coffee Plantation Tour', image: '/src/assets/coffeeplant.jfif' },
  { name: 'Musanze Caves', image: '/src/assets/Musanze caves.jfif' },
  { name: 'Rwamagana Beach', image: '/src/assets/Rwamagana beach.jfif' },
  { name: 'Ethnographic Museum', image: '/src/assets/Ethno museum.jfif' },
  { name: 'Gorilla Trekking', image: '/src/assets/gorilla.jfif' },
  { name: 'Canopy Walk Nyungwe', image: '/src/assets/Nyungwe Canopy Walk.jfif' },
  { name: 'Bugesera Lake View', image: '/src/assets/Bugesera lake.jfif' },
  { name: 'Huye Cathedral', image: '/src/assets/Huye cathedral.jfif' },
  { name: 'Safari Camp Site', image: '/src/assets/Safari campi.jfif' },

  { name: 'King’s Palace Museum', image: '/src/assets/palace.jfif' },
  { name: 'Kigali Night City', image: '/src/assets/Kigali night.jfif' },
  { name: 'Lake Muhazi Boat Ride', image: '/src/assets/Lake muhazi.jfif' },
  { name: 'Nyungwe Forest Walk', image: '/src/assets/Nyungwe Forest.jfif' },
  { name: 'Ruhengeri Town Walk', image: '/src/assets/Ruhengeri.jfif' },
  { name: 'Inema Arts Center', image: '/src/assets/Inema Arts.jfif' },
  { name: 'Kigali Convention Centre', image: '/src/assets/Kigali convention.jfif' },
  { name: 'Mount Bisoke', image: '/src/assets/Mount Bisoke.jfif' },
  { name: 'Kigali Genocide Memorial', image: '/src/assets/Kigali memorial.jfif' },
  { name: 'Nyagatare Plains', image: '/src/assets/Nyagatare plains.jfif' }
]

const filtered = computed(() =>
  places.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
<section class="min-h-screen bg-gradient-to-b from-green-100 to-white px-6 py-10">

  <h1 class="text-5xl font-bold text-center text-green-800">
    DESTINATIONS
  </h1><br>

  <p class="text-center text-gray-600 text-xl">
    Explore Rwanda’s beauty across all regions
  </p><br><br>

  <!-- SEARCH -->
  <div class="flex justify-center mb-10">

    <input
      v-model="search"
      placeholder="Search destination..."
      class="w-96 p-4 rounded-2xl border border-green-300 shadow-lg outline-none"
    >

  </div>

  <!-- GRID -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    <div
      v-for="p in filtered"
      :key="p.name"
      class="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300"
    >

      <img :src="p.image" class="w-full h-56 object-cover">

      <div class="p-5">
        <h2 class="text-xl font-bold text-green-800">
          {{ p.name }}
        </h2>
      </div>

    </div>

  </div>

</section>
</template>