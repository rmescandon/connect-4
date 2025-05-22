import { useState } from 'react'
import { Box } from '@mui/material'

const SIZE = 80;
// const COLOR = '#1976d2'

type Status = 'red' | 'blue' | 'lightgray'

type Props = {
    children: React.ReactNode
    id: [number, number] // Row and column index
    color: Status // Color of the circle
}

export const Circle = ({ children, id, color }: Props) => {
    return (
        <Box
            sx={{
                width: SIZE,
                height: SIZE,
                borderRadius: '50%',
                bgcolor: color,
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