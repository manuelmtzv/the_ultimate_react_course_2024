import { User } from "@/interfaces/user";
import { AuthLoginPayload } from "@/types/auth";
import { AuthActionType, AuthContextType } from "@/types/authContext";
import { useReducer } from "react";

const FAKE_USER: User = {
  name: "John Doe",
  avatar: "https://i.pravatar.cc/150?img=68",
  password: "password",
  email: "email@email.com",
};

const initialState: AuthContextType = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  login: () => {},
  logout: () => {},
};

function reducer(state: AuthContextType, action: AuthActionType) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "logout":
      return { ...state, user: null, isAuthenticated: false, isLoading: false };
    default:
      return state;
  }
}

export function useAuth() {
  const [{ user, isAuthenticated, ...rest }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login({ email, password }: AuthLoginPayload) {
    dispatch({ type: "loading" });

    setTimeout(() => {
      if (email === FAKE_USER.email && password === FAKE_USER.password) {
        dispatch({ type: "login", payload: FAKE_USER });
      } else {
        dispatch({ type: "logout" });
      }
    }, 1000);
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return { user, isAuthenticated, ...rest, login, logout };
}
