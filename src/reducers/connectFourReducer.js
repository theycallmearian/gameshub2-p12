export const ROWS = 6
export const COLS = 7

export const initialConnectFourState = {
  board: Array.from({ length: ROWS }, () => Array(COLS).fill(null)),
  currentPlayer: 'red',
  winner: null
}

function checkWinner(board) {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = board[r][c]
      if (!cell) continue
      if (
        c + 3 < COLS &&
        cell === board[r][c + 1] &&
        cell === board[r][c + 2] &&
        cell === board[r][c + 3]
      )
        return cell
      if (
        r + 3 < ROWS &&
        cell === board[r + 1][c] &&
        cell === board[r + 2][c] &&
        cell === board[r + 3][c]
      )
        return cell
      if (
        r - 3 >= 0 &&
        c + 3 < COLS &&
        cell === board[r - 1][c + 1] &&
        cell === board[r - 2][c + 2] &&
        cell === board[r - 3][c + 3]
      )
        return cell
      if (
        r + 3 < ROWS &&
        c + 3 < COLS &&
        cell === board[r + 1][c + 1] &&
        cell === board[r + 2][c + 2] &&
        cell === board[r + 3][c + 3]
      )
        return cell
    }
  }
  return null
}

export function connectFourReducer(state, action) {
  switch (action.type) {
    case 'DROP_TOKEN':
      if (state.winner) return state
      const { col } = action
      const row = [...Array(ROWS).keys()]
        .reverse()
        .find((r) => !state.board[r][col])
      if (row === undefined) return state
      const newBoard = state.board.map((rowArr) => [...rowArr])
      newBoard[row][col] = state.currentPlayer
      const winner = checkWinner(newBoard)
      return {
        board: newBoard,
        currentPlayer: state.currentPlayer === 'red' ? 'yellow' : 'red',
        winner
      }
    case 'RESET':
      return initialConnectFourState
    default:
      return state
  }
}
