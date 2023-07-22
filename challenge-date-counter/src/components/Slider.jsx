import PropTypes from "prop-types";

export default function StepSlider({ step, setStep, min, max }) {
  return (
    <div>
      <label
        style={{ display: "block" }}
        htmlFor="step"
      >{`Step: ${step}`}</label>

      <input
        name="step"
        type="range"
        min={min}
        max={max}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
    </div>
  );
}

StepSlider.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
