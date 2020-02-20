import Vue from "vue";
import VueRouter from "vue-router";
import { getHost } from "../helperFunctions";

Vue.use(VueRouter);

const suppportRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/support/Home.vue")
  }
];

const splashRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/splash/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "splash-about" */ "../views/splash/About.vue")
  },
  {
    path: "/pledge",
    name: "Candidate Pledge",
    component: () =>
      import(
        /* webpackChunkName: "splash-pledge" */ "../views/splash/Pledge.vue"
      )
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

console.log(host, routes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
