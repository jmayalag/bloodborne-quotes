import React, { Component } from 'react';
import Quote from './components/Quote'
import quotes from './assets/quotes'
import './App.css';

const oneQuote = quotes[0]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote quote={oneQuote} />
      </div>
    );
  }
}

export default App;
