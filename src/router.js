import { createWebHistory, createRouter } from "vue-router";
import Introduction from "./components/Introduction.vue";
import Calculator from "./components/Calculator/Calculator.vue";
import Clock from "./components/Clock/Clock.vue";
import Markdown from "./components/Markdown/Markdown.vue";
import DrumMachine from "./components/Drum Machine/DrumMachine.vue";
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator.vue";

const routes = [
  {
    path: "/",
    name: "introduction",
    component: Introduction,
  },
  {
    path: "/calculator",
    name: "calculator",
    component: Calculator,
  },
  {
    path: "/25-5-clock",
    name: "clock",
    component: Clock,
  },
  {
    path: "/markdown",
    name: "markdown",
    component: Markdown,
  },
  {
    path: "/drum-machine",
    name: "drum-machine",
    component: DrumMachine,
  },
  {
    path: "/quote-generator",
    name: "quote-generator",
    component: QuoteGenerator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
