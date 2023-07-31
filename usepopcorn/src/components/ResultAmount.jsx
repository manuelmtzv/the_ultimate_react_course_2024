import PropTypes from 'prop-types'

export default function ResultAmount({ length }) {
  return (
    <p className='num-results'>
      Found <strong>{length}</strong> results
    </p>
  )
}

ResultAmount.propTypes = {
  length: PropTypes.number.isRequired,
}
