<script>
import axios from "axios";
import store from "@/store";
import { gsap } from "gsap";
export default {
  data() {
    return {
      store,
      project: {},
      loading: true,
    };
  },

  methods: {
    getDetailApi(slug) {
      this.loading = true;
      axios
        .get(this.store.apiUrl + "project-detail/" + slug)
        .then((res) => {
          this.loading = false;
          this.project = res.data;
          console.log(this.project);
        })
        .catch((err) => {
          this.loading = false;

          console.log(err.message);
        });
    },
  },
  mounted() {
    this.getDetailApi(this.$route.params.slug);
  },
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div v-if="!loading" class="card border-0 shadow-sm">
      <img
        :src="`http://127.0.0.1:8000${project.image}`"
        class="card-img-top"
        alt="Project Image"
        ref="projectImage"
      />
      <div class="card-body" ref="cardBody">
        <h1 class="card-title">{{ project.name }}</h1>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text"><strong>Argomento:</strong> {{ project.topic }}</p>
      </div>
    </div>
    <div v-else class="text-center"><h3>loading</h3></div>
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
