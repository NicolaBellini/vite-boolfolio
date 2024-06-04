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
  methods: {
    // getUrl(apiUrl, type = "") {
    //   axios
    //     .get(apiUrl + type)
    //     .then((res) => {
    //       // this.store.projects = res.data.data;
    //       switch (type) {
    //         case "technologies":
    //           this.store.technologies = res.data;
    //           break;
    //         case "types":
    //           this.store.types = res.data;
    //           break;
    //         default:
    //           this.store.projects = res.data.data;
    //           break;
    //       }
    //       console.log(this.store.projects);
    //       console.log(this.store.types);
    //       console.log(this.store.technologies);
    //     })
    //     .catch((error) => {
    //       error = error;
    //       console.log(error.message);
    //     });
    // },
  },
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
