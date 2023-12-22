import { type ActionWithPayload } from "@/types/generalTypes";
import { type City } from "@/interfaces/city";

export type UseCitiesState = {
  cities: City[];
  loading: boolean;
  error: boolean;
};

export type LoadingCitiesAction = { type: "LOADING_CITIES" };
export type ErrorCitiesAction = ActionWithPayload<"ERROR_CITIES", boolean>;
export type SuccessCitiesAction = ActionWithPayload<"SUCCESS_CITIES", City[]>;

export type ActionTypes =
  | LoadingCitiesAction
  | ErrorCitiesAction
  | SuccessCitiesAction;
