import React, {PropTypes} from 'react'
import './Message.css'

const Message = (props) => {
  if (props.message.sound && props.player) {
    props.player(props.message.sound)
  }
  return (
    <div className="Message">
      <div className="Message-center" style={{color: props.message.color}}>
        {props.message.text}
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    sound: PropTypes.string,
  }).isRequired,
  player: PropTypes.func,
}

Message.defaultProps = {
  message: {
    color: 'white',
  }
}

export default Message
