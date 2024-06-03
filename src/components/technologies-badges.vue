<script>
export default {
  data() {
    return {
      sponsors: [
        { name: "Sponsor 1" },
        { name: "Sponsor 2" },
        { name: "Sponsor 3" },
        // Aggiungi altri sponsor se necessario
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <h2 class="section-title">I nostri Sponsor</h2>
    <div class="row">
      <div class="col-md-4" v-for="(sponsor, index) in sponsors" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ sponsor.name }}</h5>
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

<style lang="scsss" scoped></style>
