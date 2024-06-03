<script>
import store from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <h2 class="section-title">Skills</h2>
    <div class="row">
      <div
        class="col-md-4"
        v-for="technology in store.technologies"
        :key="technology.id"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ technology.name }}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              varius fermentum nunc a faucibus. Integer dignissim, ipsum ac
              varius venenatis, eros magna euismod lorem, id consectetur mi
              lacus nec libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-bottom: 70px;
}
.section-title {
  margin-bottom: 30px;
}
</style>
