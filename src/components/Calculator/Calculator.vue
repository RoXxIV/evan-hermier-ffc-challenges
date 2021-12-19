<template>
  <section>
    <h2>Build a JavaScript Calculator</h2>
    <!--Result-->
    <div id="screen">
      <p id="display">{{ result }}</p>
      <p>{{ current }}</p>
    </div>
    <!--Calculator-->
    <div id="keypad">
      <!--number/symbol-->

      <button id="seven" class="greyKey" @click="pressedButton('7')">7</button>
      <button id="eight" class="greyKey" @click="pressedButton('8')">8</button>
      <button id="nine" class="greyKey" @click="pressedButton('9')">9</button>
      <button class="blueKey" @click="pressedButton('DEL')">DEL</button>
      <button id="four" class="greyKey" @click="pressedButton('4')">4</button>
      <button id="five" class="greyKey" @click="pressedButton('5')">5</button>
      <button id="six" class="greyKey" @click="pressedButton('6')">6</button>
      <button id="add" class="greyKey" @click="pressedButton('+')">+</button>
      <button id="one" class="greyKey" @click="pressedButton('1')">1</button>
      <button id="two" class="greyKey" @click="pressedButton('2')">2</button>
      <button id="three" class="greyKey" @click="pressedButton('3')">3</button>
      <button id="subtract" class="greyKey" @click="pressedButton('-')">
        -
      </button>
      <button id="decimal" class="greyKey" @click="pressedButton('.')">
        .
      </button>
      <button id="zero" class="greyKey" @click="pressedButton('0')">0</button>
      <button id="divide" class="greyKey" @click="pressedButton('/')">/</button>
      <button id="multiply" class="greyKey" @click="pressedButton('*')">
        x
      </button>

      <button
        id="clear"
        class="blueKey resetsign"
        @click="pressedButton('RESET')"
      >
        RESET
      </button>
      <button id="equals" class="redKey equal-sign" @click="pressedButton('=')">
        =
      </button>
    </div>
    <div class="link-to-challenge">
      <a
        href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator"
        target="_blank"
        rel="noopener noreferrer"
        >#Challenge</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {
      current: "",
      result: 0,
    };
  },
  methods: {
    pressedButton(key) {
      if (key.match(/^[0-9]+$/) != null) {
        this.addDigit(key);
      } else if (key === "." && this.current) {
        this.addDigit(key);
      } else if (key === "RESET") {
        this.reset();
      } else if (key === "DEL") {
        this.del();
      } else if (key.match(/[-+*/]/) != null) {
        this.addSymbole(key);
      } else if (key === "=") {
        this.total(this.current);
      }
      this.showLog();
    },
    // ADD DIGIT
    addDigit(digit) {
      if (
        digit === "." &&
        this.current.charAt(this.current.length - 1).match(/[-+*.]/)
      ) {
        return;
      }
      this.current += digit;
    },
    // ADD SYMBOLE
    addSymbole(symbole) {
      // if "current" isn't empty && the previous entry is not a symbol   :
      if (
        this.current &&
        !this.current.charAt(this.current.length - 1).match(/[-+*]/)
      ) {
        this.current += symbole;
      }
    },
    // CLEAR
    reset() {
      this.current = "";
      this.result = 0;
    },
    // DELETE
    del() {
      this.current = this.current.slice(0, -1);
    },
    // TOTALE
    total(str) {
      let result = new Function("return " + str)();
      this.result = result;
    },
    // SHOW CONSOLE.LOG
    showLog() {
      console.log(this.current);
      console.log(this.result);
    },
  },
};
</script>

<style scoped>
section {
  background: white;
  padding: 30px;
  border-radius: 5px;
}
h2 {
  margin: 0;
  text-align: center;
  color: var(--dark);
  font-weight: bold;
}
#screen {
  background-color: hsl(224, 36%, 15%);
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 30px 10px;
  margin-top: 30px;
}
#display {
  font-size: 1.5em;
}
#keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 15px;
  background-color: hsl(222, 26%, 31%);
  border-radius: 10px;
  margin-top: 20px;
}
#keypad button {
  border-radius: 8px;
  border: none;
  height: 60px;
  font-size: 32px;
  cursor: pointer;
}
.reset-sign {
  grid-column-start: 1;
  grid-column-end: 3;
}
.equal-sign {
  grid-column-start: 3;
  grid-column-end: 5;
}
.greyKey {
  background-color: hsl(30, 25%, 89%);
  box-shadow: 0px 4px 0px hsl(28, 16%, 65%);
  color: hsl(221, 14%, 31%);
}
.greyKey:active {
  box-shadow: 0px 2px 0px hsl(30, 6%, 51%);
}
.redKey {
  background-color: hsl(6, 63%, 50%);
  box-shadow: 0px 4px 0px hsl(6, 70%, 34%);
  color: white;
}
.redKey:active {
  box-shadow: 0px 2px 0px hsl(6, 67%, 29%);
}
.blueKey {
  background-color: hsl(225, 21%, 49%);
  box-shadow: 0px 4px 0px hsl(223, 25%, 22%);
  color: white;
}
.blueKey:active {
  box-shadow: 0px 2px 0px hsl(223, 25%, 22%);
}
.link-to-challenge {
  text-align: center;
  text-decoration: underline;
  letter-spacing: 0.5px;
  margin-top: 30px;
  color: var(--dark);
}
/***___Media Queries___***/
/***___Mobile, Moins de 668px___***/
@media (max-width: 667.98px) {
  #keypad {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
  }
}
</style>
