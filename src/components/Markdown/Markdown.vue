<template>
  <section>
    <h2>Build a Markdown Previewer</h2>
    <div id="content">
      <div id="editorContent">
        <h2>Editor</h2>
        <textarea id="editor" rows="15" cols="60" v-model="source"></textarea>
      </div>
      <div id="preview" class="shadow">
        <Markdown
          :source="source"
          :html="true"
          :breaks="true"
          :xhtmlOut="true"
          :typographer="true"
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

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  },
};
</script>

<style scoped></style>
