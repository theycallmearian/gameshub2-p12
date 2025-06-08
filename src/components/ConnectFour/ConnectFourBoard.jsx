import styles from "./ConnectFourBoard.module.css";
import { ROWS, COLS } from "../../reducers/connectFourReducer";

export default function ConnectFourBoard({ board, onColumnClick }) {
  return (
    <div className={styles.connectFourBoard}>
      {board.map((row, rIdx) =>
        row.map((cell, cIdx) => (
          <div
            key={`${rIdx}-${cIdx}`}
            className={`${styles.cell} ${
              cell === "red"
                ? styles.red
                : cell === "yellow"
                ? styles.yellow
                : ""
            }`}
            onClick={() => onColumnClick(cIdx)}
          />
        ))
      )}
    </div>
  );
}
