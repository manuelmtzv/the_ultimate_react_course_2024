import styles from "./CountryList.module.css";
import Spinner from "../Spinner";
import CityEntry from "../CityEntry";
import Message from "../Message";
import { City } from "@/interfaces/city";

export default function CountryList({ cities, isLoading }: Props) {
  if (isLoading) return <Spinner />;

  if (!cities.length && !isLoading)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

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
