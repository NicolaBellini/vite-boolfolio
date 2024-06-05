<script>
import axios from "axios";
import Card from "../components/card.vue";
import store from "../store";

export default {
  name: "blog",
  components: {
    Card,
  },
  data() {
    return {
      store,
      // projects: [],
    };
  },
  methods: {},
  mounted() {
    this.store.getUrl(this.store.apiUrl, "technologies");
    this.store.getUrl(this.store.apiUrl, "types");
    this.store.getUrl(this.store.apiUrl, "projects");
    console.log(this.store.projects);
  },
};
</script>

<template>
  <div class="container card-wrapper d-flex flex-wrap justify-content-around">
    <Card />
  </div>
</template>

<style scoped lang="scss">
.card-wrapper {
  min-height: 90vh;
  padding-top: 120px;
}
</style>
