import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import {
  CitiesContextActionTypes,
  CitiesContextState,
} from "@/types/citiesTypes";

const BASE_URL = "http://localhost:8001";
export const CitiesContext = createContext<CitiesContextState | null>(null);

const initialState: CitiesContextState = {
  cities: [],
  isLoading: false,
  error: "",
  currentCity: undefined,
  getCity: async () => await Promise.resolve(),
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

function CitiesProvider({ children }: CitiesProviderProps) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
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
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
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

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCitiesContext };
