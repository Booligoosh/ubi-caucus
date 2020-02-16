import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

if (window.location.hostname === "ubi-caucus.netlify.com") {
  window.location.hostname = "support.us.openubiproject.org";
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
