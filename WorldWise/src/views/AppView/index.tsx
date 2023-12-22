import styles from "./AppView.module.css";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";

export default function AppView() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
