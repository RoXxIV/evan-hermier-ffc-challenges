<template>
  <section>
    <h2>Build a Markdown Previewer</h2>
    <div id="content">
      <div id="editorContent">
        <h2>Editor</h2>
        <textarea
          id="editor"
          rows="15"
          cols="60"
          v-model="translatedText"
        ></textarea>
      </div>
      <div id="preview" class="shadow">
        <h2>Preview</h2>
        <div v-html="convertText"></div>
      </div>
    </div>
    <div class="link-to-challenge">
      <a
        href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer"
        target="_blank"
        rel="noopener noreferrer"
        >#Challenge</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "markdown",
};
</script>

<style scoped></style>
