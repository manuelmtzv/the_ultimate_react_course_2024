import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { ButtonType } from "@/types/generalTypes";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  children?: ReactNode;
  isLoading?: boolean;
}

function Button({
  buttonType,
  children,
  isLoading,
  ...rest
}: Props): ReactElement {
  const className = `${styles.btn} ${styles[buttonType]}`;

  return (
    <button className={className} {...rest}>
      {children}

      {isLoading && <div className={styles.loadingSpinner} />}
    </button>
  );
}

export default Button;
