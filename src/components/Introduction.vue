<template>
  <section>
    <h2 class="custom-H2">Hermier Evan</h2>
    <h3>
      Free Code Camp Frontent Development Libraries Certification Projects
    </h3>
    <div>
      <h4>Quote Generator</h4>
      <p>Ressources</p>
      <ul>
        <li>
          Tweet button :
          <a
            href="https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview"
            target="_blank"
            rel="noopener noreferrer"
            >https://developer.twitter.com/en/docs/...</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h4>Markdown Preview</h4>
      <p>Ressources</p>
      <ul>
        <li>
          vue3-markdown-it :
          <a
            href="https://github.com/JanGuillermo/vue3-markdown-it"
            target="_blank"
            rel="noopener noreferrer"
            >https://github.com/JanGuillermo/...</a
          >
        </li>
        <li>
          markdown-it-highlightjs :
          <a
            href="https://github.com/valeriangalliat/markdown-it-highlightjs"
            target="_blank"
            rel="noopener noreferrer"
            >https://github.com/valeriangalliat/...</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h4>Drum Machine</h4>
      <p>Ressources</p>
      <ul>
        <li>
          keydown event :
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event"
            target="_blank"
            rel="noopener noreferrer"
            >https://developer.mozilla.org/en-US/docs/...</a
          >
        </li>
        <li>
          keyup event :
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event"
            target="_blank"
            rel="noopener noreferrer"
            >https://developer.mozilla.org/en-US/docs/...</a
          >
        </li>
        <li>
          Audio constructor :
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio"
            target="_blank"
            rel="noopener noreferrer"
            >https://developer.mozilla.org/en-US/docs/...</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h4>Calculator</h4>
      <p>Ressources</p>
      <ul>
        <li>
          Regex :
          <a
            href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"
            target="_blank"
            rel="noopener noreferrer"
            >https://developer.mozilla.org/fr/...</a
          >
        </li>
      </ul>
      <p>Inspiration :</p>
      <ul>
        <li>
          Images :
          <a
            href="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/gpp3bkvjg5knkkhq9wcp.jpg"
            target="_blank"
            rel="noopener noreferrer"
            >https://res.cloudinary.com/dz209s6jk/...</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h4>25-5 Clock</h4>
      <p>Ressources</p>
      <ul>
        <li>
          setInterval :
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval"
            target="_blank"
            rel="noopener noreferrer"
            >https://developer.mozilla.org/en-US/...</a
          >
        </li>
        <li>
          clearInterval :
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/clearInterval"
            target="_blank"
            rel="noopener noreferrer"
            >https://developer.mozilla.org/en-US/docs/...</a
          >
        </li>
      </ul>
    </div>
    <p id="made-with">made with vue.js 3</p>
  </section>
</template>

<script>
export default {
  name: "introduction",
};
</script>

<style scoped>
h2,
h3,
#made-with {
  text-align: center;
}

div {
  border: 1px solid white;
  padding: 0px 10px;
  border-radius: 5px;
  margin: 30px auto;
  text-align: center;
}
div p {
  font-weight: bold;
}
h4 {
  font-size: 1.2em;
}
li {
  margin-top: 10px;
  font-weight: bold;
}
a {
  text-decoration: underline;
  font-weight: initial;
}
</style>
