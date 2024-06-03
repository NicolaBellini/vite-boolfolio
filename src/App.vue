<script>
import HeroSection from "./components/hero.vue";
import Header from "./partials/header.vue";
import footer from "./partials/footer.vue";

export default {
  components: {
    HeroSection,
    Header,
    footer,
  },
};
</script>

<template>
  <Header />
  <!-- <HeroSection /> -->
  <main class="container">
    <router-view></router-view>
  </main>
  <footer />
</template>

<style scoped lang="scss">
@import "./scss/_typo.scss";
main {
  padding-top: 100px;
}
</style>
