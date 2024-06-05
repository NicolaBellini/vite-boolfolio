<script>
import axios from "axios";
import store from "@/store";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import { gsap } from "gsap";
export default {
  data() {
    return {
      store,
      projects: [],
      loading: true,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="slide" v-for="project in projects" :key="project.id">
        <img
          :src="project.image"
          class="card-img-top"
          alt="Project Image"
          ref="projectImage"
        />
        <div class="project-details d-flex flex-column">
          <h2 class="project-name">{{ project.name }}</h2>
          <h2 class="project-name">{{ project.topic }}</h2>

          <!-- Aggiungi altri dettagli del progetto qui -->
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.card-img-top {
  width: 100%;
  object-fit: contain;
  max-height: 50vh;
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
