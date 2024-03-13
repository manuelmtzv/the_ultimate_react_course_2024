import PageNavigation from "@/components/PageNavigation";
import styles from "./LoginView.module.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

export default function LoginView() {
  const [email, setEmail] = useState("email@email.com");
  const [password, setPassword] = useState("password");
  const { login, isAuthenticated, isLoading } = useAuthContext();
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email && password) {
      login({ email, password });
    }
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app", {
          replace: true,
        });
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNavigation />

      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button buttonType="primary" isLoading={isLoading}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
