import styles from "./CityEntry.module.css";
import { City } from "@/interfaces/city";
import { formatDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";

export default function CityEntry({ city }: Props) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityEntry}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.name}>{formatDate(date)}</time>

        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

interface Props {
  city: City;
}
