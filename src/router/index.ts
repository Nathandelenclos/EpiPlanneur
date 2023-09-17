import { createRouter, createWebHistory } from "vue-router";
import Tek2 from "@/views/Tek2.vue";
import Tek3 from "@/views/Tek3.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Tek3,
    },
    {
      path: "/tek2",
      name: "tek2",
      component: Tek2
    },
    {
        path: "/tek3",
        name: "tek3",
        component: Tek3
    }
  ],
});

export default router;
