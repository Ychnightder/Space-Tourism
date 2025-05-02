import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Destination from "../views/Destination.vue";
import Crew from "../views/Crew.vue";
import Technology from "../views/Technology.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/index", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/destination", name: "Destination", component: Destination },
  { path: "/crew", name: "Crew", component: Crew },
  { path: "/technology", name: "Technology", component: Technology },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
