import { City } from "@/interfaces/city";
import {Country} from '@/interfaces/country'
import { omit } from "rambda";

type UseCountries = (cities: City[]) => {
  countries: Country[];
};

export const useCountries: UseCountries = (cities) => {
  const countries = cities.reduce((acc: Country[], cur) => {
    if (acc.map(el => el.country).includes(cur.country)) {
      return acc;
    } else {
      return [...acc, omit(['cityName'], cur)];
    }
  }, [])

  return {
    countries
  }
}