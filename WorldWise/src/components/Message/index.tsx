import styles from "./Message.module.css";

export default function Message({ message }: Props) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

interface Props {
  message: string;
}
