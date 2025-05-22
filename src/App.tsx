import './App.css'
import { Circle } from './components/Circle'
import { Grid, Box } from '@mui/material'

const ROWS = 6;
const COLUMNS = 7;

function App() {
  return (
    <div className="App">

      <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} marginBottom={2}>
        {Array.from({ length: COLUMNS }).map((_, rowIdx) => {
          return (
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                bgcolor: 'gray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 80 / 4
              }}
            >
              ⬇︎
            </Box>
          )
        })}
      </Grid>


      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems='center'
        sx={{ border: 2, padding: 2, width: 'auto' }}
      >
        {Array.from({ length: ROWS }).map((_, rowIdx) => {
          // Row
          const displayRowIdx = 5 - rowIdx; // 0 at bottom
          return (
            <Grid
              container
              key={displayRowIdx}
              spacing={2}
            >
              {Array.from({ length: COLUMNS }).map((_, colIdx) => (
                // Column
                <Grid key={colIdx}>
                  <Circle id={[displayRowIdx, colIdx]} color='lightgray'> {`${displayRowIdx}${colIdx}`}</Circle>
                </Grid>
              ))}
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
}

export default App
