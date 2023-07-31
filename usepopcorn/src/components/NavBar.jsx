import PropTypes from "prop-types";

export default function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};
