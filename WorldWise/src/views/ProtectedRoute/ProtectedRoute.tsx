import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(function () {
    isAuthenticated || navigate("/");
  });

  return isAuthenticated && children;
}
