import PropTypes from "prop-types";

export default function ResultDate({ count }) {
  const style = {
    text: {
      margin: "0",
    },
  };

  return (
    <>
      <div>
        {count === 0 ? (
          <p style={style.text}>Today is {new Date().toDateString()}</p>
        ) : (
          <p style={style.text}>
            {count} days from today is{" "}
            {new Date().addDays(count).toDateString()}
          </p>
        )}
      </div>
    </>
  );
}

ResultDate.propTypes = {
  count: PropTypes.number.isRequired,
};
