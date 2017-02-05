import React from 'react'
import Thumbnail from './Thumbnail'

import deco from './deco.png'
import './Quote.css'

const Quote = (props) => {
  const description = props.quote.text.split('\n').map((line, i) => <p key={i}>{line}</p>)

  return (
  <div className="Quote">
    <div className="Quote-author">
        <div className="Quote-author-title">
          <Thumbnail image={props.quote.image} alt={props.quote.author} />
          {props.quote.author}
        </div>
        <img className="Quote-author-deco" src={deco} alt="decoration" />
    </div>
    <div className="Quote-text">
      {description}
    </div>
  </div>
)}

export default Quote
