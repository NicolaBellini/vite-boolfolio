<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  // props: {
  //   project: Object,
  // },
  mounted() {
    // gsap.to(".card.fisrt-para", {
    //   // y: "-20",
    //   opacity: "1",
    //   duration: "1",
    //   delay: ".2",
    // });
  },
};
</script>

<template>
  <div
    v-for="project in store.projects"
    :key="project.id"
    class="card fisrt-para col-md-10"
  >
    <img
      src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
      alt=""
    />
    <div class="card-content">
      <h2>{{ project.name }}</h2>
      <p>Argomento: {{ project.topic }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin-bottom: 50px;
  padding: 70px;
  width: 40%;
  opacity: 1;

  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: white;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    transition: opacity 0.2s ease-out;
  }

  h2 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    color: white;
    transition: inset 0.3s 0.3s ease-out;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: normal;
    text-transform: uppercase;
  }

  p,
  a {
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity 0.3s ease-out;
  }

  p {
    inset: auto auto 80px 30px;
  }

  a {
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
  }

  &:hover h2 {
    inset: auto auto 220px 30px;
    transition: inset 0.3s ease-out;
  }

  &:hover p,
  &:hover a {
    opacity: 1;
    transition: opacity 0.5s 0.1s ease-in;
  }

  &:hover img {
    transition: opacity 0.3s ease-in;
    opacity: 1;
  }
}

.material-symbols-outlined {
  vertical-align: middle;
}
</style>
