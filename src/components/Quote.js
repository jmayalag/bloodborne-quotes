import React from 'react'
import './Quote.css'

const Quote = (props) => {
  const description = props.quote.text.split('\n').map((line, i) => <p key={i}>{line}</p>)

  return (
  <div className="Quote">
    <div className="Quote-author">{props.quote.author}</div>
    <div className="Quote-text">
      {description}
    </div>
  </div>
)}

export default Quote
