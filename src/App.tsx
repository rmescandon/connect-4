import './App.css'
import { Grid, Box } from '@mui/material'
import { Column } from './components/Column';
import { useState } from 'react';


const COLUMNS = 7;


export const App = () => {
  const [turn, setTurn] = useState<1 | 2>(1); // 1 = red, 2 = blue
  const changeTurn = () => {
    setTurn(turn === 1 ? 2 : 1);
  }
  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems='center'
        sx={{ border: 2, padding: 2, width: 'auto' }}
      >
        {Array.from({ length: COLUMNS }).map((_, colIdx) => {
          return (<Column id={colIdx} turn={turn} changeTurnCallback={changeTurn} />)
        })}
      </Grid>
    </div>
  )
}

export default App
