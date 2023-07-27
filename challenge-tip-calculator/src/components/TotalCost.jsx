import PropTypes from "prop-types";
import { useStadistics } from "../hook/useStadistics";

export default function TotalCost({ satisfaction, bill }) {
  const { getPercentage, getMean } = useStadistics();
  const { self, friend } = satisfaction;

  const tip = getPercentage(bill, getMean(self, friend));

  const total = bill + tip;

  return (
    <div>
      <p>{`You pay $${total} ($${bill} + $${tip})`}</p>
    </div>
  );
}

TotalCost.propTypes = {
  satisfaction: PropTypes.object.isRequired,
  bill: PropTypes.number.isRequired,
};
