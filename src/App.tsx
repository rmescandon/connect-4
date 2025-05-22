import './App.css'
import { Grid } from '@mui/material'
import { Circle, type Status } from './components/Circle';
import { useState } from 'react';
import { ROWS, COLUMNS } from './logic/constants';
import { checkWinner } from './logic/logic';
import { GameSnackbar } from './components/Snackbar';


export const App = () => {
  const [turn, setTurn] = useState<1 | 2>(1); // 1 = red, 2 = blue
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
    console.log("Clicked column", colIdx, "turn", turn, "newBoard", newBoard);
    setBoard(newBoard);
    if (checkWinner(newBoard, turn)) {
      setWinner(turn);
    }
    setTurn(turn === 1 ? 2 : 1);
  }

  return (
    <div className="App">

      <GameSnackbar
        resetHandler={() => {
          setWinner(0);
          setBoard(Array.from({ length: COLUMNS }, () => Array(ROWS).fill(0 as Status)));
          setTurn(1); 
        }}
        winner={winner}
      />

      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems='center'
        sx={{ border: 2, padding: 2, width: 'auto' }}
      >
        {Array.from({ length: COLUMNS }).map((_, colIdx) => {

          return (
            <Grid
              container
              direction="column"
              key={colIdx}
              spacing={2}
              onClick={() => handleClick(colIdx)}
            >
              {Array.from({ length: ROWS }).map((_, rowIdx) => {

                const displayRowIdx = ROWS - 1 - rowIdx; // Reverse the index to start from the bottom
                return (
                  <Circle
                    id={[colIdx, rowIdx]} // Row and column index
                    color={board[colIdx][rowIdx] as Status} // Color of the circle
                  >
                    {`${displayRowIdx}${colIdx}`}
                  </Circle>
                )

              })}
            </Grid>
          )

        })}
      </Grid>
    </div>
  )
}

export default App

