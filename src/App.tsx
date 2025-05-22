import './App.css'
import { type Status } from './components/Circle';
import { useState } from 'react';
import { ROWS, COLUMNS } from './logic/constants';
import { checkWinner, checkFullBoard } from './logic/logic';
import { GameSnackbar } from './components/Snackbar';
import { Board } from './components/Board';


export const App = () => {
  const [turn, setTurn] = useState<1 | 2 | -1>(1); // 1 = red, 2 = blue, -1 = none
  const [winner, setWinner] = useState<Status>(0); // 0 = no winner, 1 = red, 2 = blue
  const [board, setBoard] = useState<Array<Array<Status>>>(Array.from({ length: COLUMNS }, () => Array(ROWS).fill(0 as Status))); // 0 = empty, 1 = red, 2 = blue

  const handleClick = (colIdx: number) => {
    if (winner !== 0) {
      return;
    }
    const newBoard = [...board];
    for (let i = ROWS - 1; i >= 0; i--) {
      if (newBoard[colIdx][i] === 0) {
        newBoard[colIdx][i] = turn;
        break;
      }
    }
    setBoard(newBoard);
    if (checkWinner(newBoard, turn)) {
      setWinner(turn);
    } else if (checkFullBoard(newBoard)) {
      setWinner(-1); // -1 = draw
    }
    setTurn(turn === 1 ? 2 : 1);
  }

  return (
    <div className="App">

      <GameSnackbar
        resetHandler={() => {
          setBoard(Array.from({ length: COLUMNS }, () => Array(ROWS).fill(0 as Status)));
          setWinner(0);
          setTurn(1);
        }}
        winner={winner}
      />

      <Board
        board={board}
        clickHandler={handleClick}
      />

    </div>
  )
}

export default App

