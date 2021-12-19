import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Markdown from "vue3-markdown-it";
import "./assets/styles/style.css";
import "./assets/styles/mobile-nav.css";
import "highlight.js/styles/nord.css";

createApp(App).use(router).use(Markdown).mount("#app");
