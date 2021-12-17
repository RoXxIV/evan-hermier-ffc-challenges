<template>
  <header>
    <router-link to="/"><h1>FFC CHALLENGES</h1></router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/quote-generator" tag="li"
            >Q<span>uote</span> G<span>enerator</span></router-link
          >
        </li>

        <li>
          <router-link to="/markdown"
            >M<span>arkdown</span> P<span>review</span></router-link
          >
        </li>
        <li>
          <router-link to="/drum-machine"
            >D<span>rum</span> M<span>achine</span></router-link
          >
        </li>
        <li>
          <router-link to="/calculator">C<span>alculator</span></router-link>
        </li>
        <li>
          <router-link to="/25-5-clock"
            >2<span>5-5</span> C<span>lock</span></router-link
          >
        </li>
      </ul>
    </nav>
    <div id="menu-burger">
      <!-----Toggle Menu Burger Mobile----->
      <button
        id="btn-burger"
        class="menu cursorPointer"
        @click="
          ToggleBurgerMenu();
          showMobileMenu = !showMobileMenu;
        "
        aria-label="Main Menu"
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path class="line line2" d="M 20,50 H 80" />
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </div>
  </header>
  <!-----Mobile Nav----->
  <transition name="fade">
    <div v-if="showMobileMenu" id="mobileNav">
      <ul>
        <li
          @click="
            showMobileMenu = false;
            ToggleBurgerMenu();
          "
        >
          <span class="circle"></span
          ><router-link to="/" class="mobile-link">Home</router-link>
        </li>
        <li
          @click="
            showMobileMenu = false;
            ToggleBurgerMenu();
          "
        >
          <span class="circle"></span
          ><router-link to="/quote-generator" class="mobile-link"
            >Quote Generator</router-link
          >
        </li>
        <li
          @click="
            showMobileMenu = false;
            ToggleBurgerMenu();
          "
        >
          <span class="circle"></span
          ><router-link to="/markdown" class="mobile-link"
            >Markdown</router-link
          >
        </li>
        <li
          @click="
            showMobileMenu = false;
            ToggleBurgerMenu();
          "
        >
          <span class="circle"></span
          ><router-link to="/drum-machine" class="mobile-link"
            >Drum Machine</router-link
          >
        </li>
        <li
          @click="
            showMobileMenu = false;
            ToggleBurgerMenu();
          "
        >
          <span class="circle"></span
          ><router-link to="/calculator" class="mobile-link"
            >Calculator</router-link
          >
        </li>
        <li
          @click="
            showMobileMenu = false;
            ToggleBurgerMenu();
          "
        >
          <span class="circle"></span
          ><router-link to="25-5-Clock" class="mobile-link"
            >25-5 Clock</router-link
          >
        </li>
      </ul>
    </div>
  </transition>
  <Home />
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    ToggleBurgerMenu() {
      const burger = document.getElementById("btn-burger");
      burger.classList.toggle("opened");
      burger.setAttribute("aria-expanded", burger.classList.contains("opened"));
    },
  },
};
</script>

<style>
header {
  padding: 15px;
  border-bottom: 1px solid var(--black);
  text-align: center;
}
nav ul {
  display: flex;
  justify-content: center;
}
nav ul li {
  margin: 0px 10px;
}
nav ul li:hover span {
  color: var(--orange);
}
/***___Mobile Nav___***/
#mobileNav {
  position: absolute;
  width: 100%;
  font-size: 1.3em;
  z-index: 4;
}
#mobileNav ul {
  margin: 0;
  padding-top: 20px;
}
#mobileNav ul li {
  display: flex;
  align-items: center;
  margin: 0px 24px;
  padding: 20px 0px;
  border-bottom: 1px solid var(--black);
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 25px;
  background: var(--orange);
}
/***___Media Queries___***/
/***___Mobile, Moins de 668px___***/
@media (max-width: 667.98px) {
  header {
    flex-direction: column;
  }
  h1 {
    text-align: start;
    font-size: 1.3em;
  }
  nav {
    display: none;
  }
  #mobileNav ul {
    background: white;
  }
}
</style>
