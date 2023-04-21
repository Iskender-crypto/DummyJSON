import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    name: "admin",
    path: "/",
    component: () => import("../pages/admin.vue"),
  },
  {
    name: "product",
    path: "/products",
    component: () => import("../pages/product/index.vue"),
  },
  {
    name: "product-id",
    path: "/products/:id",
    component: () => import("../pages/product/id.vue"),
  },
  {
    name: "product",
    path: "/products",
    component: () => import("../pages/product/index.vue"),
  },
  {
    name: "quote-id",
    path: "/quotes/:id",
    component: () => import("../pages/quote/id.vue"),
  },
  {
    name: "todos",
    path: "/todos",
    component: () => import("../pages/todo/index.vue"),
  },
  {
    name: "todos-id",
    path: "/todos/:id",
    component: () => import("../pages/todo/id.vue"),
  },
  {
    name: "posts",
    path: "/posts",
    component: () => import("../pages/post/index.vue"),
  },
  {
    name: "post-id",
    path: "/posts/:id",
    component: () => import("../pages/post/id.vue"),
  },
  {
    name: "comments",
    path: "/comments",
    component: () => import("../pages/comment/index.vue"),
  },
  {
    name: "comment-id",
    path: "/comments/:id",
    component: () => import("../pages/comment/id.vue"),
  },
  {
    name: "user",
    path: "/users",
    component: () => import("../pages/user/index.vue"),
  },
  {
    name: "user-id",
    path: "/users/:id",
    component: () => import("../pages/user/id.vue"),
  },
  {
    name: "cart",
    path: "/carts",
    component: () => import("../pages/cart/index.vue"),
  },
  {
    name: "cart-id",
    path: "/carts/:id",
    component: () => import("../pages/cart/id.vue"),
  },
  {
    name: "cartProduct",
    path: "/carts/cartProducts",
    component: () => import("../pages/cart/cartProduct/index.vue"),
  },
  {
    name: "cartProduct-id",
    path: "/carts/cartProducts/:id",
    component: () => import("../pages/cart/cartProduct/id.vue"),
  },
  {
    name: "register",
    path: "/login/register",
    component: () => import("../pages/login/register.vue"),
    meta: {
      layout: "login",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
