import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, Transition } from 'react-transition-group';
import gsap from 'gsap';
import './Message.css';

const DURATION = 1.5;
const EASE = 'power1.in';
const DX = 40;

function MessageContainer({ message, onEnter, onExit }) {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const shineRef = useRef(null);
  const nodeRef = useRef(null);

  const handleEnter = () => {
    gsap.from(leftRef.current, {
      opacity: 0,
      x: -DX,
      duration: DURATION,
      ease: EASE,
    });
    gsap.from(rightRef.current, {
      opacity: 0,
      x: DX,
      duration: DURATION,
      ease: EASE,
    });
    gsap.from(shineRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power4.in',
      delay: DURATION,
      onComplete: onEnter,
    });
  };

  const handleExit = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: DURATION,
      ease: EASE,
      onComplete: onExit,
    });
  };

  useEffect(() => {
    handleEnter();
  }, []);

  return (
    <div ref={nodeRef}>
      <div className="Message-container" ref={containerRef}>
        <div
          className="Message-text left"
          style={{ color: message.color ?? 'white' }}
          ref={leftRef}
        >
          {message.text}
        </div>
        <div
          className="Message-text shine"
          style={{ color: message.color ?? 'white' }}
          ref={shineRef}
        >
          {message.text}
        </div>
        <div
          className="Message-text right"
          style={{ color: message.color ?? 'white' }}
          ref={rightRef}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
}

MessageContainer.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    sound: PropTypes.string,
  }).isRequired,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
};

function Message({ message, player, showMessage }) {
  const nodeRef = useRef(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (showMessage && message.sound && player && !hasPlayedRef.current) {
      player(message.sound);
      hasPlayedRef.current = true;
    }
    if (!showMessage) {
      hasPlayedRef.current = false;
    }
  }, [showMessage, message, player]);

  return (
    <div className="Message">
      <TransitionGroup component={null}>
        {showMessage && (
          <Transition
            key={message.text}
            nodeRef={nodeRef}
            timeout={DURATION * 1000}
            onExiting={() => {
              if (nodeRef.current) {
                gsap.to(nodeRef.current, {
                  opacity: 0,
                  duration: DURATION,
                  ease: EASE,
                });
              }
            }}
          >
            <div ref={nodeRef}>
              <MessageContainer message={message} />
            </div>
          </Transition>
        )}
      </TransitionGroup>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    sound: PropTypes.string,
  }).isRequired,
  player: PropTypes.func,
  showMessage: PropTypes.bool.isRequired,
};

export default Message;
