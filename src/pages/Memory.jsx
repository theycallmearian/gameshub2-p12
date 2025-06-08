import React, { useState, useEffect } from 'react'
import MemoryBoard from '../components/Memory/MemoryBoard'
import ScoreBoardMemory from '../components/Scores/ScoreBoardMemory'
import RetroFrame from '../components/Layout/RetroFrame'
import styles from './Memory.module.css'

const EMOJIS = ['🕹️', '👾', '🏁', '🎲', '💾', '🕰️', '🎮', '🏆']
function shuffle(arr) {
  return arr.concat(arr).sort(() => Math.random() - 0.5)
}
const STORAGE_KEY = 'retro-memory-scores'

export default function Memory() {
  const [cards, setCards] = useState(shuffle(EMOJIS))
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [showAll, setShowAll] = useState(true)
  const [scores, setScores] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  // Mostrar todos los emojis 5s al cargar
  useEffect(() => {
    setShowAll(true)
    setTimeout(() => setShowAll(false), 5000)
    // eslint-disable-next-line
  }, [cards])

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      const newScores = [{ moves }, ...scores]
        .sort((a, b) => a.moves - b.moves)
        .slice(0, 3)
      setScores(newScores)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newScores))
    }
    // eslint-disable-next-line
  }, [matched])

  function resetGame() {
    setCards(shuffle(EMOJIS))
    setFlipped([])
    setMatched([])
    setMoves(0)
    setShowAll(true)
    setTimeout(() => setShowAll(false), 5000)
  }

  function handleCardClick(idx) {
    if (
      showAll ||
      flipped.length === 2 ||
      flipped.includes(idx) ||
      matched.includes(idx)
    )
      return
    const newFlipped = [...flipped, idx]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1)
      const [first, second] = newFlipped
      if (cards[first] === cards[second]) {
        setTimeout(() => {
          setMatched((m) => [...m, first, second])
          setFlipped([])
        }, 700)
      } else {
        setTimeout(() => {
          setFlipped([])
        }, 700)
      }
    }
  }

  return (
    <RetroFrame>
      <div className={styles.scoreLine}>Movimientos: {moves}</div>
      <MemoryBoard
        cards={cards}
        flipped={flipped}
        matched={matched}
        showAll={showAll}
        onCardClick={handleCardClick}
      />
      <button className={`${styles.resetBtn} btn`} onClick={resetGame}>
        Reset
      </button>
      <ScoreBoardMemory scores={scores} />
    </RetroFrame>
  )
}
