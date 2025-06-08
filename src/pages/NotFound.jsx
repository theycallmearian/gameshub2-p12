import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFoundContainer}>
      <h2 className={styles.title}>404</h2>
      <p>Página no encontrada.</p>
      <Link to="/" className="btn" title="Inicio">🏠 Volver al inicio</Link>
    </section>
  );
}
