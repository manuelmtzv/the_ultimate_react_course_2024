import PropTypes from "prop-types";

export default function Pizza({ pizza, ...props }) {
  return (
    <div
      className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
      key={pizza.name}
      {...props}
    >
      <img src={pizza.photoName} alt={`${pizza.name} photo`} />
      <div>
        <h3>{pizza.name}</h3>

        <p>Ingredients: {pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold out" : `Price: ${pizza.price}`}</span>
      </div>
    </div>
  );
}

Pizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};
