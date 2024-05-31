<script>
import axios from "axios";
import HeroSection from "./components/hero.vue";
import Card from "./components/card.vue";
import Header from "./partials/header.vue";

export default {
  components: {
    HeroSection,
    Card,
    Header,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getUrl() {
      axios
        .get("http://127.0.0.1:8000/api/projects")
        .then((res) => {
          this.projects = res.data.data;
          console.log(this.projects);
        })
        .catch((error) => {
          console.log("errore");
        });
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<template>
  <Header />
  <HeroSection />
  <main class="container">
    <div class="container d-flex flex-wrap justify-content-around">
      <Card v-for="project in projects" :key="project.id" :project="project" />
    </div>

    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </main>
</template>

<style scoped>
@import "./scss/_typo.scss";
</style>
