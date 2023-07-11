import PropTypes from "prop-types";

export default function Order({ closeHour, ...props }) {
  return (
    <div className="order" {...props}>
      <p>{`We're open until ${closeHour}:00. Come visit us or order online!`}</p>

      <button className="btn">Order</button>
    </div>
  );
}

Order.propTypes = {
  closeHour: PropTypes.number.isRequired,
};
