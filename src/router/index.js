import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import About from "../views/About.vue";
import Products from "../views/FrontedAfLogin/Products.vue";
import Cart from "../views/FrontedAfLogin/Cart.vue";
import FrontendLayout from "../layout/Frontend.vue";
import FrontendAfterLogin from "../layout/FrontAfLogin/FrontAfLog.vue";
import Shop from "../views/Shop.vue";
import Footer from "../components/frontend/Footer.vue";
import Admin from "../views/Admin/Admin.vue";
import Backend from "../layout/Backend.vue";
Vue.use(VueRouter);

function authGuard(to, from, next) {
  let authen = false;

  if (localStorage.getItem("user")) {
    authen = true;
  } else {
    authen = false;
  }

  if (authen) {
    next();
  } else {
    next({ name: "Signin" });
  }
}

const routes = [
  {
    path: "/",
    name: "FrontendLayout",
    component: FrontendLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "Signin",
        name: "Signin",
        component: Signin,
      },
      {
        path: "Signup",
        name: "Signup",
        component: Signup,
      },
      {
        path: "About",
        name: "About",
        component: About,
      },
      {
        path: "Shop",
        name: "Shop",
        component: Shop,
      },
      {
        path: "Footer",
        name: "Footer",
        component: Footer,
      },
    ],
  },
  {
    path: "/front",
    name: "FrontendAfterLogin",
    component: FrontendAfterLogin,
    beforeEnter: authGuard,
    children: [
      {
        path: "products",
        name: "Products",
        component: Products,
      },
      {
        path: "cart",
        name: "Cart",
        component: Cart,
      },
      {
        path: "Footer",
        name: "Footer",
        component: Footer,
      },
    ],
  },
  {
    path: "/Backend",
    name: "Backend",
    component: Backend,
    beforeEnter: authGuard,
    children: [
      {
        path: "Admin",
        name: "Admin",
        component: Admin,
      },
    ],
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
