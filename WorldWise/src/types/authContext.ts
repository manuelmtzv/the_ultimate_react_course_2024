import { User } from "@/interfaces/user";
import { ActionWithPayload } from "./generalTypes";
import { AuthLoginPayload } from "./auth";

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (loginPayload: AuthLoginPayload) => void;
  logout: () => void;
};

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

export type LoadingAction = { type: "loading" };
export type LoginAction = ActionWithPayload<"login", User>;
export type LogoutAction = { type: "logout" };

export type AuthActionType = LoadingAction | LoginAction | LogoutAction;
