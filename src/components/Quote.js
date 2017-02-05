import React from 'react'
import Thumbnail from './Thumbnail'

import deco from './deco.png'
import insight from '../assets/images/insight.jpg'
import './Quote.css'

const thumb = {
  img: insight,
  alt: 'Insight'
}

const Quote = (props) => {
  const description = props.quote.text.split('\n').map((line, i) => <p key={i}>{line}</p>)

  return (
  <div className="Quote">
    <div className="Quote-author">
        <div className="Quote-author-title">
          <Thumbnail image={thumb} />
          {props.quote.author}
        </div>
        <img className="Quote-author-deco" src={deco} />
    </div>
    <div className="Quote-text">
      {description}
    </div>
  </div>
)}

export default Quote
