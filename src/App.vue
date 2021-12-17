<template>
  <header>
    <router-link to="/"><h1>FFC CHALLENGE</h1></router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/quote-generator" tag="li"
            >Quote Generator</router-link
          >
        </li>

        <li>
          <router-link to="/markdown">Markdown Preview</router-link>
        </li>
        <li><router-link to="/drum-machine">Drum Machine</router-link></li>
        <li><router-link to="/calculator">Calculator</router-link></li>
        <li><router-link to="/25-5-clock">25-5 Clock</router-link></li>
      </ul>
    </nav>
  </header>
  <Home />
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
