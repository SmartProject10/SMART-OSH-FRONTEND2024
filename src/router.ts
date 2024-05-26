
import App from '@/App.vue';
import VueRouter from "vue-router";

import Home from "@/pages/index.vue";
import Users from "@/pages/second-page.vue";

App.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
