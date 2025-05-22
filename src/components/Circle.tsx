import { Box } from '@mui/material'

const SIZE = 80;

export type Status = 0 | 1 | 2
// 0 = lightgray, 1 = red, 2 = blue

type Props = {
  children: React.ReactNode
  id: [number, number] // Row and column index
  color: Status // Color of the circle
}

export const Circle = ({ children, color }: Props) => {
  return (
    <Box
      sx={{
        width: SIZE,
        height: SIZE,
        borderRadius: '50%',
        bgcolor: color == 0 ? 'lightgray' : color == 1 ? 'red' : 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: SIZE / 4
      }}
    >
      {children}
    </Box>
  )
}