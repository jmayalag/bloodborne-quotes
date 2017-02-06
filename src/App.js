import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group'
import Quote from './components/Quote'
import Button from './components/Button'
import Message from './components/Message'

import quotes from './assets/quotes'
import messages from './assets/messages'

import insight from './assets/images/insight.jpg'
import bell from './assets/images/bell.jpg'

import insightSound from './assets/sounds/insight.mp3'
import bellSound from './assets/sounds/bell.mp3'

import './App.css';


const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const randomElement = (array) => {
  const random = randomInt(0, array.length)
  return array[random]
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: randomElement(quotes),
      showMessage: false,
    }

    this.currentSound = null
    this.newQuote = this.newQuote.bind(this)
    this.tweet = this.tweet.bind(this)
    this.player = this.player.bind(this)
  }

  newQuote() {
    let newQuote = this.state.quote
    while(newQuote.text === this.state.quote.text){
      newQuote = randomElement(quotes)
    }
    this.setState({
      quote: newQuote
    })
    
    if (Math.random() <= 0.6) {
      this.showMessage()
    }
  }

  showMessage() {
    this.setState({
        showMessage: true
      })
      setTimeout(() => {
        this.setState({
          showMessage: false
        })
      }, 2000)
  }

  tweet() {
    console.log('tweet')
  }

  player(sound) {
    const newSound = new Audio(sound)
    const playNew = () => newSound.play()
    if (this.currentSound){
      this.currentSound.pause().then(playNew)
    } else {
      playNew()
    }
  }

  renderMessage() {
    return 
  }

  render() {
    return (
      <div className="App">
        <Quote quote={this.state.quote} />
        <div className="Buttons">
          <Button text="New" img={insight} onClick={this.newQuote} sound={insightSound} player={this.player} />
          <Button text="Tweet" img={bell} onClick={this.tweet} sound={bellSound} player={this.player} />
        </div>
        <Message message={randomElement(messages)} player={this.player} showMessage={this.state.showMessage} />
      </div>
    );
  }
}

export default App;
