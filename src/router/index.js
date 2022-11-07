import Vue from "vue";
import VueRouter from "vue-router";
import Error503 from "../views/503.vue";
import Error403 from "../views/403.vue";
import Error404 from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/error/503",
    name: "Maintenance",
    component: Error503,
    meta: {
      title: "Dashboard is under maintenance",
    },
  },
  {
    path: "/error/403",
    name: "Forbidden",
    component: Error403,
    meta: {
      title: "Forbidden",
    },
  },
  {
    path: "/error/404",
    name: "PageNotFound",
    component: Error404,
    meta: {
      title: "Page not found!",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
