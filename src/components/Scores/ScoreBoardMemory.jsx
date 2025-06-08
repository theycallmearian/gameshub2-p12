import styles from './ScoreBoard.module.css'

export default function ScoreBoardMemory({ scores }) {
  if (!scores || !scores.length) return null
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.rankingTitle}>
        <span className={styles.trophy}>🏆</span> TOP 3
      </div>
      <ul className={styles.scoreList}>
        {scores.map((score, idx) => (
          <li key={idx} className={styles.memoryItem}>
            <span className={styles.memoryRank}>#{idx + 1}</span>
            <span className={styles.memoryMoves}>{score.moves} MOVES</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
