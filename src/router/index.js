import { createRouter, createWebHistory } from "vue-router";
import Lockscreen from "../views/lockscreen.vue";
import Homescreen from "../views/homescreen.vue";

const routes = [
  {
    path: "/",
    name: "Lockscreen",
    component: Lockscreen,
  },
  {
    path: "/homescreen",
    name: "Home",
    component: Homescreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
