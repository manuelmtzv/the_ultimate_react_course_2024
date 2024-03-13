import styles from "./AppView.module.css";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import User from "@/components/User";

export default function AppView() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
