import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}  <a href="https://ariancastroportfolio.netlify.app/" target="_blank">By Àrian Castro</a>
    </footer>
  );
}
