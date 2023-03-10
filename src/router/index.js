import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/HomePage.vue";
import About from "@/components/AboutPage.vue";
import Services from "@/components/ServicesPage.vue";
import Blog from "@/components/BlogPage.vue";
import Contact from "@/components/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/blog/:id",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory("/"),
});

export default router;
