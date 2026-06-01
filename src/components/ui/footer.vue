<script setup>
</script>

<template>
  <footer class="bg-green-800 text-yellow-300 text-center py-4 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
    <div>
    <h3 class="text-sm mt-2">TEMBERA U RWANDA.</h3>
    <p class="text-sm text-green-200">Discorver the beauty of land of a thousand hills</p>
    </div>
    <div>
      <h3 class="text-lg font-bold text-yellow-300 mt-3 mb-3">Quick links</h3>
      <ul class="text-sm text-green-200 space-y-2">
        <li><router-link to="/home" class="text-white hover:text-yellow-300 text-sm">HOME</router-link></li>
        <li><router-link to="/about" class="text-white hover:text-yellow-300  text-sm">ABOUT</router-link></li>
        <li><router-link to="/gallery" class="text-white hover:text-yellow-300 text-sm">GALLERY</router-link></li>
        <li><router-link to="/destination" class="text-white hover:text-yellow-300  text-sm">DESTINATION</router-link></li>
        <li><router-link to="/services" class="text-white hover:text-yellow-300 text-sm">SERVICES</router-link></li>
      </ul>
    </div>
    <!--destination-->
    <div>
      <h3 class="text-yellow-300 font-bold text-lg mb-3">Destination</h3>
      <ul class="space-y-2 text-sm">
        <li><router-link to="/northern" class=" text-white hover:bg-yellow-300">Northern Province</router-link></li>
        <li><router-link to="/eastern" class="hover:bg-yellow-300 text-white">Eastern Province</router-link></li>
        <li><router-link to="/southern" class="hover:bg-yellow-300 text-white">Southern Province</router-link></li>
            <li><router-link to="/western" class="hover:bg-yellow-300 text-white">Western Province</router-link></li>
          <li><router-link to="/kigali" class="hover:bg-yellow-300 text-white">Kigali city</router-link></li>
      </ul>
    </div>

    <!--contact info-->
    <div>
      <h3 class="text-yellow font-bold text-lg mb-3">Contact Info</h3>
      <ul calss="space-y-2">
        <li class="text-white">ahantunyaburanga@gmail.com</li>
        <li class="text-white">0784567890</li>
        <li class="text-white">Kagugu Kigali Rwanda</li>
      </ul>
    </div>
  </div>
  <!--copyright-->
  <div class="border-t text-sm border-green-600 mt-8 pt-4">
    <p class="text-center text-white">© 2026 visit Rwanda. All rights reserved</p>
    <p class="text-center text-white"> AKOGUTETA H.P Merylise</p>
  </div>
  </footer>
</template>