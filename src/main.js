import "./scss/main.scss"; // Import SCSS styles

import { createApp } from "vue"; // Import Vue's createApp function
import App from "./App.vue"; // Import the root component
import { router } from "./router.js";

// Initialize and mount the Vue application
createApp(App).use(router).mount("#app");

gsap.to(".hero-content", {
  // top: "30%",
  left: "16%",
  opacity: 1,
  scale: 1.6,
  duration: 1,
});

gsap.from(".hero-img", {
  // scale: 0.5,
  // right: "-80%",
  ease: Power3.easeout,
  rigth: "-5%",
  opacity: 0,
  scale: 0.8,
  right: 0,
  duration: 1.2,
  delay: 0.3,
});

gsap.from(".hero-bg", {
  ease: Power3.easeout,
  rigth: "15%",
  opacity: 0,
  scale: 0.8,
  right: 0,
  duration: 1.2,
  delay: 0.7,
});

gsap.from(".hero-main1", {
  ease: Power3.easeout,
  rigth: "15%",
  opacity: 0,
  scale: 0.8,
  right: 0,
  duration: 1.2,
  delay: 0.7,
});
gsap.from(".hero-main2", {
  ease: Power3.easeout,
  rigth: "15%",
  opacity: 0,
  scale: 0.8,
  right: 0,
  duration: 1.2,
  delay: 0.7,
});
gsap.from(".hero-main3", {
  ease: Power3.easeout,
  rigth: "15%",
  opacity: 0,
  scale: 0.8,
  right: 0,
  duration: 1.2,
  delay: 0.7,
});
