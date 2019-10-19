import React, { useState } from "react";
import "./App.css";
import QUOTES from "./quotes";

function App() {
  // css styling
  let [quotes, sortQuotes] = useState(QUOTES);
  let [idx, incrementIdx] = useState(0);

  return (
    <div className="background">
      <div id="quote-box">
        <div id="text">
          <blockquote className="blockquote">
            <p>"{quotes[idx].text}"</p>
          </blockquote>
        </div>
        <div id="author-row">
          <div id="author">
            <em>- {quotes[idx].author}</em>
          </div>
        </div>
        <div id="button-row">
          <a
            href={`https://twitter.com/intent/tweet/?text=${quotes[idx].text} - ${quotes[idx].author}`}
            className="btn btn-primary"
            id="tweet-quote"
            target="_blank"
          >
            Tweet!
          </a>
          <button
            onClick={() => incrementIdx(idx < quotes.length - 1 ? idx + 1 : 0)}
            className="btn btn-primary"
            id="new-quote"
          >
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
