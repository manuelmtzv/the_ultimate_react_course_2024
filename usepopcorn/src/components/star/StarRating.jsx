import PropTypes from "prop-types";
import Star from "./Star";
import { useState } from "react";

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 30,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating = () => null,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);
  const actualRating = hoverRating || rating;
  const canShowMessages = messages.length === maxRating;

  const style = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    starContainer: {
      display: "flex",
    },
    text: {
      lineHeight: "1",
      margin: 0,
      color,
      fontSize: `${size}px`,
    },
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  function handleHoverRating(rating) {
    setHoverRating(rating);
  }
  return maxRating > 0 ? (
    <figure style={style.container} className={className}>
      <div style={style.starContainer}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRating(index + 1)}
            full={index + 1 <= actualRating}
            onHover={() => handleHoverRating(index + 1)}
            onLeave={() => handleHoverRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={style.text}>
        {canShowMessages ? messages[actualRating - 1] : actualRating || ""}
      </p>
    </figure>
  ) : null;
}

StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};
