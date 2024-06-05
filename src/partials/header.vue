<script>
export default {
  name: "header",
};
</script>

<template>
  <header class="header">
    <router-link class="logo w-50" :to="{ name: 'home' }">
      <img src="/img/logo.webp" alt="Logo" class="header-logo" />
    </router-link>
    <div class="menu w-50 h-100">
      <ul class="d-flex justify-content-around align-items-center">
        <router-link :to="{ name: 'home' }">HOME</router-link>
        <router-link :to="{ name: 'blog' }">PROJECTS</router-link>
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
  background-color: #646464;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img {
    height: 80px;
    width: auto;
    mix-blend-mode: multiply;
  }
  ul {
    height: 100%;
    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #2b2b2b;
      }
    }
    .router-link-exact-active {
      color: #2b2b2b;
    }
  }
}
</style>
