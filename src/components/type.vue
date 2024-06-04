<template>
  <div class="card-container">
    <div class="card">
      <h3 class="title">Titolo 1</h3>
    </div>

    <div class="card">
      <h3 class="title">Titolo 2</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  width: 100%;

  justify-content: space-around;
  align-items: center;
}

.card {
  background-color: #2e2e2e52;

  padding: 20px;
  height: 150px;
  border-radius: 5px;

  width: 40%;
}

.title {
  font-size: 18px;

  font-weight: bold;

  margin: 0;

  color: #333;
}
</style>
