import PropTypes from 'prop-types';

export default function SearchQueryDetails({ query }) {
  let message;

  if (!query.length) {
    message = 'Type at least 3 characters to start searching...';
  } else if (query.length < 3) {
    message = `Type ${3 - query.length} more characters to start searching...`;
  } 

  return (    
    <p className='query-details'>{message}</p>
  )
}

SearchQueryDetails.propTypes = {
  query: PropTypes.string.isRequired, 
  foundMoviesAmount: PropTypes.number.isRequired,
}