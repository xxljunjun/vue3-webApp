import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home/index.vue")
    },{
        path: "/message",
        name: "message",
        component: () => import("@/views/message/index.vue")
    },{
        path: "/myVideo",
        name: "myVideo",
        component: () => import("@/views/myVideo/index.vue")
    },{
        path: "/mine",
        name: "mine",
        component: () => import("@/views/mine/index.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
