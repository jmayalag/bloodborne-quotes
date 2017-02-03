import React, {PropTypes} from 'react'
import './Button.css'

const Button = (props) => (
  <div className="Button" title={props.text} onClick={props.onClick}>
    <img src={props.img} alt={props.text} />
  </div>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
