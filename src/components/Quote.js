import React from 'react'
import './Quote.css'

const Quote = (props) => {(
    <div className="Quote">
      <div className="Quote-author">{props.quote.author}</div>
      <div className="Quote-text">
        <p>{props.quote.text}</p>
      </div>
    </div>
  )
}

export default Quote
