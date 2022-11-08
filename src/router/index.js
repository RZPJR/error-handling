import Vue from "vue";
import VueRouter from "vue-router";
import Error401 from "../views/401.vue";
import Error403 from "../views/403.vue";
import Error404 from "../views/404.vue";
import Error500 from "../views/500.vue";
import Error503 from "../views/503.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/error/401",
        name: "Unauthorized",
        component: Error401,
        meta: {
            title: "Unauthorized",
        }
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
    {
        path: "/error/500",
        name: "InternalServerError",
        component: Error500,
        meta: {
            title: "Internal server error",
        },
    },
    {
        path: "/error/503",
        name: "Maintenance",
        component: Error503,
        meta: {
            title: "Dashboard is under maintenance",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
