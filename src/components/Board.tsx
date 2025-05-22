import Grid from '@mui/material/Grid';
import { ROWS, COLUMNS } from '../logic/constants';
import { Circle, type Status } from './Circle';

type Props = {
  board: Array<Array<Status>>;
  clickHandler: (colIdx: number) => void;
}

export const Board = ({ board, clickHandler }: Props) => {
  return (
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
            onClick={() => clickHandler(colIdx)}
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
  )
}