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
    getUrl(apiUrl, type = "") {
      axios
        .get(apiUrl + type)
        .then((res) => {
          // this.store.projects = res.data.data;
          switch (type) {
            case "technologies":
              this.store.technologies = res.data;
              break;
            case "types":
              this.store.types = res.data;
              break;
            default:
              this.store.projects = res.data.data;
              break;
          }

          console.log(this.store.projects);
          console.log(this.store.types);
          console.log(this.store.technologies);
        })
        .catch((error) => {
          error = error;
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getUrl(this.store.apiUrl, "technologies");
    this.getUrl(this.store.apiUrl, "types");
    this.getUrl(this.store.apiUrl, "projects");
  },
};
</script>

<template>
  <div>
    <p v-for="type in store.types" :key="type.id" class="card fisrt-para">
      {{ type.name }}
    </p>
  </div>
  <div>
    <p
      v-for="technology in store.technologies"
      :key="technology.id"
      class="card fisrt-para"
    >
      {{ technology.name }}
    </p>
  </div>

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
