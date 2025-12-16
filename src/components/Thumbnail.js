import PropTypes from 'prop-types';

const styles = {
  div: {
    display: 'inline',
    margin: '8px',
  },
  img: {
    width: '60px',
    height: '60px',
    border: '1px solid #373938',
    borderRadius: 2,
  },
};

function Thumbnail({ image, alt }) {
  return (
    <div className="Thumbnail" style={styles.div}>
      <img src={image} alt={alt} style={styles.img} />
    </div>
  );
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Thumbnail;
