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
  <!-----Footer----->
  <footer>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/evan-hermier-799b48121/"
          target="_blank"
        >
          <img
            class="buzz-out-on-hover"
            src="../src/assets/images/1383262.png"
            alt="logo linkedin"
        /></a>
      </li>
      <li>
        <a href="https://github.com/RoXxIV" target="_blank">
          <img
            class="buzz-out-on-hover"
            src="../src/assets/images/logo_github_icon_143196.png"
            alt="logo github"
        /></a>
      </li>
      <li>
        <a href="https://codepen.io/RoXx" target="_blank">
          <img
            class="buzz-out-on-hover"
            src="../src/assets/images/free-codepen-3771364-3149472.png"
            alt="logo codepen"
        /></a>
      </li>
      <li>
        <a href="https://www.freecodecamp.org/roxxx" target="_blank">
          <img
            class="buzz-out-on-hover"
            src="../src/assets/images/Microsoft.VisualStudio.Services.Icons.png"
            alt="freecodecamp"
        /></a>
      </li>
    </ul>
  </footer>
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
  border-bottom: 1px solid var(--light);
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
  opacity: 0.6;
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
  border-bottom: 1px solid var(--light);
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 25px;
  background: var(--light);
}
/***___Footer___***/
footer {
  padding: 15px;
  border-top: 1px solid var(--light);
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 50px;
    margin: 0px 15px;
  }
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
    background: var(--dark);
  }
}

@-webkit-keyframes buzz-out-on-hover {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
@keyframes buzz-out-on-hover {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
.buzz-out-on-hover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.buzz-out-on-hover:hover,
.buzz-out-on-hover:focus,
.buzz-out-on-hover:active {
  -webkit-animation-name: buzz-out-on-hover;
  animation-name: buzz-out-on-hover;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>
