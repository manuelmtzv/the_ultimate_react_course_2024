import BoxSection from "./BoxSection";
import PropTypes from "prop-types";

export default function WatchedBox({ children }) {
  return <BoxSection>{children}</BoxSection>;
}

WatchedBox.propTypes = {
  children: PropTypes.node.isRequired,
};
