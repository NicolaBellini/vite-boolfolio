import "./scss/main.scss"; // Import SCSS styles

import { createApp } from "vue"; // Import Vue's createApp function
import App from "./App.vue"; // Import the root component

// Initialize and mount the Vue application
createApp(App).mount("#app");

// Example GSAP animation
// gsap.to("body", { duration: 0.5, backgroundColor: "#ff69b4" });
