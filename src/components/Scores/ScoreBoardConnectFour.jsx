import styles from './ScoreBoard.module.css'

export default function ScoreBoardConnectFour({ scores }) {
  if (!scores) return null
  return (
    <div className={`${styles.scoreBoard} ${styles.scoreBoardC4}`}>
      <div className={styles.c4BigTitle}>
        <span className={styles.trophy}>🏆</span> PARTIDAS:{' '}
        <b>{scores.games}</b>
      </div>
      <div className={styles.c4ScoreRow}>
        <div className={styles.c4ScoreBlock}>
          <span
            className={styles.c4Emoji}
            style={{ color: 'var(--color-warning)' }}
          >
            🟡
          </span>
          <span className={styles.c4WinLabel}>WINS</span>
          <span className={styles.c4Num}>{scores.yellow}</span>
        </div>
        <div className={styles.c4ScoreBlock}>
          <span
            className={styles.c4Emoji}
            style={{ color: 'var(--color-accent)' }}
          >
            🔴
          </span>
          <span className={styles.c4WinLabel}>WINS</span>
          <span className={styles.c4Num}>{scores.red}</span>
        </div>
      </div>
    </div>
  )
}
