import React, { Component } from 'react';
import Quote from './components/Quote'
import Button from './components/Button'
import quotes from './assets/quotes'

import insight from './assets/images/insight.jpg'
import bell from './assets/images/bell.jpg'

import './App.css';

const randomQuote = () => {
  const min = 0
  const max = quotes.length
  const random = Math.floor(Math.random() * (max - min)) + min
  return quotes[random]
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: randomQuote()
    }
    this.newQuote = this.newQuote.bind(this)
    this.tweet = this.tweet.bind(this)
  }

  newQuote() {
    let newQuote = this.state.quote
    while(newQuote.text === this.state.quote.text){
      newQuote = randomQuote()
    }
    this.setState({
      quote: newQuote
    })
  }

  tweet() {
    console.log('tweet')
  }

  render() {
    return (
      <div className="App">
        <Quote quote={this.state.quote} />
        <div className="Buttons">
          <Button text="New" img={insight} onClick={this.newQuote} />
          <Button text="Tweet" img={bell} onClick={this.tweet} />
        </div>
      </div>
    );
  }
}

export default App;
