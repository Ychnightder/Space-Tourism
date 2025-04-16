import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'

const routes = [
  { path: '/home', component: Home },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
