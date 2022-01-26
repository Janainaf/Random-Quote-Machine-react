import React from "react";
import "./App.css";
import quotes from "./quotes.js";

export class App extends React.Component {
  getRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);
  }

  // state = {
  //   quote: quotes.quote,
  // };
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
              <i className="fa fa-quote-left"> </i>
              <span id="text"> hi </span>
            </div>
            <div className="quote-author">
              - <span id="author"> By mememe</span>
            </div>
            <div className="buttons">
              <a
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_top"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="button"
                id="tumblr-quote"
                title="Post this quote on tumblr!"
                target="_blank"
              >
                <i className="fa fa-tumblr"></i>
              </a>
              <button
                className="button"
                id="new-quote"
                onClick={this.getRandomQuote}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
      </div>
    );
  }
}
export default App;
