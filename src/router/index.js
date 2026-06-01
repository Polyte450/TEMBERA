import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/home.vue"
import About from "../views/about.vue"
import Services from "../views/Sevices.vue"
import Destination from "../views/destination.vue"
import Contact from "../views/contact.vue"
import gallery from "../views/Gallery.vue"


import western from "../views/western.vue"
import eastern from "../views/eastern.vue"
import northern from "../views/northern.vue"
import southern from "../views/southern.vue"
import Kigali from "../views/kigali.vue"
import photos from "../views/photos.vue"
import videos from "../views/videos.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: gallery
  },
  {
    path: '/western',
    name: 'Western',
    component: western
  },
  {
    path: '/eastern',
    name: 'Eastern',
    component: eastern
  },
  {
    path: '/northern',
    name: 'Northern',
    component: northern
  },
  {
    path: '/southern',
    name: 'Southern',
    component: southern
  },
  {
    path: '/kigali',
    name: 'Kigali',
    component: Kigali
  },
  {
    path: '/photos',
    name: 'Photos',
    component: photos
  },
  {
    path: '/videos',
    name: 'Videos',
    component: videos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router