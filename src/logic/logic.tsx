import { ROWS, COLUMNS } from "./constants";
import type { Status } from "../components/Circle";

export const checkWinner = (board: Array<Array<Status>>, player: Status) => {
  // Check horizontal
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS - 3; col++) {
      if (
        board[col][row] === player &&
        board[col + 1][row] === player &&
        board[col + 2][row] === player &&
        board[col + 3][row] === player
      ) {
        return true;
      }
    }
  }

  // Check vertical
  for (let col = 0; col < COLUMNS; col++) {
    for (let row = 0; row < ROWS - 3; row++) {
      if (
        board[col][row] === player &&
        board[col][row + 1] === player &&
        board[col][row + 2] === player &&
        board[col][row + 3] === player
      ) {
        return true;
      }
    }
  }

  // Check diagonal (bottom-left to top-right)
  for (let col = 0; col < COLUMNS - 3; col++) {
    for (let row = 3; row < ROWS; row++) {
      if (
        board[col][row] === player &&
        board[col + 1][row - 1] === player &&
        board[col + 2][row - 2] === player &&
        board[col + 3][row - 3] === player
      ) {
        return true;
      }
    }
  }
  // Check diagonal (top-left to bottom-right)
  for (let col = 0; col < COLUMNS - 3; col++) {
    for (let row = 0; row < ROWS - 3; row++) {
      if (
        board[col][row] === player &&
        board[col + 1][row + 1] === player &&
        board[col + 2][row + 2] === player &&
        board[col + 3][row + 3] === player
      ) {
        return true;
      }
    }
  }
  return false;
}