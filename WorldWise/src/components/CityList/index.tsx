import styles from "./CityList.module.css";
import { City } from "../../interfaces/city";
import Spinner from "../Spinner";
import CityEntry from "../CityEntry";
import Message from "../Message";

export default function CityList({ cities, isLoading }: Props) {
  if (isLoading) return <Spinner />;

  if (!cities.length && !isLoading)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
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
