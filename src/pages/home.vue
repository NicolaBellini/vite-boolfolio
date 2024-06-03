<script>
import sphere from "../components/sphere.vue";
import cubes from "../components/cubes.vue";
import technologiesBadges from "../components/technologies-badges.vue";
import { gsap } from "gsap";

export default {
  name: "home",
  components: {
    sphere,
    cubes,
    technologiesBadges,
  },

  mounted() {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(".hero-description", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1,
    });
    gsap.from(".btn", { opacity: 0, y: 50, duration: 1, delay: 1.5 });
  },
};
</script>

<template>
  <section
    class="home-section container d-flex align-items-center flex-column justify-content-center parallax-section"
  >
    <cubes class="cubes" />
    <div>
      <div class="hero">
        <h1 class="hero-title">Benvenuto nel mio Portfolio</h1>
        <p class="hero-description">
          Sono Nicola Bellini, sviluppatore web con una passione per la
          creazione di esperienze digitali interattive.
        </p>
        <router-link to="/blog" class="btn">Esplora i progetti</router-link>
      </div>
    </div>
  </section>
  <section class="sphere">
    <div class="d-flex justify-content-center">
      <sphere />
    </div>
  </section>
  <section class="technologies">
    <div class="d-flex justify-content-center">
      <technologiesBadges />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sphere {
  position: relative;
  h1 {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    color: white;
  }
}
.home-section {
  height: calc(95vh - 100px);
  width: 100vw !important;
  background-color: #cecece;
  padding: 100px 0;
  text-align: center;
  position: relative;

  .hero {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 800px;
    margin: 0 auto;

    .hero-title {
      font-size: 3rem;
      color: #333;
      margin-bottom: 20px;
    }

    .hero-description {
      font-size: 1.25rem;
      color: #555;
      margin-bottom: 30px;
    }

    .btn {
      display: inline-block;
      padding: 12px 30px;
      font-size: 1rem;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
}
</style>
