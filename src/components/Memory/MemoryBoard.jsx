import React from 'react'
import styles from './MemoryBoard.module.css'

export default function MemoryBoard({
  cards,
  flipped,
  matched,
  showAll,
  onCardClick
}) {
  return (
    <div className={styles.memoryBoard}>
      {cards.map((card, idx) => {
        const isFlipped =
          flipped.includes(idx) || matched.includes(idx) || showAll
        const isMatched = matched.includes(idx)

        return (
          <div
            key={idx}
            className={`${styles.card} ${isFlipped ? styles.flipped : ''} ${
              isMatched ? styles.matched : ''
            }`}
            onClick={() => !isFlipped && onCardClick(idx)}
            tabIndex={0}
            aria-label={isFlipped ? card : ''}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                {isMatched ? '✅' : isFlipped ? card : ''}
              </div>
              <div className={styles.cardBack}>{}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
