import styles from "./CountryList.module.css";
import Spinner from "../Spinner";
import CountryEntry from "../CountryEntry";
import Message from "../Message";
import { useCountries } from "../../hooks/useCountries";
import { useCitiesContext } from "@/hooks/useCitiesContext";

export default function CountryList() {
  const { cities, isLoading } = useCitiesContext();

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
