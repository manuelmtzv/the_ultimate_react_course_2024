import { useEffect, useReducer } from "react";
import cities from "../services/cities";
import type { UseCitiesState, ActionTypes } from "../types/citiesTypes";

const initialState: UseCitiesState = {
  cities: [],
  loading: false,
  error: false,
};

export type ActionWithPayload<T extends string, P> = {
  type: T;
  payload: P;
};

const reducer = (state: UseCitiesState, action: ActionTypes) => {
  switch (action.type) {
    case "LOADING_CITIES":
      return { ...state, loading: true };
    case "ERROR_CITIES":
      return { ...state, loading: false, error: action.payload };
    case "SUCCESS_CITIES":
      return { ...state, loading: false, cities: action.payload };
    default:
      return state;
  }
};

export const useCities = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: "LOADING_CITIES" });
      try {
        const { data } = await cities.getCities();
        dispatch({ type: "SUCCESS_CITIES", payload: data });
      } catch (error) {
        dispatch({ type: "ERROR_CITIES", payload: true });
      }
    };
    fetchCities();
  }, []);

  return {
    ...state,
  };
};
