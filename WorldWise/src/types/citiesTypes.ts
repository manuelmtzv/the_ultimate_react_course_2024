import { type ActionWithPayload } from "@/types/generalTypes";
import { type City } from "@/interfaces/city";

export type CitiesContextState = {
  cities: City[];
  loading: boolean;
  error: boolean;
  currentCity?: City;
  setCity: (id: string) => Promise<void>;
};

export type LoadingAction = { type: "SET_LOADING" };
export type ErrorCitiesAction = ActionWithPayload<"SET_ERROR", boolean>;
export type SuccessCitiesAction = ActionWithPayload<"SUCCESS_CITIES", City[]>;
export type SetCurrentCityAction = ActionWithPayload<
  "SET_CURRENT_CITY",
  City | undefined
>;

export type CitiesActionTypes =
  | LoadingAction
  | ErrorCitiesAction
  | SuccessCitiesAction
  | SetCurrentCityAction;
