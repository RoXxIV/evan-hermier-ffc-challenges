<template>
  <section>
    <h2 class="custom-H2">Build a Drum Machine</h2>
    <div id="drum-machine-header">
      <h3>Power</h3>
      <label class="switch">
        <input type="checkbox" v-model="power" />
        <span class="slider"></span>
      </label>
    </div>
    <div id="drum-machine">
      <!-- Q Key -->
      <div @click="handleKey('Q')" id="Q">
        <span class="drum-pad">Q</span>
      </div>
      <!-- W Key -->
      <div @click="handleKey('W')" id="W">
        <span class="drum-pad">W</span>
      </div>
      <!-- E Key -->
      <div @click="handleKey('E')" id="E">
        <span class="drum-pad">E</span>
      </div>
      <!-- A Key -->
      <div @click="handleKey('A')" id="A">
        <span class="drum-pad">A</span>
      </div>
      <!-- S Key -->
      <div @click="handleKey('S')" id="S">
        <span class="drum-pad">S</span>
      </div>
      <!-- D Key -->
      <div @click="handleKey('D')" id="D">
        <span class="drum-pad">D</span>
      </div>
      <!-- Z Key -->
      <div @click="handleKey('Z')" id="Z">
        <span class="drum-pad">Z</span>
      </div>
      <!-- X Key -->
      <div @click="handleKey('X')" id="X">
        <span class="drum-pad">X</span>
      </div>
      <!-- C Key -->
      <div @click="handleKey('C')" id="C">
        <span class="drum-pad">C</span>
      </div>
    </div>
    <div id="display">
      <span>Key : {{ display }}</span>
    </div>
    <div class="link-to-challenge">
      <a
        href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine"
        target="_blank"
        rel="noopener noreferrer"
        >#Challenge</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "drum-machine",
  data() {
    return {
      keys: [
        {
          keyCode: 81,
          keyTrigger: "Q",
          id: "Heater-1",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          ),
        },
        {
          keyCode: 87,
          keyTrigger: "W",
          id: "Heater-2",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          ),
        },
        {
          keyCode: 69,
          keyTrigger: "E",
          id: "Heater-3",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          ),
        },
        {
          keyCode: 65,
          keyTrigger: "A",
          id: "Heater-4",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          ),
        },
        {
          keyCode: 83,
          keyTrigger: "S",
          id: "Clap",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          ),
        },
        {
          keyCode: 68,
          keyTrigger: "D",
          id: "Open-HH",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          ),
        },
        {
          keyCode: 90,
          keyTrigger: "Z",
          id: "Kick-n'-Hat",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          ),
        },
        {
          keyCode: 88,
          keyTrigger: "X",
          id: "Kick",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          ),
        },
        {
          keyCode: 67,
          keyTrigger: "C",
          id: "Closed-HH",
          url: new Audio(
            "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          ),
        },
      ],
      display: "",
      power: true,
    };
  },
  methods: {
    handleKey(e) {
      if (this.power === true) {
        const selectedKey = this.keys.find((key) => key.keyTrigger == e);
        const padColor = document.getElementById(selectedKey.keyTrigger);
        if (!selectedKey) return;
        this.playSound(selectedKey);
        if (!padColor) return;
        padColor.classList.add("pushed-pad");
        setTimeout(() => {
          this.display = "";
          padColor.classList.remove("pushed-pad");
        }, 100);
      }
    },
    handleKeyDown(e) {
      if (this.power === true) {
        const selectedKey = this.keys.find((key) => key.keyCode === e.keyCode);
        if (!selectedKey) return;
        const padColor = document.getElementById(selectedKey.keyTrigger);
        this.playSound(selectedKey);
        if (!padColor) return;
        padColor.classList.add("pushed-pad");
      }
    },
    handleKeyUp(e) {
      if (this.power === true) {
        const selectedKey = this.keys.find((key) => key.keyCode === e.keyCode);
        if (!selectedKey) return;
        const padColor = document.getElementById(selectedKey.keyTrigger);
        this.display = "";
        if (!padColor) return;
        padColor.classList.remove("pushed-pad");
      }
    },
    playSound(selectedKey) {
      selectedKey.url.currentTime = 0;
      selectedKey.url.play();
      this.display = selectedKey.id;
    },
  },
  beforeMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<style scoped>
#drum-machine-header {
  display: flex;
  justify-content: end;
  align-items: center;
}
h3 {
  margin-right: 20px;
}
#drum-machine {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
#drum-machine div {
  background: linear-gradient(145deg, #d6dce9, #dfe3ec);
  border-radius: 0.4rem;
  box-shadow: 0.6px 0.6px 1px #a5a7aa, -0.6px -0.6px 1px #ffffff;
  margin: 10px;
  position: relative;
  cursor: pointer;
}
#drum-machine div span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--dark);
  font-weight: bold;
}
#display {
  text-align: center;
  margin: 10px auto 30px auto;
}
.pushed-pad {
  background: rgba(255, 255, 255, 0.3) !important;
}
/* toggle button */
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
