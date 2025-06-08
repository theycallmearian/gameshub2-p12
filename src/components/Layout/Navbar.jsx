import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const navs = [
  { path: "/", label: "🏠", text: "Inicio" },
  { path: "/memory", label: "🃏", text: "Memory" },
  { path: "/connect-four", label: "🟡", text: "Connect Four" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        {navs.map((nav) => (
          <NavLink
            to={nav.path}
            key={nav.path}
            className={({ isActive }) =>
              `${styles.menuItem} ${isActive ? styles.menuItemActive : ""}`
            }
            title={nav.text}
          >
            <span aria-label={nav.text} role="img">{nav.label}</span>
            <span className={styles.menuText}>{nav.text}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
