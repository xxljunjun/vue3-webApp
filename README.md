#### 创建项目npm init vite@latest
```js
//该vite项目需要node版本大于16
nvm ls 查看所有已经安装的版本
nvm list available 查看网络上可以安装的版本
nvm install 16.17.0
nvm use 16.17.0
```
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

#### 安装vantUI组件库
```js

npm install vant -S

//按需引入
npm i unplugin-vue-components -D
//需要配置vite.config

```

#### 移动端适配
```js
npm install postcss-pxtorem --save-dev
npm install amfe-flexible --save-dev
//main.ts
import 'amfe-flexible'
//vite.config.js中配置postcss-pxtorem
export default defineConfig({
  ...
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
...
})
```