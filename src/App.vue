<script>
import HeroSection from "./components/hero.vue";
import Footer from "./partials/footer.vue";
import Header from "./partials/header.vue";
import store from "./store";

export default {
  components: {
    HeroSection,
    Header,
    Footer,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.store.getUrl(this.store.apiUrl, "technologies");
    this.store.getUrl(this.store.apiUrl, "types");
    console.log(this.store.types);
  },
};
</script>

<template>
  <Header />
  <main class="container-fluid">
    <router-view></router-view>
  </main>

  <Footer />
</template>

<style scoped lang="scss">
@import "./scss/_typo.scss";
main {
  padding-top: 100px;
  min-height: 90vh;
}
</style>
