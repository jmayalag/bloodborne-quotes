import React, { Component } from 'react';
import Quote from './components/Quote'
import Button from './components/Button'
import quotes from './assets/quotes'

import insight from './assets/images/insight.jpg'
import bell from './assets/images/bell.jpg'

import insightSound from './assets/sounds/insight.mp3'
import bellSound from './assets/sounds/bell.mp3'

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

    this.currentSound = null
    this.newQuote = this.newQuote.bind(this)
    this.tweet = this.tweet.bind(this)
    this.play = this.play.bind(this)
  }

  newQuote() {
    let newQuote = this.state.quote
    while(newQuote.text === this.state.quote.text){
      newQuote = randomQuote()
    }
    this.setState({
      quote: newQuote
    })
    this.play(insightSound)
  }

  tweet() {
    console.log('tweet')
    this.play(bellSound)
  }

  play(sound) {
    if(this.currentSound){
      this.currentSound.pause()
    }
    this.currentSound = new Audio(sound)
    this.currentSound.play()
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
