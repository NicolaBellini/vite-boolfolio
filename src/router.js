import { createRouter, createWebHistory } from "vue-router";
import home from "./pages/home.vue";

import blog from "./pages/blog.vue";
import contact from "./pages/contact.vue";
import detailProject from "./pages/detailProject.vue";
import typeProjects from "./pages/typeProjects.vue";
import technologyProjects from "./pages/technologyProjects.vue";
import error from "./pages/error.vue";

const router = createRouter({
  // salva nella history el browser tutta la navigazione
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/blog",
      name: "blog",
      component: blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "/detailProject/:slug",
      name: "detailProject",
      component: detailProject,
    },
    {
      path: "/typeProjects/:id",
      name: "typeProjects",
      component: typeProjects,
    },
    {
      path: "/technologyProjects/:id",
      name: "technologyProjects",
      component: technologyProjects,
    },
    {
      path: "/:pathMatch(.*)",
      name: "error",
      component: error,
    },
  ],
});

export { router };
