import React, {PropTypes, Component} from 'react'
import TransitionGroup from 'react-addons-transition-group'
import {TweenLite, TweenMax, Power1, Power4} from 'gsap';
import './Message.css'

const duration = 1.5;
const ease = Power1.easeIn
const dx = 40

class MessageContainer extends Component {
  componentWillEnter (callback) {
    TweenLite.from(this.left, duration, {
      opacity: 0,
      x: `-=${dx}px`,
      ease: ease
    })
    TweenLite.from(this.right, duration, {
      opacity: 0,
      x: `+=${dx}px`,
      ease: ease
    })
    TweenLite.from(this.shine, 1, {
      opacity: 0,
      ease: Power4.easeIn,
      delay: duration,
      onComplete: callback
    })
  }

  componentWillLeave (callback) {
    const el = this.left
    TweenLite.to(this.container, duration, {
      opacity: 0,
      ease: ease,
      onComplete: callback
    })
  }

  render() {
    return (
      <div className="Message-container" ref={c => this.container = c}>
        <div className="Message-text left" style={{color: this.props.message.color}} ref={c => this.left = c}>
          {this.props.message.text}
        </div>
        <div className="Message-text shine" style={{color: this.props.message.color}} ref={c => this.shine = c}>
          {this.props.message.text}
        </div>
        <div className="Message-text right" style={{color: this.props.message.color}} ref={c => this.right = c}>
          {this.props.message.text}
        </div>
      </div>
    )
  }
}

const Message = (props) => {
  if (props.showMessage && props.message.sound && props.player) {
    props.player(props.message.sound)
  }
  return (
    <div className="Message">
      <TransitionGroup>
        {props.showMessage && <MessageContainer message={props.message} />}
      </TransitionGroup>
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
  showMessage: PropTypes.bool.isRequired,
}

Message.defaultProps = {
  message: {
    color: 'white',
  }
}

export default Message
