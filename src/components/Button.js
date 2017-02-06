import React, {PropTypes} from 'react'
import './Button.css'

const Button = (props) => {
  const onClick = () => {
    if (props.sound && props.player) {
      props.player(props.sound);
    }
    props.onClick()
  }
  return (
    <div className="Button" title={props.text} onClick={onClick}>
      <img src={props.img} alt={props.text} />
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sound: PropTypes.string,
  player: PropTypes.func,
}

export default Button
