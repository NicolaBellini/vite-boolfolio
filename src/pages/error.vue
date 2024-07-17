<template>
  <div class="error-container">
    <h1 class="error-title">Errore</h1>
    <p class="error-message">Pagina non trovata</p>
  </div>
</template>

<style scoped>
.error-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.error-title {
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
}

.error-message {
  font-size: 1.5rem;
  color: #666;
}
</style>

<script>
export default {};
</script>
