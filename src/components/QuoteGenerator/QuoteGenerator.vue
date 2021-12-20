<template>
  <section>
    <h2 class="custom-H2">Build a Random Quote Machine</h2>
    <div id="quote-box" :style="`border: 10px solid RGB(${color},0.7)`">
      <p id="text" :style="`color: RGB(${color})`">
        <q>{{ quote }}</q>
      </p>
      <span id="author" :style="`color: RGB(${color})`">- {{ author }}</span>
      <div id="buttons">
        <a
          :href="`https://twitter.com/intent/tweet?text=${quote}`"
          id="tweet-quote"
          target="_blank"
          :style="`background-color: RGB(${color});border: 2px solid RGB(${color})`"
          >Tweet</a
        >
        <a
          @click="getRandomQuote"
          id="new-quote"
          :style="`background-color: RGB(${color});border: 2px solid RGB(${color})`"
          >New Quote</a
        >
      </div>
    </div>

    <div class="link-to-challenge">
      <a
        href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine"
        target="_blank"
        rel="noopener noreferrer"
        >#Challenge</a
      >
    </div>
  </section>
</template>

<script>
import QuoteData from "../../static/quotesData.json";
export default {
  name: "quote-generator",
  data() {
    return {
      quotes: QuoteData,
      quote: "",
      author: "",
      colors: [
        "46,76,109",
        "240,84,84",
        "57,163,136",
        "102,78,136",
        "240,165,0",
      ],
      color: "",
    };
  },
  methods: {
    getRandomQuote() {
      const randomQuote =
        this.quotes[Math.floor(Math.random() * this.quotes.length)];
      this.getRandomColor();
      this.quote = randomQuote.quote;
      this.author = randomQuote.author;
    },
    getRandomColor() {
      const color = this.color;
      while (color === this.color) {
        this.color =
          this.colors[Math.floor(Math.random() * this.colors.length)];
      }
    },
  },
  mounted() {
    this.getRandomQuote();
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 100px;
}
#quote-box {
  width: 100%;
  min-width: 80%;
  height: auto;
  padding: 50px;
  margin: 30px auto;
  background-color: white;
  font-size: 1.3em;
  border-radius: 5px;
}
#text {
  font-weight: bold;
  font-size: 0.8em;
  text-align: center;
}
#author {
  font-style: italic;
  font-size: 0.7em;
  display: block;
  text-align: end;
  margin-top: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}
#buttons {
  display: flex;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
}
#tweet-quote,
#new-quote {
  color: var(--light);
  padding: 10px 15px;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.8em;
}
#tweet-quote:hover,
#new-quote:hover {
  opacity: 0.9;
}
/***___Media Queries___***/
/***___Tablet, Moins de 992px___***/
@media (max-width: 991.98px) {
  section {
    padding: 0px 20px;
  }
}
/***___Mobile, Moins de 668px___***/
@media (max-width: 667.98px) {
  section {
    padding: 0px 10px;
    margin-top: 30px;
  }
  #quote-box {
    margin: 20px auto;
    height: auto;
  }
  #buttons {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  #tweet-quote,
  #new-quote {
    color: var(--light);
    text-align: center;
    padding: 10px;
    margin: 5px auto;
  }
}
</style>
