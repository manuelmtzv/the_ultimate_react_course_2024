import Logo from './Logo'
import ResultAmount from './ResultAmount'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'

export default function NavBar({ movies, query, onSetQuery }) {
  return (
    <nav className='nav-bar'>
      <Logo />

      <SearchBar query={query} onSetQuery={onSetQuery} />

      <ResultAmount length={movies.length} />
    </nav>
  )
}

NavBar.propTypes = {
  movies: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  onSetQuery: PropTypes.func.isRequired,
}
