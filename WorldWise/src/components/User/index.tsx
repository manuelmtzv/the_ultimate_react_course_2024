import styles from "./User.module.css";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function User() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    user && (
      <div className={styles.user}>
        <img src={user.avatar} alt={user.name} />
        <p>Welcome, {user.name}</p>
        <button onClick={handleClick}>Logout</button>
      </div>
    )
  );
}
