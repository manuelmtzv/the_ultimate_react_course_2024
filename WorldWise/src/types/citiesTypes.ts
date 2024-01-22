import { type ActionWithPayload } from "@/types/generalTypes";
import { type City } from "@/interfaces/city";

export type CitiesContextState = {
  cities: City[];
  isLoading: boolean;
  error: string;
  currentCity?: City;
  getCity: (id: string) => Promise<void>;
};

export type LoadingAction = { type: "loading" };
export type CitiesLoadedAction = ActionWithPayload<"cities/loaded", City[]>;
export type CityLoadedAction = ActionWithPayload<
  "city/loaded",
  City | undefined
>;
export type RejectedAction = ActionWithPayload<"rejected", string>;

export type CitiesContextActionTypes =
  | LoadingAction
  | CitiesLoadedAction
  | CityLoadedAction
  | RejectedAction;
