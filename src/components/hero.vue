<script>
import { gsap, Power3 } from "gsap";

export default {
  name: "HeroSection",
  mounted() {
    gsap.to(".hero-content", {
      opacity: 1,
    });

    gsap.from(".hero-img", {
      ease: Power3.easeOut,
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
    });

    gsap.from(".hero-bg", {
      ease: Power3.easeOut,
      right: "15%",
      opacity: 0,
      scale: 0.8,
      right: 0,
      duration: 0.2,
      delay: 0.7,
    });

    gsap.from(".hero-main1", {
      ease: Power3.easeOut,
      right: "15%",
      opacity: 0,
      scale: 0.8,
      right: 0,
      duration: 0.5,
      delay: 0.7,
    });

    gsap.from(".hero-main2", {
      ease: Power3.easeOut,
      right: "15%",
      opacity: 0,
      scale: 0.8,
      right: 0,
      duration: 0.2,
      delay: 0.7,
    });

    gsap.from(".hero-main3", {
      ease: Power3.easeOut,
      right: "15%",
      opacity: 0,
      scale: 0.8,
      right: 0,
      duration: 0.3,
      delay: 0.7,
    });
  },
};
</script>

<template>
  <section class="hero">
    <!-- <img class="hero-img" src="/img/hero-bg.avif" alt="" /> -->

    <img class="hero-bg" src="/img/hero-behind.avif" alt="" />

    <img class="hero-main1" src="/img/hero-behind.avif" alt="" />

    <img class="hero-main2" src="/img/hero-behind.avif" alt="" />

    <img class="hero-main3" src="/img/hero-behind.avif" alt="" />

    <div class="hero-content d-flex flex-column align-item-end">
      <h1 class="hero-title">Nicola Bellini</h1>
      <h2 class="hero-subtitle">home</h2>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../scss/typo";

.hero {
  margin-bottom: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // overflow: hidden;

  color: #000000;
  text-align: center;

  &-content {
    position: absolute;
    top: 30%;
    left: 10%;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 0.5em;
    opacity: 0;
  }

  .hero-img {
    position: absolute;
    z-index: -2;
    right: 10%;
    height: 300px;
    width: 300px;
    object-fit: cover;
  }

  .hero-bg {
    position: absolute;
    z-index: -1;
    height: 100px;
    right: 0;
    bottom: -100px;
  }

  .hero-main1 {
    position: absolute;
    z-index: -1;
    height: 300px;
    left: 0;
    // bottom: -850px;
  }

  .hero-main2 {
    position: absolute;
    z-index: -1;
    height: 300px;
    right: 100px;
    // bottom: -1050px;
  }

  .hero-main3 {
    position: absolute;
    z-index: -1;
    height: 300px;
    left: 40px;
    // bottom: -1550px;
  }
}
</style>
