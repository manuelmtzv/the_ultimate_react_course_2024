import PropTypes from 'prop-types'

export default function AdviceCount({ adviceCount }) {
  return <p>{`You have read ${adviceCount} pieces of advice`}</p>
}

AdviceCount.propTypes = {
  adviceCount: PropTypes.number.isRequired,
}
