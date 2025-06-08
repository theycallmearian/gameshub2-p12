import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1 className={styles.title}>GAME SELECT</h1>
      <div className={styles.buttons}>
        <Link className="btn" to="/memory" title="Memory">🃏</Link>
        <Link className="btn" to="/connect-four" title="Connect Four">🟡</Link>
      </div>
    </section>
  );
}
