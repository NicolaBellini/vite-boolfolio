<script>
export default {
  name: "HeroSection",
};
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Nicola Bellini</h1>
      <h2 class="hero-subtitle">Scopri i progetti</h2>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../scss/typo";

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("/img/hero-bg.avif") no-repeat center center;
  background-size: cover;
  color: #000000;
  text-align: center;

  &-title {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  &-subtitle {
    font-size: 1.5em;
    font-weight: 300;
  }
}
</style>
