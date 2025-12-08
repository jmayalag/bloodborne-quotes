import { useState, useCallback, useRef } from 'react';
import Quote from './components/Quote';
import Button from './components/Button';
import Message from './components/Message';

import quotes from './assets/quotes';
import messages from './assets/messages';

import insight from './assets/images/insight.jpg';
import bell from './assets/images/bell.jpg';

import insightSound from './assets/sounds/insight.mp3';
import bellSound from './assets/sounds/bell.mp3';

import './App.css';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomElement = (array) => {
  const random = randomInt(0, array.length);
  return array[random];
};

function App() {
  const [quote, setQuote] = useState(() => randomElement(quotes));
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(() => randomElement(messages));
  const currentSoundRef = useRef(null);

  const player = useCallback((sound) => {
    if (currentSoundRef.current) {
      currentSoundRef.current.pause();
      currentSoundRef.current.currentTime = 0;
    }
    const newSound = new Audio(sound);
    currentSoundRef.current = newSound;
    newSound.play().catch(() => {
      // Ignore autoplay errors
    });
  }, []);

  const displayMessage = useCallback(() => {
    setCurrentMessage(randomElement(messages));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }, []);

  const newQuote = useCallback(() => {
    setQuote((prevQuote) => {
      let nextQuote = prevQuote;
      while (nextQuote.text === prevQuote.text) {
        nextQuote = randomElement(quotes);
      }
      return nextQuote;
    });

    if (Math.random() <= 0.6) {
      displayMessage();
    }
  }, [displayMessage]);

  const tweet = useCallback(() => {
    const tweetText = encodeURIComponent(`"${quote.text}" - ${quote.author}`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&hashtags=Bloodborne`;
    window.open(tweetUrl, '_blank', 'noopener,noreferrer');
  }, [quote]);

  return (
    <div className="App">
      <Quote quote={quote} />
      <div className="Buttons">
        <Button text="New" img={insight} onClick={newQuote} sound={insightSound} player={player} />
        <Button text="Tweet" img={bell} onClick={tweet} sound={bellSound} player={player} />
      </div>
      <Message message={currentMessage} player={player} showMessage={showMessage} />
    </div>
  );
}

export default App;
