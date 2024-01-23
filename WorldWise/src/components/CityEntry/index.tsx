import styles from "./CityEntry.module.css";
import { City } from "@/interfaces/city";
import { formatDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";
import { useCitiesContext } from "../../contexts/CitiesContext";
import FlagEmojiToImg from "../FlagEmojiToImg";

export default function CityEntry({ city }: Props) {
  const { currentCity } = useCitiesContext();
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityEntry} ${
          id == currentCity?.id ? styles["cityEntry--active"] : ""
        }`}
      >
        <span className={styles.emoji}>{emoji && FlagEmojiToImg(emoji)}</span>
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
