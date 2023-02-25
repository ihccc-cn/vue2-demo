import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app.vue";
import routes from "./routes";
import "./style.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

const app = new Vue({
  router,
  render: h => h(App),
});

app.$mount("#app");
