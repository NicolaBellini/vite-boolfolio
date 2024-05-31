<script>
import axios from "axios";
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
};
</script>

<template>
  <main class="container">
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </main>
</template>

<style scoped></style>
