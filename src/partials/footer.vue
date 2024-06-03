<script>
export default {};
</script>
<template>
  <footer>
    <div>
      <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2024 Nicola Bellini. Tutti i diritti riservati.</p>
          <nav>
            <ul class="footer-nav">
              <router-link :to="{ name: 'home' }">HOME</router-link>
              <router-link :to="{ name: 'blog' }">BLOG</router-link>
              <router-link :to="{ name: 'about' }">ABOUT</router-link>
              <router-link :to="{ name: 'contact' }">CONTACTS</router-link>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #222;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  font-size: 0.9em;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4e4e4e;
    }
  }
  .router-link-exact-active {
    color: #727272;
  }
}
</style>
