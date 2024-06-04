<script>
import axios from "axios";
import store from "@/store";
export default {
  data() {
    return {
      store,
      project: {},
    };
  },
  methods: {
    getApi(slug) {
      axios
        .get(this.store.apiUrl + "project-detail/" + slug)
        .then((res) => {
          this.project = res.data;
          console.log(this.project);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    this.getApi(this.$route.params.slug);
    console.log(this.$route.params.slug);
  },
};
</script>

<template>
  <h1>detailProject</h1>
</template>

<style></style>
