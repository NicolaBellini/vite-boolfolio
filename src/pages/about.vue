<script>
export default {
  name: "About",
};
</script>
<template>
  <div class="about-container">
    <div class="about-content">
      <img />
      <div class="about-text">
        <h1>About Me</h1>
        <p>Hello! I'm [Your Name], a passionate [Your Profession].</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id
          imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f5f5f5;
  color: #333;
  font-family: "Roboto", sans-serif;
}

.about-content {
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 30px;
  border: 4px solid #ffca28;
}

.about-text {
  max-width: 600px;
}

.about-text h1 {
  margin-bottom: 15px;
  font-size: 28px;
  color: #ff6f00;
}

.about-text p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: #757575;
}
</style>
