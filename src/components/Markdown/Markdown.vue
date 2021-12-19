<template>
  <section>
    <h2>Build a Markdown Previewer</h2>
    <div id="content">
      <div id="editorContent">
        <h3>Editor</h3>
        <textarea id="editor" rows="15" cols="60" v-model="source"></textarea>
      </div>
      <div id="previewContent" class="shadow">
        <h3>Previewer</h3>
        <Markdown
          :source="source"
          :html="true"
          :breaks="true"
          :xhtmlOut="true"
          :typographer="true"
          :linkify="true"
          id="markown"
        />
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
import Markdown from "vue3-markdown-it";
export default {
  name: "markdown",
  components: {
    Markdown,
  },
  data() {
    return {
      source: "",
    };
  },
  mounted() {
    this.source = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
        function anotherExample(firstLine, lastLine) {
          if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
            return multiLineCode;
          }
        }
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://zupimages.net/up/21/50/1k6b.jpg)
`;
  },
};
</script>

<style scoped>
h2 {
  margin-top: 0;
  text-align: center;
  font-weight: bold;
  color: var(--light);
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: var(--light);
  width: 100%;
  min-width: 80%;
  border: 1px solid var(--dark);
  border-radius: 5px;
  padding: 30px;
}
#editorContent {
  text-align: center;
}
#editorContent > h3:first-of-type {
  font-size: 1.8em;
  margin-top: 0px;
  color: var(--dark);
}
#previewContent > h3:first-of-type {
  text-align: center;
  font-size: 1.8em;
  color: var(--dark);
}
#markown {
  border: 1px solid var(--dark);
  padding: 10px;
  border-radius: 5px;
  background: #1b1b32;
  color: var(--light);
}
.link-to-challenge {
  text-align: center;
  text-decoration: underline;
  letter-spacing: 0.5px;
  margin-top: 30px;
}
/***___Media Queries___***/
/***___Mobile, Moins de 668px___***/
@media (max-width: 667.98px) {
  #content {
    padding: 0;
    border: none;
  }
  textarea {
    width: 100%;
  }
  #editorContent > h3:first-of-type {
    font-size: 1.3em;
  }
  #previewContent > h3:first-of-type {
    font-size: 1.3em;
  }
}
</style>
