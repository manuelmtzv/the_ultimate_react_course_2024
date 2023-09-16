import PropTypes from "prop-types";

export default function Loader({ when = true }) {
  return (
    when && <p className="loader">Loading...</p>
  )
}

Loader.propTypes = {
  when: PropTypes.bool,
}