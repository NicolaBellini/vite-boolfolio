<script>
import store from "../store";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<template>
  <div class="container">
    <!-- <h2 class="section-title">Skills</h2> -->
    <div class="row position-relative">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <!-- <swiper-slide></swiper-slide> -->
        <swiper-slide
          class="slide d-flex justify-content-center align-items-center"
          v-for="type in store.types.types"
          :key="type.id"
        >
          <router-link
            class="ms-4"
            :to="{ name: 'typeProjects', params: { id: type.id } }"
          >
            {{ type.name }}
          </router-link>
          <ul>
            <li v-for="project in type.projects" :key="project.id">
              <router-link
                :to="{ name: 'detailProject', params: { slug: project.slug } }"
              >
                {{ project.name }}
              </router-link>
            </li>
          </ul>
        </swiper-slide>
      </swiper>
      <div class="gradient-left"></div>
      <div class="gradient-right"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide {
  min-height: 200px;
  a {
    color: grey;
    font-size: 3rem;
  }
  ul {
    li {
      list-style: none;
      a {
        font-weight: 100;
        color: grey;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
