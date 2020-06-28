import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: () => import(/* webpackChunkName: "form" */ "../views/Form.vue"),
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: () =>
      import(/* webpackChunkName: "checkbox" */ "../views/Checkbox.vue"),
  },
  {
    path: "/alert",
    name: "Alert",
    component: () =>
      import(/* webpackChunkName: "alert" */ "../views/Alert.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
