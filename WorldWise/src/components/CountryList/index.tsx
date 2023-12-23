import styles from "./CountryList.module.css";
import Spinner from "../Spinner";
import CityEntry from "../CityEntry";
import Message from "../Message";
import { City } from "@/interfaces/city";
import { objectOmit } from "@vueuse/core";

export default function CountryList({ cities, isLoading }: Props) {
  if (isLoading) return <Spinner />;

  if (!cities.length && !isLoading)
    return (
      <Message message="Add your first city by clicking on a country on the map" />
    );

  const countries = cities.reduce((acc, cur) => {
    if (acc.map(el => el.city).includes(cur.country)) {
      return acc;
    } else {
      return [...acc, cur];
    }
  }, [])

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => {
        return <CityEntry key={city.id} city={city} />;
      })}
    </ul>
  );
}

interface Props {
  cities: City[];
  isLoading: boolean;
}
