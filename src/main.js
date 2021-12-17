import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/style.css";
import "./assets/styles/mobile-nav.css";

createApp(App).use(router).mount("#app");
