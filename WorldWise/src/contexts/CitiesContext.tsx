import { createContext } from "react";
import { useCities } from "../hooks/useCities";
import { CitiesContextState } from "../types/citiesTypes";

export type CitiesProviderProps = {
  children: React.ReactNode;
};

export const CitiesContext = createContext<CitiesContextState | null>(null);

export function CitiesProvider({ children }: CitiesProviderProps) {
  const state = useCities();

  return (
    <CitiesContext.Provider value={{ ...state }}>
      {children}
    </CitiesContext.Provider>
  );
}
