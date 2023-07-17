import PropTypes from 'prop-types'

export function Tab({ active, step,  }) {

    return <div className={`${active ? 'active' : ''}`}>{step}</div>
}

Tab.propTypes = {
    active: PropTypes.bool.isRequired, 
    step: PropTypes.number.isRequired
}