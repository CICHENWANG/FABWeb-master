import Vue from "vue";
import VueRouter from "vue-router";

import tool from "./tools";
// import Login from '@/views/settings/login/indexPage.vue';

Vue.use(VueRouter);

const AsyncLoad = tool.AsyncLoad;

const routes = [
   {
        path: '/login',
        name: "loginWindowBase",
        component: () => AsyncLoad(import('@/views/settings/login/login.vue')),
        meta: { hideIcon: true }
    },
    {
        path: '/apply',
        name: "applyWindowBase",
        component: () => AsyncLoad(import('@/views/settings/login/apply.vue')),
        meta: { hideIcon: true }
    },
    {
        path: '/forgot',
        name: "applyWindowBase",
        component: () => AsyncLoad(import('@/views/settings/login/forgot.vue')),
        meta: { hideIcon: true }
    },
    {/**/
        path: "/partitions/:id",
        name: "Home",
        component: () => AsyncLoad(import("@/views/home"))
    },
    {
        path: "/notebook/:path",
        name: "NoteBook",
        component: () => AsyncLoad(import("@/views/notebook"))
    },
    {
        path: "/notebook/remote/:path",
        name: "NoteBook",
        component: () => AsyncLoad(import("@/views/notebook"))
    },
    {
        path: "/templates",
        name: "Templates",
        component: () => AsyncLoad(import("@/views/templates"))
    },
    {
        path: "/settings",
        name: "Settings",
        component: () => AsyncLoad(import("@/views/settings"))
    },
    {
        path: "/dev",
        name: "Dev",
        component: () => AsyncLoad(import("@/views/dev"))
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    // 从localStorage获取token
    const token = localStorage.getItem('ApiToken');
    // 从localStorage获取token的过期时间
    const expirationDate = localStorage.getItem('ApiTokenExpiredAt');
    const now = new Date();

    // 检查token是否存在且未过期
    if (token && new Date(expirationDate) > now) {
        console.log(token+1)
        // token有效
        next();
    } else {
        // token无效或不存在
        if (to.path !== '/login'&&to.path !=='/apply'&&to.path !=='/forgot') {
            // 如果当前不是在登录页面，重定向到登录页面
            next({ path: '/login' });
        } else {
            // 如果已经在登录页面，允许继续
            next();
        }
    }
});



export default router;