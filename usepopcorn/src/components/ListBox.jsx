import BoxSection from "./BoxSection";
import PropTypes from "prop-types";

export default function ListBox({ children }) {
  return <BoxSection>{children}</BoxSection>;
}

ListBox.propTypes = {
  children: PropTypes.node.isRequired,
};
