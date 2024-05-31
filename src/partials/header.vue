<script>
export default {};
</script>
<template>
  <header class="header">
    <img src="/img/logo.webp" alt="Logo" class="header-logo" />
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    height: 80px;
    width: auto;
    mix-blend-mode: multiply;
  }
}
</style>
