import { ButtonType } from "@/types/generalTypes";
import styles from "../components/Button/Button.module.css";

const { btn, primary, back, position } = styles;

export function getButtonClassName(type: ButtonType) {
  switch (type) {
    case "primary":
      return `${btn} ${primary}`;
    case "back":
      return `${btn} ${back}`;
    case "position":
      return `${btn} ${position}`;
    default:
      return btn;
  }
}
