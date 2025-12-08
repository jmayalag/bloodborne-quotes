import PropTypes from 'prop-types';
import './Button.css';

function Button({ text, img, onClick, sound, player }) {
  const handleClick = () => {
    if (sound && player) {
      player(sound);
    }
    onClick();
  };

  return (
    <div className="Button" title={text} onClick={handleClick}>
      <img src={img} alt={text} />
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sound: PropTypes.string,
  player: PropTypes.func,
};

export default Button;
