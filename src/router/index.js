import { createRouter, createWebHistory } from "vue-router";
import Lockscreen from "../views/lockscreen.vue";

const routes = [
  {
    path: "/",
    name: "Lockscreen",
    component: Lockscreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
