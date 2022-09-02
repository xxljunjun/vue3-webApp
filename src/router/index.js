import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect:'/home/find',
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta:{isTab:true},
        children:[
            {
                path: "/home/care",
                name: "care",
                component: () => import("@/views/home/care/index.vue"),
            },
            {
                path: "/home/location",
                name: "location",
                component: () => import("@/views/home/location/index.vue"),
            },
            {
                path: "/home/find",
                name: "find",
                component: () => import("@/views/home/find/index.vue"),
            },
            
        ]
    },{
        path: "/message",
        name: "message",
        meta:{isTab:true},
        component: () => import("@/views/message/index.vue")
    },{
        path: "/myVideo",
        name: "myVideo",
        meta:{isTab:true},
        component: () => import("@/views/myVideo/index.vue")
    },{
        path: "/mine",
        name: "mine",
        meta:{isTab:true},
        component: () => import("@/views/mine/index.vue")
    },
    {
        path: "/search",
        name: "search",
        component: () => import("@/views/home/search/index.vue"),
        children:[
            {
                path: "/search/searchDeatal",
                name: "searchDeatal",
                component: () => import("@/views/home/search/searchDeatal/searchDeatal.vue"),
            },  
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
