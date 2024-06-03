<script>
export default {
  name: "header",
};
</script>

<template>
  <header class="header">
    <div class="logo w-50">
      <img src="/img/logo.webp" alt="Logo" class="header-logo" />
    </div>
    <div class="menu w-50 h-100">
      <ul class="d-flex justify-content-around align-items-center">
        <router-link :to="{ name: 'home' }">HOME</router-link>
        <router-link :to="{ name: 'blog' }">BLOG</router-link>
        <router-link :to="{ name: 'about' }">ABOUT</router-link>
        <router-link :to="{ name: 'contact' }">CONTACTS</router-link>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
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
  ul {
    // align-items: center;
    height: 100%;
    li {
      list-style: none;
    }
  }
}
</style>
