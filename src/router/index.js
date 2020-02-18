import Vue from "vue";
import VueRouter from "vue-router";
import { getHost } from "../helperFunctions";

Vue.use(VueRouter);

const suppportRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/support/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/support/About.vue")
  }
];

const splashRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/splash/Home.vue")
  }
];

const host = getHost();

let routes;
switch (host) {
  case "support.us.openubiproject.org":
    routes = suppportRoutes;
    break;
  case "us.openubiproject.org":
    routes = splashRoutes;
    break;
  default:
    routes = [];
    break;
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
