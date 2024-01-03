import styles from "./CountryList.module.css";
import Spinner from "../Spinner";
import CountryEntry from "../CountryEntry";
import Message from "../Message";
import { City } from "@/interfaces/city";
import { useCountries } from "../../hooks/useCountries";

export default function CountryList({ cities, isLoading }: Props) {
  const { countries } = useCountries(cities);
  if (isLoading) return <Spinner />;  

  if (!countries.length && !isLoading)
    return (
      <Message message="Add your first city by clicking on a country on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryEntry key={country.id} country={country} />;
      })}
    </ul>
  );
}

interface Props {
  cities: City[];
  isLoading: boolean;
}
