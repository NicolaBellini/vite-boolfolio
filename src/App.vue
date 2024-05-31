<script>
import axios from "axios";
export default {
  methods: {
    getUrl() {
      axios
        .get("http://127.0.0.1:8000/api/projects")
        .then((res) => {
          console.log("ciao");
        })
        .catch((error) => {
          console.log("errore");
        });
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<template>
  <h1>ciaos</h1>
</template>

<style scoped></style>
