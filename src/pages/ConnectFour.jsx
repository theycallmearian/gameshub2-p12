import RetroFrame from "../components/Layout/RetroFrame";
import ConnectFourBoard from "../components/ConnectFour/ConnectFourBoard";
import useConnectFourGame from "../hooks/useConnectFourGame";
import styles from "./ConnectFour.module.css";
import { useState, useEffect } from "react";
import ScoreBoardConnectFour from "../components/Scores/ScoreBoardConnectFour";

const STORAGE_KEY = "retro-c4-scores";

export default function ConnectFour() {
  const { state, dispatch } = useConnectFourGame();
  const [scores, setScores] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { red: 0, yellow: 0, games: 0 };
  });

  useEffect(() => {
    if (state.winner) {
      const winnerKey = state.winner === "red" ? "red" : "yellow";
      const newScores = {
        ...scores,
        [winnerKey]: scores[winnerKey] + 1,
        games: scores.games + 1,
      };
      setScores(newScores);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newScores));
    }
    // eslint-disable-next-line
  }, [state.winner]);

  function handleColumn(col) {
    dispatch({ type: "DROP_TOKEN", col });
  }
  function handleReset() {
    dispatch({ type: "RESET" });
  }

  return (
    <RetroFrame>
      <div className={styles.turn}>
        <strong>Turno:</strong>{" "}
        <span style={{
          color: state.currentPlayer === "red" ? "var(--color-accent)" : "var(--color-warning)"
        }}>
          {state.currentPlayer === "red" ? "Rojo" : "Amarillo"}
        </span>
      </div>
      <ConnectFourBoard board={state.board} onColumnClick={handleColumn} />
      <button className={`${styles.resetBtn} btn`} onClick={handleReset}>Reset</button>
      {state.winner && (
        <div className={styles.winner}>
          ¡Gana {state.winner === "red" ? "Rojo" : "Amarillo"}!
        </div>
      )}
      <ScoreBoardConnectFour scores={scores} />
    </RetroFrame>
  );
}
