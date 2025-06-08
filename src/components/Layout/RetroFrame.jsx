import styles from './RetroFrame.module.css';

export default function RetroFrame({ title, children }) {
  return (
    <div className={styles.frame}>
      {children}
    </div>
  );
}
