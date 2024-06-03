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
        :slides-per-view="5"
        :space-between="50"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <!-- <swiper-slide></swiper-slide> -->
        <swiper-slide
          class="slide"
          v-for="technology in store.technologies"
          :key="technology.id"
          >{{ technology.name }}</swiper-slide
        >
      </swiper>
      <div class="gradient-left"></div>
      <div class="gradient-right"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  // padding-bottom: 70px;
  height: 200px;
  display: flex;
  align-items: center;
}
.section-title {
  margin-bottom: 30px;
}
.row {
  overflow: hidden;
  color: rgb(88, 88, 88);
}

.gradient-left,
.gradient-right {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  width: 100px;
  pointer-events: none;
}
.gradient-left {
  left: 0;
  background: linear-gradient(to right, #cecece, rgba(255, 255, 255, 0));
}
.gradient-right {
  right: 0;
  background: linear-gradient(to left, #cecece, rgba(255, 255, 255, 0));
}
</style>
