<script>
import axios from "axios";
import Card from "../components/card.vue";

export default {
  name: "blog",
  components: {
    Card,
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
  <!-- <h1>blog</h1> -->
  <div class="container card-wrapper d-flex flex-wrap justify-content-around">
    <Card v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  min-height: 90vh;
  padding-top: 120px;
}
</style>
