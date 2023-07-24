import PropTypes from "prop-types";

export default function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>

      {children}
    </div>
  );
}

StepMessage.propTypes = {
  step: PropTypes.number.isRequired,
  children: PropTypes.node,
};
