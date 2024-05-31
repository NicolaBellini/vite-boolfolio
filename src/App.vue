<script>
import axios from "axios";
import HeroSection from "./components/hero.vue";

export default {
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
  components: {
    HeroSection,
  },
};
</script>

<template>
  <HeroSection />
  <main class="container">
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </main>
</template>

<style scoped>
@import "./scss/_typo.scss";
</style>
