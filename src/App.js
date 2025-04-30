
import './App.css';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

function App() {
  const [markdownText, setMarkdownText] = useState("");
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="boxes-container" >
        <textarea name="editor" id="editor" ></textarea>
        <div id="preview" >
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      
      </div>
    </div>
  );
}

export default App;
