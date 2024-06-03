<script>
import axios from "axios";
import Card from "../components/card.vue";
import store from "@/store";

export default {
  name: "blog",
  components: {
    Card,
  },
  data() {
    return {
      store,
      // projects: [],
    };
  },
  methods: {
    getUrl(apiUrl, type = "") {
      axios
        .get(apiUrl + type)
        .then((res) => {
          this.store.projects = res.data.data;
          switch (type) {
            case "technologies":
              this.store.technologies = res.data;
              break;
            case "types":
              this.store.types = res.data;
              break;
            default:
              this.store.projects = res.data.data;
              break;
          }
        })
        .catch((error) => {
          console.log("errore");
        });
    },
  },
  mounted() {
    this.getUrl(this.store.apiUrl, "projects");
    this.getUrl(this.store.apiUrl, "technologies");
    this.getUrl(this.store.apiUrl, "types");
  },
};
</script>

<template>
  <!-- <h1>blog</h1> -->
  <div class="container card-wrapper d-flex flex-wrap justify-content-around">
    <Card
      v-for="project in store.projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  min-height: 90vh;
  padding-top: 120px;
}
</style>
