<template>
  <section :style="`background-color:${color}`">
    <h2>Build a Random Quote Machine</h2>
    <div id="quote-box" :style="`border: 2px solid ${color}`">
      <p id="text" :style="`color: ${color}`">
        <q>{{ quote }}</q>
      </p>
      <span id="author" :style="`color:${color}`">- {{ author }}</span>
      <div id="buttons">
        <a
          :href="`https://twitter.com/intent/tweet?text=${quote}`"
          id="tweet-quote"
          target="_blank"
          :style="`background-color:${color};border: 2px solid ${color}`"
          >Tweet</a
        >
        <a
          @click="getRandomQuote"
          id="new-quote"
          :style="`background-color:${color};border: 2px solid ${color}`"
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
        "#2E4C6D",
        "#F05454",
        "#39A388",
        "#664E88",
        "#F0A500",
        "#C89595",
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
* {
  transition: all 0.5s ease 0s;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px;
  border: 3px solid var(--black);
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
h2 {
  margin: 0;
  text-align: center;
  color: white;
  font-weight: bold;
}
#quote-box {
  width: 100%;
  min-width: 80%;
  height: 300px;
  padding: 30px;
  margin: 50px auto;
  background-color: white;
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#quote-box p {
  font-weight: bold;
  font-size: 0.8em;
  text-align: center;
}
#quote-box span {
  font-style: italic;
  font-size: 0.7em;
  display: block;
  text-align: end;
  margin-top: 20px;
}
#buttons {
  display: flex;
  justify-content: space-between;
  margin: 50px 20px 0px 20px;
}
#buttons a {
  color: white;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.8em;
}
#buttons a:hover {
  opacity: 0.9;
}
.link-to-challenge {
  text-align: center;
  text-decoration: underline;
  color: white;
  letter-spacing: 0.5px;
}
/***___Media Queries___***/
/***___Mobile, Moins de 668px___***/
@media (max-width: 667.98px) {
  section {
    padding: 20px 10px;
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
  #buttons a {
    color: white;
    text-align: center;
    padding: 10px;
    margin: 5px auto;
  }
}
</style>
