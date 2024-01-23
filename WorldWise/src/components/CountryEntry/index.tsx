import FlagEmojiToImg from "../FlagEmojiToImg";
import styles from "./CountryEntry.module.css";
import { Country } from "@/interfaces/country";

export default function CountryItem({ country }: Props) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji && FlagEmojiToImg(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

interface Props {
  country: Country;
}
