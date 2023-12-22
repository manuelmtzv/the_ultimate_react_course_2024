import { Country } from "../../interfaces/country";
import styles from "./CountryItem.module.css";

export default function CountryItem({ country }: Props) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

interface Props {
  country: Country;
}
