import styles from './TitleAndMusic.module.css'
import { useLocation } from 'react-router-dom'

export default function TitleAndMusic() {
  const location = useLocation()
  let neonTitle = 'GAMES HUB 2.0'
  if (location.pathname === '/memory') neonTitle = '🃏 MEMORY 🃏'
  if (location.pathname === '/connect-four') neonTitle = '🟡 CONNECT 4 🔴'
  return (
    <div className={styles.container}>
      <h1 className={styles.neonTitle}>{neonTitle}</h1>
    </div>
  )
}
