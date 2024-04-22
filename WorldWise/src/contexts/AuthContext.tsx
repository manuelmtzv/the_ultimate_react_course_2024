import { useAuth } from "@/hooks/useAuth";
import { AuthContextProviderProps, AuthContextType } from "@/types/authContext";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: AuthContextProviderProps) {
  const state = useAuth();

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
