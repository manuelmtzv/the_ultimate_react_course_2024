import PropTypes from "prop-types";

export default function Button({ style, onClick, children }) {
  return (
    <button style={style.buttons} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
