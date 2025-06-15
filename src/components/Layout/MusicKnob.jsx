import React, { useEffect, useRef } from 'react'
import './MusicKnob.css'

const SONGS = [
  { label: '🔇', file: null },
  { label: '1', file: '/songs/song1.mp3' },
  { label: '2', file: '/songs/song2.mp3' },
  { label: '3', file: '/songs/song3.mp3' },
  { label: '4', file: '/songs/song4.mp3' },
  { label: '5', file: '/songs/song5.mp3' }
]

export default function MusicKnob({
  selected,
  setSelected,
  volume,
  setVolume
}) {
  const audioRef = useRef()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || selected < 0 || selected >= SONGS.length) return
    if (!SONGS[selected].file) {
      audio.pause()
      return
    }
    audio.pause()
    audio.src = SONGS[selected].file
    const playPromise = audio.play()
    if (playPromise !== undefined) {
      playPromise.catch((e) => {
        console.warn('Playback failed', e)
      })
    }
  }, [selected])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  return (
    <>
      <audio ref={audioRef} loop />
      <div className='radio-input'>
        {SONGS.map((song, index) => (
          <label key={song.label}>
            <input
              type='radio'
              name='value-radio'
              value={index}
              checked={selected === index}
              onChange={() => setSelected(index)}
            />
            <span>{song.label}</span>
          </label>
        ))}
        <span className='selection'></span>
      </div>
    </>
  )
}
