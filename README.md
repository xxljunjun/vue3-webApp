#### 创建项目npm init vite@latest
+ 初始项目版本
```
"dependencies": {
    "vue": "^3.2.37"
},
"devDependencies": {
    "@vitejs/plugin-vue": "^3.0.3",
    "typescript": "^4.6.4",
    "vite": "^3.0.7",
    "vue-tsc": "^0.39.5"
}

```
#### 踩坑：vitevite中不支持require()
```js
// npm install --save-dev @types/node
// 配置路由别名@
import path from 'path'
 //设置路径别名
resolve:{
    alias: {
    '@': path.resolve(__dirname, './src'),
    },
},
```

#### sass
```js
// # Sass
npm install -D sass-loader sass

// # Less
npm install -D less-loader less

// # Stylus
npm install -D stylus-loader stylus

npm install style-resources-loader -D
```

#### 配置路由
```js
// npm install -S vue-router@next
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home/index.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/about/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

```