import React, {PropTypes} from 'react'

const styles = {
  div: {
    display: 'inline',
    margin: '8px',
  },
  img: {
    width: '60px',
    height: '60px',
    border: '1px groove #373938',
    borderRadius: 2,
  }
}

const Thumbnail = (props) => (
  <div className="Thumbnail" style={styles.div}>
    <img src={props.image.img} alt={props.image.alt} style={styles.img} />
  </div>
)

Thumbnail.propTypes = {
  image: PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
}

export default Thumbnail