import styles from "./CityEntry.module.css";
import { City } from "@/interfaces/city";
import { formatDate } from "../../utils/formatDate";

export default function CityEntry({ city }: Props) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityEntry}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.name}>{formatDate(date)}</time>

      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

interface Props {
  city: City;
}
