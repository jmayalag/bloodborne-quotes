import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

import deco from './deco.png';
import './Quote.css';

function Quote({ quote }) {
  const description = quote.text.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return (
    <div className="Quote">
      <div className="Quote-author">
        <div className="Quote-author-title">
          <Thumbnail image={quote.image} alt={quote.author} />
          {quote.author}
        </div>
        <img className="Quote-author-deco" src={deco} alt="decoration" />
      </div>
      <div className="Quote-text">{description}</div>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Quote;
