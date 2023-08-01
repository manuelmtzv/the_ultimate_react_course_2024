import PropTypes from "prop-types";
import Star from "./Star";
import { useState } from "react";

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
  },
};

export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const actualRating = hoverRating || rating;

  function handleRating(rating) {
    setRating(rating);
  }

  function handleHoverRating(rating) {
    setHoverRating(rating);
  }

  return (
    <figure style={style.container}>
      <div style={style.starContainer}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRating(index + 1)}
            full={index + 1 <= actualRating}
            onHover={() => handleHoverRating(index + 1)}
            onLeave={() => handleHoverRating(0)}
          />
        ))}
      </div>
      <p style={style.text}>{actualRating || ""}</p>
    </figure>
  );
}

StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
};
