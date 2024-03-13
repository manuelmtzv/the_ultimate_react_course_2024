import { type ActionWithPayload } from "@/types/generalTypes";
import { CreateCity, type City } from "@/interfaces/city";

export type CitiesContextState = {
  cities: City[];
  isLoading: boolean;
  error: string;
  currentCity?: City;
  getCity: (id: string) => Promise<void>;
  createCity: (city: CreateCity) => Promise<void>;
  deleteCity: (id: string | number) => Promise<void>;
};

export type LoadingAction = { type: "loading" };
export type CitiesLoadedAction = ActionWithPayload<"cities/loaded", City[]>;
export type CityCreatedAction = ActionWithPayload<"city/created", City>;
export type CityDeletedAction = ActionWithPayload<
  "city/deleted",
  string | number
>;
export type CityLoadedAction = ActionWithPayload<
  "city/loaded",
  City | undefined
>;
export type RejectedAction = ActionWithPayload<"rejected", string>;

export type CitiesContextActionTypes =
  | LoadingAction
  | CitiesLoadedAction
  | CityCreatedAction
  | CityDeletedAction
  | CityLoadedAction
  | RejectedAction;
