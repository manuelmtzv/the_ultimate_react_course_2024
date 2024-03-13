import { createContext, useEffect, useReducer, useCallback } from "react";
import {
  CitiesContextActionTypes,
  CitiesContextState,
} from "@/types/citiesTypes";
import { CreateCity } from "@/interfaces/city";
import { default as cityServices } from "@/services/city";

export const CitiesContext = createContext<CitiesContextState | null>(null);

const initialState: CitiesContextState = {
  cities: [],
  isLoading: false,
  error: "",
  currentCity: undefined,
  getCity: async () => await Promise.resolve(),
  createCity: async () => await Promise.resolve(),
  deleteCity: async () => await Promise.resolve(),
};

function reducer(
  state: CitiesContextState,
  action: CitiesContextActionTypes
): CitiesContextState {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: undefined,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
}

type CitiesProviderProps = {
  children: React.ReactNode;
};

export function CitiesProvider({ children }: CitiesProviderProps) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        const { data } = await cityServices.getCities();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id: string) {
      if (Number(id) === currentCity?.id) return;

      dispatch({ type: "loading" });

      try {
        const { data } = await cityServices.getCity(id);
        dispatch({ type: "city/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city...",
        });
      }
    },
    [currentCity?.id]
  );

  const createCity = useCallback(async function createCity(city: CreateCity) {
    dispatch({ type: "loading" });

    try {
      const { data } = await cityServices.createCity(city);
      dispatch({ type: "city/created", payload: data });
      console.log("City created!", data);
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city...",
      });
    }
  }, []);

  const deleteCity = useCallback(async function deleteCity(
    id: string | number
  ) {
    dispatch({ type: "loading" });

    try {
      await cityServices.deleteCity(id);
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city...",
      });
    }
  },
  []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
