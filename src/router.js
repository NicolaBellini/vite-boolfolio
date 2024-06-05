import { createRouter, createWebHistory } from "vue-router";
import home from "./pages/home.vue";
import about from "./pages/about.vue";
import blog from "./pages/blog.vue";
import contact from "./pages/contact.vue";
import detailProject from "./pages/detailProject.vue";
import typeProjects from "./pages/typeProjects.vue";
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
      path: "/about",
      name: "about",
      component: about,
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
      path: "/:pathMatch(.*)",
      name: "error",
      component: error,
    },
  ],
});

export { router };
