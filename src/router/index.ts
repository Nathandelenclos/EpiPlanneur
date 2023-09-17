import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Tek1 from "@/views/Tek1.vue";
import Tek2 from "@/views/Tek2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Tek2,
    },
    {
      path: "/tek1",
      name: "tek1",
      component: Tek1
    },
    {
        path: "/tek2",
        name: "tek2",
        component: Tek2
    }
  ],
});

export default router;
