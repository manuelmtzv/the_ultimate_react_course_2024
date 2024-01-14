import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      buttonType="back"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}
