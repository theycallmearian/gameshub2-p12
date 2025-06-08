import React, { useRef, useEffect } from "react";
import "./MusicKnob.css";

const SONGS = [
  { label: "OFF", file: null },
  { label: "1", file: "/songs/song1.mp3" },
  { label: "2", file: "/songs/song2.mp3" },
  { label: "3", file: "/songs/song3.mp3" },
  { label: "4", file: "/songs/song4.mp3" },
  { label: "5", file: "/songs/song5.mp3" }
];

export default function MusicKnob({ selected, setSelected, volume, setVolume }) {
  const audioRef = useRef();

  useEffect(() => {
    if (!SONGS[selected].file) {
      if (audioRef.current) audioRef.current.pause();
      return;
    }
    if (audioRef.current) {
      audioRef.current.src = SONGS[selected].file;
      audioRef.current.play();
    }
  }, [selected]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Solo una bolita: la posición actual
  const knobAngles = [
    "rotate(-90deg)", // OFF
    "rotate(-30deg)",
    "rotate(30deg)",
    "rotate(90deg)",
    "rotate(150deg)",
    "rotate(210deg)"
  ];

  return (
    <div className="wrapper" style={{ margin: "0 auto", width: 230 }}>
      <audio ref={audioRef} loop />
      <div className="knob-outer">
        <div className="knob-base">
          <hr className="divider" />
          <hr className="divider" />
          <hr className="divider" />
          <div className="control">
            {SONGS.map((song, idx) => (
              <label htmlFor={`fan_${song.label.toLowerCase()}`} key={idx}>
                <span className={song.label === "OFF" ? "off" : ""}>{song.label}</span>
                <input
                  id={`fan_${song.label.toLowerCase()}`}
                  name="fan"
                  type="radio"
                  checked={selected === idx}
                  onChange={() => setSelected(idx)}
                  style={{ display: "none" }}
                />
              </label>
            ))}
            {/* Pointer */}
            <div
              className="pointer"
              style={{
                transform: knobAngles[selected]
              }}
            >
              <span></span>
            </div>
            {/* Solo una bolita para la posición */}
            <div
              className="marker"
              style={{
                transform: knobAngles[selected]
              }}
            >
              <span></span>
            </div>
            <div className="knob-middle">
              <div className="knob-inner">
                <div className="knob-core">
                  <div className="status">
                    {/* El led rojo solo si está en OFF */}
                    <div className="off-light" style={{
                      background: selected === 0 ? "#ff3c00" : "#333",
                      boxShadow: selected === 0 ? "0 0 10px #ff3c00" : "none"
                    }}></div>
                  </div>
                  {/* Volume */}
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={e => setVolume(Number(e.target.value))}
                    style={{
                      marginTop: 24,
                      width: 80,
                      accentColor: "#0f0",
                      background: "transparent",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 8,
        textAlign: "center",
        fontSize: 14,
        color: "var(--color-secondary)"
      }}>
      </div>
    </div>
  );
}
