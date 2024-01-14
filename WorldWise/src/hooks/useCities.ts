import { useEffect, useReducer, useCallback } from "react";
import cityService from "../services/cities";
import type {
  CitiesActionTypes,
  CitiesContextState,
} from "../types/citiesTypes";

const initialState: CitiesContextState = {
  cities: [],
  loading: false,
  error: false,
  currentCity: undefined,
  setCity: () => Promise.resolve(),
};

export type ActionWithPayload<T extends string, P> = {
  type: T;
  payload: P;
};

const reducer = (state: CitiesContextState, action: CitiesActionTypes) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SUCCESS_CITIES":
      return { ...state, loading: false, cities: action.payload };
    case "SET_CURRENT_CITY":
      return { ...state, loading: false, currentCity: action.payload };
    default:
      return state;
  }
};

export const useCities = () => {
  const { getCities, getCity } = cityService;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const { data } = await getCities();
        dispatch({ type: "SUCCESS_CITIES", payload: data });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: true });
      }
    };
    fetchCities();
  }, [getCities]);

  const setCity = useCallback(
    async (id: string) => {
      if (state.currentCity?.id == Number(id)) return;

      dispatch({ type: "SET_LOADING" });

      const { data } = await getCity(id);
      dispatch({ type: "SET_CURRENT_CITY", payload: data });
    },
    [getCity, state.currentCity]
  );

  return {
    ...state,
    setCity,
  };
};
