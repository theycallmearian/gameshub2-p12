import MusicKnob from './MusicKnob'
import styles from './TitleAndMusic.module.css'
import { useLocation } from 'react-router-dom'

export default function TitleAndMusic({
  selected,
  setSelected,
  volume,
  setVolume
}) {
  const location = useLocation()

  let neonTitle = 'GAMES HUB 2.0'
  if (location.pathname === '/memory') neonTitle = '🃏 MEMORY 🃏'
  if (location.pathname === '/connect-four') neonTitle = '🟡 CONNECT 4 🔴'

  return (
    <div className={styles.container}>
      <h1 className={styles.neonTitle}>{neonTitle}</h1>
      <div className={styles.subtitle}>
        😊 Elige una canción o juega sin música 😊
      </div>
      <MusicKnob
        selected={selected}
        setSelected={setSelected}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  )
}
