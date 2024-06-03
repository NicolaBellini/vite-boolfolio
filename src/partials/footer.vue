<script>
export default {
  name: "footer",
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section about">
          <h2>Chi siamo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div class="footer-section links">
          <h2>Link Utili</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Servizi</a></li>
            <li><a href="#">Chi Siamo</a></li>
            <li><a href="#">Contatti</a></li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h2>Contattaci</h2>
          <p>Email: info@example.com</p>
          <p>Telefono: +39 123 456 789</p>
        </div>
      </div>
      <div class="footer-bottom">&copy; 2024 | Tutti i diritti riservati</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
$background-color: #333;
$text-color: #fff;
$hover-color: #ddd;
$border-color: #444;

.footer {
  height: 100px;
  background-color: $background-color;
  color: $text-color;
  padding: 40px 0;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  .footer-section {
    flex: 1;
    padding: 20px;

    h2 {
      margin-bottom: 15px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;

        a {
          color: $text-color;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: $hover-color;
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid $border-color;
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .footer {
    .footer-content {
      flex-direction: column;
    }

    .footer-section {
      margin-bottom: 20px;
    }
  }
}
</style>
