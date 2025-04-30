
import './App.css';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

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
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!



- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;


function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="boxes-container" >
        <textarea name="editor" id="editor" value={markdownText}></textarea>
        <div id="preview" >
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      
      </div>
    </div>
  );
}

export default App;
