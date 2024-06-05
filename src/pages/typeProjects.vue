<script>
import axios from "axios";
import store from "@/store";
import { gsap } from "gsap";
export default {
  data() {
    return {
      store,
      projects: [],
      loading: true,
    };
  },

  methods: {
    projectByType(id) {
      this.loading = true;
      axios
        .get(this.store.apiUrl + "getProjectByType/" + id)
        .then((res) => {
          this.loading = false;
          this.projects = res.data.projects;
          console.log(this.projects);
        })
        .catch((err) => {
          this.loading = false;

          console.log(err.message);
        });
    },
  },

  mounted() {
    this.projectByType(this.$route.params.id);
  },
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div
      class="card border-0 shadow-sm"
      v-for="project in projects"
      :key="project.id"
    >
      <!-- <img
        :src="project.image"
        class="card-img-top"
        alt="Project Image"
        ref="projectImage"
      /> -->
      <div class="card-body" ref="cardBody">
        <h1 class="card-title">{{ project.name }}</h1>
        <p class="card-text">{{ type }}</p>
        <p class="card-text">
          {{ technologies }}
        </p>
        <p class="card-text">{{ project.topic }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  width: 100%;
  height: auto;
}
.card-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.card-text {
  font-size: 1.1rem;
  color: #555;
}
.container {
  max-width: 800px;
}
</style>
